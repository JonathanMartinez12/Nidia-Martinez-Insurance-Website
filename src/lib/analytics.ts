/**
 * GA4 event helpers. Every event carries page context (page_type, service, city, locale,
 * page_path) and passes through `sanitizeParams`, so no personal data (names, typed phone
 * numbers, emails, free text) can ever reach Google Analytics.
 *
 * Events sent before gtag exists (e.g. the first page_view, which fires before the layout's
 * <Analytics> mounts) wait in a small queue and are flushed once GA is enabled. If GA never
 * loads (no NEXT_PUBLIC_GA_ID, or Global Privacy Control is on) nothing is sent.
 */

type Gtag = (command: 'event' | 'config' | 'set' | 'js', target: unknown, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

export type PageType =
  | 'home'
  | 'service'
  | 'city'
  | 'service_area'
  | 'guide'
  | 'guides_hub'
  | 'about'
  | 'agent'
  | 'contact'
  | 'faq'
  | 'aep'
  | 'scam'
  | 'legal'
  | 'not_found';

export type PageContext = {
  page_type: PageType;
  service?: string;
  city?: string;
  locale: 'en' | 'es';
  page_path: string;
};

export type EventParams = Record<string, string | number | boolean | undefined | null>;

let context: PageContext | null = null;
let queue: Array<[string, EventParams]> = [];
let ready = false;
const MAX_QUEUE = 50;

export function setPageContext(next: PageContext) {
  context = next;
}

export function getPageContext(): PageContext | null {
  return context;
}

/** Keys that could only ever hold personal data. They are dropped outright. */
const BLOCKED_KEYS = new Set(['name', 'first_name', 'last_name', 'phone', 'phone_number', 'email', 'message', 'address']);
const EMAIL = /[^\s@]+@[^\s@]+/;
// Any 10-digit US phone number, in any common format (also catches e164 like +15043132317).
const PHONE = /(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;

/** Removes anything that looks like personal data. Values are capped at 100 characters. */
export function sanitizeParams(params: EventParams): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;
    if (BLOCKED_KEYS.has(key)) continue;
    if (typeof value === 'string') {
      if (EMAIL.test(value) || PHONE.test(value)) {
        out[key] = '[redacted]';
        continue;
      }
      out[key] = value.slice(0, 100);
    } else {
      out[key] = value;
    }
  }
  return out;
}

function contextParams(): EventParams {
  if (!context) return {};
  return {
    page_type: context.page_type,
    service: context.service,
    city: context.city,
    locale: context.locale,
    page_path: context.page_path,
  };
}

function send(name: string, params: EventParams) {
  if (typeof window === 'undefined') return;
  if (ready && typeof window.gtag === 'function') {
    window.gtag('event', name, sanitizeParams(params));
    return;
  }
  if (queue.length < MAX_QUEUE) queue.push([name, params]);
}

/**
 * Sends a GA4 event with page context. Use `beacon: true` for anything that leaves the page or
 * opens another app (tel:, sms:, mailto:, maps, outbound links) so the hit isn't lost.
 */
export function track(name: string, params: EventParams = {}, opts: { beacon?: boolean } = {}) {
  send(name, { ...contextParams(), ...params, ...(opts.beacon ? { transport_type: 'beacon' } : {}) });
}

/** Called by <Analytics> once gtag is configured: sends everything that was waiting. */
export function markAnalyticsReady() {
  ready = true;
  const pending = queue;
  queue = [];
  for (const [name, params] of pending) send(name, params);
}

/** For tests. */
export function resetAnalytics() {
  context = null;
  queue = [];
  ready = false;
}

/** Content-group friendly page_type for a registered page id (see src/config/pages.ts). */
export const SERVICE_PARAM: Record<string, string> = {
  'medicare-advantage': 'medicare_advantage',
  'medicare-supplement': 'medicare_supplement',
  'part-d-prescription-drug-plans': 'part_d',
  'special-needs-plans': 'snp',
  'final-expense-insurance': 'final_expense',
  'life-insurance': 'life',
  'hospital-indemnity-insurance': 'hospital_indemnity',
  'dental-vision-insurance': 'dental_vision',
  'health-insurance': 'health_u65',
};
