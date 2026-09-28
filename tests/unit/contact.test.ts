import { beforeEach, describe, expect, it } from 'vitest';
import { contactSchema, fieldErrorCodes, formDataToInput } from '@/lib/contact/schema';
import { leadOwner, recipients } from '@/lib/contact/routing';
import { isHoneypotTripped, isTooFast } from '@/lib/contact/spam';
import { rateLimit, resetRateLimit, clientIp } from '@/lib/contact/rate-limit';
import { leadEmail, leadSubject } from '@/lib/contact/email';
import { normalizeUsPhone, formatUsPhone } from '@/lib/phone';

const valid = {
  name: 'Maria Lopez',
  phone: '(504) 555-0123',
  email: '',
  language: 'es',
  contactMethod: 'call',
  interests: ['final-expense-insurance'],
  bestTime: 'morning',
  message: '',
  consent: true,
};

describe('phone helpers', () => {
  it('normalizes US numbers', () => {
    expect(normalizeUsPhone('(504) 555-0123')).toBe('5045550123');
    expect(normalizeUsPhone('+1 504.555.0123')).toBe('5045550123');
    expect(normalizeUsPhone('555-0123')).toBeNull();
    expect(normalizeUsPhone('(104) 555-0123')).toBeNull();
    expect(formatUsPhone('5045550123')).toBe('(504) 555-0123');
  });
});

describe('contact schema', () => {
  it('accepts a valid lead and normalizes the phone', () => {
    const r = contactSchema.safeParse(valid);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.phone).toBe('5045550123');
      expect(r.data.email).toBeUndefined();
    }
  });

  it('requires name, phone and consent', () => {
    const r = contactSchema.safeParse({ ...valid, name: ' ', phone: '', consent: false });
    expect(r.success).toBe(false);
    if (!r.success)
      expect(fieldErrorCodes(r.error)).toMatchObject({
        name: 'nameRequired',
        phone: 'phoneRequired',
        consent: 'consentRequired',
      });
  });

  it('rejects invalid phone and email', () => {
    const r = contactSchema.safeParse({ ...valid, phone: '12345', email: 'nope' });
    expect(r.success).toBe(false);
    if (!r.success) expect(fieldErrorCodes(r.error)).toMatchObject({ phone: 'phoneInvalid', email: 'emailInvalid' });
  });

  it('needs an email when email is the contact method', () => {
    const r = contactSchema.safeParse({ ...valid, contactMethod: 'email' });
    expect(r.success).toBe(false);
    if (!r.success) expect(fieldErrorCodes(r.error).email).toBe('emailRequiredForMethod');
  });

  it('rejects unknown products', () => {
    expect(contactSchema.safeParse({ ...valid, interests: ['timeshare'] }).success).toBe(false);
  });

  it('has no fields for SSN, Medicare number, date of birth or health details', () => {
    const keys = Object.keys(contactSchema.shape);
    for (const forbidden of ['ssn', 'medicareNumber', 'dob', 'dateOfBirth', 'health', 'conditions'])
      expect(keys).not.toContain(forbidden);
  });

  it('reads FormData (consent unchecked by default = missing)', () => {
    const fd = new FormData();
    fd.set('name', 'A');
    fd.set('phone', '5045550123');
    fd.append('interests', 'life-insurance');
    fd.append('interests', 'dental-vision-insurance');
    const input = formDataToInput(fd);
    expect(input.consent).toBe(false);
    expect(input.interests).toEqual(['life-insurance', 'dental-vision-insurance']);
  });
});

describe('lead routing', () => {
  it('routes John-only interests to John', () => {
    expect(leadOwner(['final-expense-insurance', 'life-insurance'])).toBe('John');
  });
  it('routes Medicare Advantage / Supplement to Nidia', () => {
    expect(leadOwner(['medicare-advantage'])).toBe('Nidia');
    expect(leadOwner(['medicare-advantage', 'medicare-supplement'])).toBe('Nidia');
  });
  it('routes mixed, Part D, C-SNP or none to Both', () => {
    expect(leadOwner(['medicare-advantage', 'life-insurance'])).toBe('Both');
    expect(leadOwner(['part-d-prescription-drug-plans'])).toBe('Both');
    expect(leadOwner(['special-needs-plans'])).toBe('Both');
    expect(leadOwner([])).toBe('Both');
  });
  it('parses CONTACT_TO_EMAILS', () => {
    expect(recipients('nidiamartinez576@outlook.com, martj5493@gmail.com ,bad')).toEqual([
      'nidiamartinez576@outlook.com',
      'martj5493@gmail.com',
    ]);
  });
});

describe('lead email', () => {
  it('builds the subject with the owner and interests', () => {
    const lead = contactSchema.parse(valid);
    expect(leadSubject(lead, 'John', { interests: ['Final Expense'] })).toBe('[For: John] New lead: Maria Lopez — Final Expense');
  });

  it('escapes HTML and records consent', () => {
    const lead = contactSchema.parse({ ...valid, name: '<script>x</script>', email: 'm@example.com' });
    const msg = leadEmail({
      lead,
      owner: 'Both',
      to: ['a@example.com'],
      labels: { interests: [], language: 'Spanish', contactMethod: 'Phone call', bestTime: null, consentText: 'I agree…' },
      meta: { submittedAt: '2026-09-27T12:00:00Z', pageUrl: null, ip: '1.2.3.4', userAgent: null },
    });
    expect(msg.html).not.toContain('<script>');
    expect(msg.html).toContain('Consent record');
    expect(msg.text).toContain('Consent text shown: I agree…');
    expect(msg.replyTo).toBe('m@example.com');
  });
});

describe('spam protection', () => {
  beforeEach(() => resetRateLimit());

  it('flags a filled honeypot', () => {
    expect(isHoneypotTripped('http://spam')).toBe(true);
    expect(isHoneypotTripped('')).toBe(false);
    expect(isHoneypotTripped(null)).toBe(false);
  });

  it('flags submissions faster than the minimum time', () => {
    const now = 1_000_000;
    expect(isTooFast(String(now - 500), now)).toBe(true);
    expect(isTooFast(String(now - 10_000), now)).toBe(false);
    expect(isTooFast(null, now)).toBe(true);
    expect(isTooFast('abc', now)).toBe(true);
    expect(isTooFast(String(now + 5000), now)).toBe(true);
  });

  it('rate limits per IP', () => {
    for (let i = 0; i < 5; i++) expect(rateLimit('9.9.9.9', 1000 + i).ok).toBe(true);
    expect(rateLimit('9.9.9.9', 2000).ok).toBe(false);
    expect(rateLimit('8.8.8.8', 2000).ok).toBe(true);
    // Window slides after 10 minutes.
    expect(rateLimit('9.9.9.9', 1000 + 10 * 60 * 1000 + 10).ok).toBe(true);
  });

  it('reads the client IP from proxy headers', () => {
    expect(clientIp(new Headers({ 'x-forwarded-for': '1.1.1.1, 2.2.2.2' }))).toBe('1.1.1.1');
    expect(clientIp(new Headers({ 'x-real-ip': '3.3.3.3' }))).toBe('3.3.3.3');
    expect(clientIp(new Headers())).toBe('unknown');
  });
});
