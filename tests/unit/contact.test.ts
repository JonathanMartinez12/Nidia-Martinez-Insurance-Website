import { beforeEach, describe, expect, it } from 'vitest';
import { contactSchema, fieldErrorCodes, formDataToInput, topicForProduct } from '@/lib/contact/schema';
import { CONSENT_VERSION, consentRecord } from '@/lib/contact/consent';
import { smsHref } from '@/components/layout/MobileCallBar';
import { leadOwner, recipients } from '@/lib/contact/routing';
import { isHoneypotTripped, isTooFast } from '@/lib/contact/spam';
import { rateLimit, resetRateLimit, clientIp } from '@/lib/contact/rate-limit';
import { leadEmail, leadSubject } from '@/lib/contact/email';
import { normalizeUsPhone, formatUsPhone } from '@/lib/phone';

const valid = {
  name: 'Maria Lopez',
  phone: '(504) 555-0123',
  email: '',
  interests: ['final-expense-life'],
  bestTime: 'morning',
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

  it('only needs a name and a phone number', () => {
    const r = contactSchema.safeParse({ name: 'Ana', phone: '504.555.0123', interests: [] });
    expect(r.success).toBe(true);
  });

  it('accepts any common US phone format', () => {
    for (const p of ['5045550123', '(504) 555-0123', '504-555-0123', '+1 504 555 0123', '1-504-555-0123', '504.555.0123'])
      expect(contactSchema.safeParse({ ...valid, phone: p }).success, p).toBe(true);
  });

  it('requires name and phone', () => {
    const r = contactSchema.safeParse({ ...valid, name: ' ', phone: '' });
    expect(r.success).toBe(false);
    if (!r.success) expect(fieldErrorCodes(r.error)).toMatchObject({ name: 'nameRequired', phone: 'phoneRequired' });
  });

  it('rejects invalid phone and email', () => {
    const r = contactSchema.safeParse({ ...valid, phone: '12345', email: 'nope' });
    expect(r.success).toBe(false);
    if (!r.success) expect(fieldErrorCodes(r.error)).toMatchObject({ phone: 'phoneInvalid', email: 'emailInvalid' });
  });

  it('rejects unknown topics and times', () => {
    expect(contactSchema.safeParse({ ...valid, interests: ['timeshare'] }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, bestTime: 'midnight' }).success).toBe(false);
  });

  it('has no consent, language, SSN, Medicare number, date of birth or health fields', () => {
    const keys = Object.keys(contactSchema.shape);
    expect(keys.sort()).toEqual(['bestTime', 'email', 'interests', 'name', 'phone']);
  });

  it('reads FormData and de-duplicates chips', () => {
    const fd = new FormData();
    fd.set('name', 'A');
    fd.set('phone', '5045550123');
    fd.append('interests', 'turning-65');
    fd.append('interests', 'turning-65');
    fd.append('interests', 'other');
    expect(formDataToInput(fd).interests).toEqual(['turning-65', 'other']);
  });

  it('maps page products to chips', () => {
    expect(topicForProduct('medicare-advantage')).toBe('medicare-advantage');
    expect(topicForProduct('life-insurance')).toBe('final-expense-life');
    expect(topicForProduct('final-expense-insurance')).toBe('final-expense-life');
    expect(topicForProduct('part-d-prescription-drug-plans')).toBeNull();
  });
});

describe('lead routing', () => {
  it('routes Final Expense/Life to John', () => {
    expect(leadOwner(['final-expense-life'])).toBe('John');
  });
  it('routes Medicare Advantage / Supplement / Turning 65 to Nidia', () => {
    expect(leadOwner(['medicare-advantage', 'medicare-supplement', 'turning-65'])).toBe('Nidia');
  });
  it('routes mixed, Other or none to Both', () => {
    expect(leadOwner(['medicare-advantage', 'final-expense-life'])).toBe('Both');
    expect(leadOwner(['other'])).toBe('Both');
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
  const consent = consentRecord({
    text: 'By tapping Request a Call, you agree…',
    locale: 'es',
    pageUrl: 'https://www.martinezinsurancesolutions.com/es/contacto',
    timestamp: '2026-10-27T12:00:00.000Z',
  });

  it('builds the subject from the name and chips, or "General"', () => {
    const lead = contactSchema.parse(valid);
    expect(leadSubject(lead, { interests: ['Final Expense/Life'] })).toBe('New lead: Maria Lopez — Final Expense/Life');
    expect(leadSubject(lead, { interests: [] })).toBe('New lead: Maria Lopez — General');
  });

  it('escapes HTML and stores the full consent record', () => {
    const lead = contactSchema.parse({ ...valid, name: '<script>x</script>', email: 'm@example.com' });
    const msg = leadEmail({
      lead,
      owner: 'Both',
      to: ['a@example.com'],
      labels: { interests: [], language: 'Spanish', bestTime: null },
      consent,
      meta: { pageUrl: consent.pageUrl, ip: '1.2.3.4', userAgent: null },
    });
    expect(msg.html).not.toContain('<script>');
    expect(msg.html).toContain('Consent record');
    expect(msg.text).toContain('Disclosure shown: By tapping Request a Call, you agree…');
    expect(msg.text).toContain(`Disclosure version: ${CONSENT_VERSION}`);
    expect(msg.text).toContain('Timestamp (UTC): 2026-10-27T12:00:00.000Z');
    expect(msg.text).toContain('Page URL: https://www.martinezinsurancesolutions.com/es/contacto');
    expect(msg.text).toContain('Locale: es');
    expect(msg.replyTo).toBe('m@example.com');
  });
});

describe('sms link', () => {
  it('uses the ?&body= form that iOS and Android both accept', () => {
    expect(smsHref('+15043132317', "Hi, I'd like help with Medicare.")).toBe(
      "sms:+15043132317?&body=Hi%2C%20I'd%20like%20help%20with%20Medicare.",
    );
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
