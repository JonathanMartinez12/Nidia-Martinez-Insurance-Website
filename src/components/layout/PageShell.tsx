import type { ReactNode } from 'react';
import type { AppLocale } from '@/i18n/routing';
import { getPage } from '@/config/pages';
import { localizedPath, otherLocale } from '@/lib/urls';
import { Header } from './Header';

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
  return (
    <>
      <Header locale={locale} alternatePath={alt} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
    </>
  );
}
