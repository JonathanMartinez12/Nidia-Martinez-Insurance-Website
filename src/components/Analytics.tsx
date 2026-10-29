'use client';

import Script from 'next/script';
import { useReportWebVitals } from 'next/web-vitals';
import { useEffect, useState } from 'react';
import { getPageContext, markAnalyticsReady, track, type EventParams } from '@/lib/analytics';

export const INTERNAL_COOKIE = 'mis_internal';
const DEBUG_KEY = 'mis_ga_debug';

/** `?internal=1` marks this browser as internal traffic for two years; `?internal=0` clears it. */
export function applyInternalParam(search: string, doc: Pick<Document, 'cookie'> = document): boolean {
  const flag = new URLSearchParams(search).get('internal');
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  if (flag === '1') doc.cookie = `${INTERNAL_COOKIE}=1; Max-Age=63072000; Path=/; SameSite=Lax${secure}`;
  if (flag === '0') doc.cookie = `${INTERNAL_COOKIE}=; Max-Age=0; Path=/; SameSite=Lax${secure}`;
  return doc.cookie.split('; ').includes(`${INTERNAL_COOKIE}=1`);
}

/** `?debug_mode=1` turns on GA4 DebugView for this tab (kept while browsing); `?debug_mode=0` turns it off. */
function debugMode(search: string): boolean {
  try {
    const flag = new URLSearchParams(search).get('debug_mode');
    if (flag === '1') sessionStorage.setItem(DEBUG_KEY, '1');
    if (flag === '0') sessionStorage.removeItem(DEBUG_KEY);
    return sessionStorage.getItem(DEBUG_KEY) === '1';
  } catch {
    return new URLSearchParams(search).get('debug_mode') === '1';
  }
}

/** Global Privacy Control: when the browser sends it, GA is never loaded. */
export function gpcEnabled(nav: Navigator & { globalPrivacyControl?: boolean } = navigator): boolean {
  return nav.globalPrivacyControl === true;
}

const AREA_LOCATIONS: Array<[string, string]> = [
  ['[data-testid="mobile-bar"]', 'sticky_bar'],
  ['header', 'header'],
  ['footer', 'footer'],
];

/** Where on the page a link sits: `data-call-location` (on it or an ancestor), else its area. */
export function buttonLocation(el: Element, pageType?: string): string {
  const tagged = el.closest('[data-call-location]')?.getAttribute('data-call-location');
  if (tagged === 'cta') {
    if (pageType === 'city') return 'city_cta';
    if (pageType === 'guide' || pageType === 'aep' || pageType === 'scam' || pageType === 'guides_hub') return 'guide_cta';
    return 'inline';
  }
  if (tagged) return tagged;
  for (const [selector, name] of AREA_LOCATIONS) if (el.closest(selector)) return name;
  return 'other';
}

const MAPS = /(google\.[a-z.]+\/maps|maps\.google\.|maps\.apple\.com|goo\.gl\/maps|maps\.app\.goo\.gl)/i;
const linkText = (a: Element) => (a.textContent ?? '').replace(/\s+/g, ' ').trim();

/**
 * Turns a clicked link into a GA4 event (or null). Pure so it can be unit-tested; never reads
 * form fields, only the link's own attributes and text.
 */
export function classifyClick(
  a: HTMLAnchorElement,
  /** The current page URL; relative links (e.g. `#section`) resolve against it. */
  pageUrl: string,
  pageType?: string,
  locale?: string,
): { name: string; params: EventParams; beacon: boolean } | null {
  const href = a.getAttribute('href') ?? '';
  const location = buttonLocation(a, pageType);
  if (href.startsWith('tel:'))
    return {
      name: 'click_to_call',
      params: { button_location: location, phone_owner: a.getAttribute('data-phone-owner') ?? 'primary' },
      beacon: true,
    };
  if (href.startsWith('sms:')) return { name: 'sms_click', params: { button_location: location }, beacon: true };
  if (href.startsWith('mailto:')) return { name: 'email_click', params: { button_location: location }, beacon: true };
  if (MAPS.test(href)) return { name: 'directions_click', params: { button_location: location }, beacon: true };
  if (a.matches('[data-testid="language-toggle"]'))
    return { name: 'language_switch', params: { from: locale, to: locale === 'es' ? 'en' : 'es' }, beacon: true };

  let url: URL;
  try {
    url = new URL(href, pageUrl);
  } catch {
    return null;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
  if (url.origin !== new URL(pageUrl).origin)
    return {
      name: 'outbound_click',
      params: { link_domain: url.hostname.replace(/^www\./, ''), link_text: linkText(a) },
      beacon: true,
    };

  const destination = url.pathname + url.hash;
  if (a.closest('[data-toc]')) return { name: 'toc_click', params: { link_text: linkText(a), destination }, beacon: false };
  const cta = a.getAttribute('data-cta');
  if (cta) return { name: 'cta_click', params: { button_location: cta, destination, link_text: linkText(a) }, beacon: false };
  if (a.closest('[data-content], .prose-page, [data-faq-answer]'))
    return { name: 'internal_link_click', params: { link_text: linkText(a), destination }, beacon: false };
  return null;
}

/**
 * GA4: loaded once (from the locale layout) with next/script afterInteractive, only when
 * NEXT_PUBLIC_GA_ID is set and the browser doesn't send Global Privacy Control. One delegated
 * click listener covers every tel:/sms:/mailto:/maps/outbound/CTA/body link on the site.
 */
export function Analytics({ gaId }: { gaId: string }) {
  const [enabled, setEnabled] = useState(false);

  useReportWebVitals((metric) => {
    track('web_vitals', {
      metric_name: metric.name,
      // GA4 metrics are integers: CLS is sent ×1000.
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      rating: metric.rating,
      non_interaction: true,
    });
  });

  useEffect(() => {
    if (gpcEnabled()) return;
    const w = window as Window & { __misGaInit?: boolean };
    if (!w.__misGaInit) {
      w.__misGaInit = true;
      const internal = applyInternalParam(window.location.search);
      const debug = debugMode(window.location.search);
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments);
      };
      w.gtag('js', new Date());
      w.gtag('config', gaId, {
        send_page_view: false, // PageAnalytics sends page_view with page_type / content_group
        ...(internal ? { traffic_type: 'internal' } : {}),
        ...(debug ? { debug_mode: true } : {}),
      });
      const locale = getPageContext()?.locale ?? (document.documentElement.lang.startsWith('es') ? 'es' : 'en');
      w.gtag('set', 'user_properties', { preferred_language: locale });
    }
    markAnalyticsReady();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load the script only after the GPC check
    setEnabled(true);
  }, [gaId]);

  useEffect(() => {
    if (!enabled) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]');
      if (!(a instanceof HTMLAnchorElement)) return;
      const ctx = getPageContext();
      const ev = classifyClick(a, window.location.href, ctx?.page_type, ctx?.locale);
      if (ev) track(ev.name, ev.params, { beacon: ev.beacon });
    };
    // FAQ accordions are <details>; `toggle` doesn't bubble, so listen in the capture phase.
    const onToggle = (e: Event) => {
      const d = e.target;
      if (!(d instanceof HTMLDetailsElement) || !d.open || !d.closest('[data-faq-list]')) return;
      track('faq_open', { faq_question: linkText(d.querySelector('summary') ?? d) });
    };
    document.addEventListener('click', onClick, true);
    document.addEventListener('toggle', onToggle, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('toggle', onToggle, true);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <Script
      id="ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
      strategy="afterInteractive"
    />
  );
}
