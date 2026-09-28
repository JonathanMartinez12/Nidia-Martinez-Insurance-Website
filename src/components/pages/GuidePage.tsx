import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import type { GuideContent } from '@/content/types';
import { getPage } from '@/config/pages';
import { localizedPath } from '@/lib/urls';
import { faqSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';
import { Sections } from '@/components/ui/Blocks';
import { stripRichText } from '@/components/ui/RichText';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqList } from '@/components/sections/FaqList';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

/** Long-form guide layout (AEP, scam protection): article + FAQ + CTA. */
export async function GuidePage({
  locale,
  pageId,
  content,
  crumbName,
  eyebrow,
  intro,
  aside,
  faqHeading,
}: {
  locale: AppLocale;
  pageId: string;
  content: GuideContent;
  crumbName: string;
  eyebrow?: string;
  intro?: ReactNode;
  aside?: ReactNode;
  faqHeading: string;
}) {
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const path = localizedPath(locale, getPage(pageId).href);
  return (
    <PageShell locale={locale} pageId={pageId}>
      <PageHeader locale={locale} crumbs={[{ name: crumbName, path }]} eyebrow={eyebrow} title={content.h1} lede={content.lede}>
        {intro}
      </PageHeader>
      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:py-16">
        <article className="min-w-0" data-content="guide-body">
          <div className="prose-page">
            <Sections sections={content.sections} locale={locale} />
          </div>
          <section aria-labelledby="guide-faq" className="pt-14">
            <h2 id="guide-faq" className="text-3xl font-semibold sm:text-4xl">
              {faqHeading}
            </h2>
            <div className="mt-6">
              <FaqList faqs={content.faqs} locale={locale} />
            </div>
          </section>
        </article>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label={tc('onThisPage')}
            className="rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[var(--shadow-card)]"
          >
            <p className="text-sm font-bold tracking-wide text-muted uppercase">{tc('onThisPage')}</p>
            <ol className="mt-2 space-y-1">
              {content.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex min-h-12 items-center rounded-lg px-2 font-semibold text-navy-800 no-underline hover:bg-navy-50"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          {aside}
        </div>
      </div>
      <FinalCta locale={locale} />
      <JsonLd data={faqSchema(content.faqs.map((f) => ({ q: f.q, a: stripRichText(f.a) })))} />
    </PageShell>
  );
}
