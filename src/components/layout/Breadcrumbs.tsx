import { ChevronRight } from 'lucide-react';
import NextLink from 'next/link';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { JsonLd } from '@/components/ui/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { absoluteUrl } from '@/lib/urls';

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail + matching BreadcrumbList JSON-LD. `path` is the public localized path. */
export async function Breadcrumbs({ locale, items }: { locale: AppLocale; items: Crumb[] }) {
  const t = await getTranslations({ locale, namespace: 'Common' });
  const home: Crumb = { name: t('home'), path: locale === 'en' ? '/' : '/es' };
  const trail = [home, ...items];
  return (
    <>
      <nav aria-label={t('breadcrumb')} className="text-[0.95rem]">
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-muted">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} className="inline-flex items-center gap-1">
                {last ? (
                  <span aria-current="page" className="font-semibold text-navy-900">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <NextLink
                      href={c.path}
                      className="inline-flex min-h-12 items-center text-navy-700 underline-offset-4 hover:underline"
                    >
                      {c.name}
                    </NextLink>
                    <ChevronRight aria-hidden className="h-4 w-4 text-muted" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail.map((c) => ({ name: c.name, url: absoluteUrl(c.path) })))} />
    </>
  );
}
