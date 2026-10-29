'use client';

import { useEffect } from 'react';
import { setPageContext, track, type PageType } from '@/lib/analytics';

const SCROLL_MARKS = [25, 50, 75, 90] as const;
const SCROLL_PAGES: PageType[] = ['guide', 'service', 'city', 'aep', 'scam'];

/**
 * Per-page analytics: sets the page context every event carries, sends page_view (with the
 * GA4 content_group), scroll depth on long-form pages, carrier-section visibility and 404s.
 */
export function PageAnalytics({
  pageType,
  service,
  city,
  locale,
}: {
  pageType: PageType;
  service?: string;
  city?: string;
  locale: 'en' | 'es';
}) {
  useEffect(() => {
    const path = window.location.pathname;
    setPageContext({ page_type: pageType, service, city, locale, page_path: path });
    track('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      content_group: pageType,
    });
    if (pageType === 'not_found') track('not_found', { requested_path: path });

    const cleanups: Array<() => void> = [];

    // Scroll depth (25/50/75/90%) on guides, service and city pages.
    if (SCROLL_PAGES.includes(pageType)) {
      const sent = new Set<number>();
      const onScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const pct = (window.scrollY / scrollable) * 100;
        for (const mark of SCROLL_MARKS) {
          if (pct >= mark && !sent.has(mark)) {
            sent.add(mark);
            track('guide_scroll', { percent_scrolled: mark });
          }
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // "Carriers we work with" seen (once per page).
    const carriers = document.querySelector('[data-carriers]');
    if (carriers && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            track('carrier_section_view', {});
            io.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      io.observe(carriers);
      cleanups.push(() => io.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pageType, service, city, locale]);

  return null;
}
