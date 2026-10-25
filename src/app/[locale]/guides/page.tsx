import type { Metadata } from 'next';
import { ArrowRight, BookOpen } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import { getContent } from '@/content';
import { guides } from '@/config/guides';
import { getPage, type AppHref } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'guides');
}

export default async function GuidesHubPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Guides' });
  const content = getContent(locale);
  const items: Array<{ key: string; href: AppHref; title: string; lede: string }> = [
    ...guides.map((g) => ({
      key: g.key,
      href: getPage(`guide-${g.key}`).href,
      title: content.guides[g.key].h1,
      lede: content.guides[g.key].lede,
    })),
    { key: 'aep', href: getPage('aep').href, title: content.aep.h1, lede: content.aep.lede },
    { key: 'scam', href: getPage('scam').href, title: content.scam.h1, lede: content.scam.lede },
  ];

  return (
    <PageShell locale={locale} pageId="guides">
      <PageHeader
        locale={locale}
        crumbs={[{ name: t('hub'), path: localizedPath(locale, getPage('guides').href) }]}
        title={content.guidesHub.h1}
        lede={content.guidesHub.lede}
      />
      <section aria-label={content.guidesHub.h1} className="container-page py-12 lg:py-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 no-underline shadow-sm hover:border-navy-300 hover:shadow-[var(--shadow-card)] sm:p-7"
              >
                <BookOpen aria-hidden className="h-7 w-7 text-red-600" />
                <h2 className="mt-3 text-2xl font-semibold text-navy-900">{item.title}</h2>
                <p className="mt-2 text-ink">{item.lede}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 font-bold text-navy-700">
                  {t('readGuide')}
                  <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="prose-page mt-14 max-w-3xl">
          <Sections sections={content.guidesHub.sections} locale={locale} />
        </div>
      </section>
      <FinalCta locale={locale} />
    </PageShell>
  );
}
