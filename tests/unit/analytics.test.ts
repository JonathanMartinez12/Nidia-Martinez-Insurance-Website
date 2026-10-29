import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { markAnalyticsReady, resetAnalytics, sanitizeParams, setPageContext, track } from '@/lib/analytics';
import { analyticsPageInfo } from '@/lib/page-analytics';
import { applyInternalParam, gpcEnabled } from '@/components/Analytics';
import { pages } from '@/config/pages';

const PII = /@|(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;

describe('sanitizeParams', () => {
  it('drops PII keys and redacts emails and phone numbers in any format', () => {
    const out = sanitizeParams({
      name: 'Maria Lopez',
      phone: '5045550123',
      email: 'm@example.com',
      message: 'call me',
      link_text: '(504) 313-2317',
      other: '+15043132317',
      dotted: '504.555.0123',
      mail: 'Write to help@example.com',
      faq_question: 'Is Medicare free?',
      percent_scrolled: 50,
    });
    expect(out).toEqual({
      link_text: '[redacted]',
      other: '[redacted]',
      dotted: '[redacted]',
      mail: '[redacted]',
      faq_question: 'Is Medicare free?',
      percent_scrolled: 50,
    });
  });

  it('caps text at 100 characters and skips empty values', () => {
    const out = sanitizeParams({ faq_question: 'x'.repeat(250), city: undefined, service: '' });
    expect(out).toEqual({ faq_question: 'x'.repeat(100) });
  });
});

describe('track', () => {
  const calls: unknown[][] = [];
  beforeEach(() => {
    resetAnalytics();
    calls.length = 0;
    vi.stubGlobal('window', { gtag: (...args: unknown[]) => calls.push(args) });
  });
  afterEach(() => vi.unstubAllGlobals());

  it('queues events until GA is ready, then sends them with page context', () => {
    setPageContext({ page_type: 'city', city: 'metairie', locale: 'es', page_path: '/es/area-de-servicio/metairie' });
    track('click_to_call', { button_location: 'sticky_bar', phone_owner: 'primary' }, { beacon: true });
    expect(calls).toHaveLength(0);
    markAnalyticsReady();
    expect(calls).toEqual([
      [
        'event',
        'click_to_call',
        {
          page_type: 'city',
          city: 'metairie',
          locale: 'es',
          page_path: '/es/area-de-servicio/metairie',
          button_location: 'sticky_bar',
          phone_owner: 'primary',
          transport_type: 'beacon',
        },
      ],
    ]);
  });

  it('never forwards PII even if a caller passes it', () => {
    setPageContext({ page_type: 'contact', locale: 'en', page_path: '/contact' });
    markAnalyticsReady();
    track('generate_lead', {
      name: 'Ana',
      phone: '504-555-0123',
      email: 'a@b.co',
      interests: 'turning-65',
      form_location: 'contact_page',
    });
    const params = calls[0]![2] as Record<string, unknown>;
    expect(Object.keys(params)).not.toContain('name');
    for (const v of Object.values(params)) expect(String(v)).not.toMatch(PII);
  });

  it('sends nothing if GA never becomes ready (e.g. Global Privacy Control)', () => {
    track('page_view', {});
    expect(calls).toHaveLength(0);
  });
});

describe('page context', () => {
  it('maps every registered page to a page_type, with service and city params', () => {
    for (const p of pages) expect(analyticsPageInfo(p.id).page_type, p.id).toMatch(/^[a-z_]+$/);
    expect(analyticsPageInfo('service-medicare-supplement')).toEqual({ page_type: 'service', service: 'medicare_supplement' });
    expect(analyticsPageInfo('service-health-insurance').service).toBe('health_u65');
    expect(analyticsPageInfo('city-new-orleans')).toEqual({ page_type: 'city', city: 'new_orleans' });
    expect(analyticsPageInfo('guide-turning-65').page_type).toBe('guide');
    expect(analyticsPageInfo('guides').page_type).toBe('guides_hub');
    expect(analyticsPageInfo('privacy').page_type).toBe('legal');
    expect(analyticsPageInfo().page_type).toBe('not_found');
  });
});

describe('internal traffic and privacy', () => {
  it('?internal=1 sets the cookie, ?internal=0 clears it', () => {
    let jar = '';
    const doc = {
      get cookie() {
        return jar;
      },
      set cookie(v: string) {
        const [pair] = v.split('; ');
        jar = /Max-Age=0/.test(v) ? '' : pair!;
      },
    };
    expect(applyInternalParam('?internal=1', doc)).toBe(true);
    expect(jar).toBe('mis_internal=1');
    expect(applyInternalParam('', doc)).toBe(true);
    expect(applyInternalParam('?internal=0', doc)).toBe(false);
  });

  it('detects Global Privacy Control', () => {
    expect(gpcEnabled({ globalPrivacyControl: true } as Navigator & { globalPrivacyControl?: boolean })).toBe(true);
    expect(gpcEnabled({} as Navigator)).toBe(false);
  });
});
