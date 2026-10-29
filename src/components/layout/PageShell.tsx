import type { ReactNode } from 'react';
import type { AppLocale } from '@/i18n/routing';
import { getPage } from '@/config/pages';
import { localizedPath, otherLocale } from '@/lib/urls';
import { Header } from './Header';
import { PageAnalytics } from '@/components/analytics/PageAnalytics';
import { analyticsPageInfo } from '@/lib/page-analytics';

/**
 * Header + <main> for a page. The header lives with the page (not the layout) so the
 * language toggle can link to this exact page in the other language, server-side.
 */
export function PageShell({
  locale,
  pageId,
  alternatePath,
  children,
}: {
  locale: AppLocale;
  pageId?: string;
  alternatePath?: string;
  children: ReactNode;
}) {
  const other = otherLocale(locale);
  const alt = alternatePath ?? (pageId ? localizedPath(other, getPage(pageId).href) : localizedPath(other, { pathname: '/' }));
  const info = analyticsPageInfo(pageId);
  return (
    <>
      <PageAnalytics pageType={info.page_type} service={info.service} city={info.city} locale={locale} />
      <Header locale={locale} alternatePath={alt} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
    </>
  );
}
