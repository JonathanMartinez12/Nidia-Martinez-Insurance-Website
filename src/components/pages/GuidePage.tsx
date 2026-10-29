import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import type { GuideContent } from '@/content/types';
import { getPage } from '@/config/pages';
import { primaryAgent } from '@/config/site';
import { localizedPath, localizedUrl } from '@/lib/urls';
import { articleSchema, faqSchema } from '@/lib/schema';
import { ogImageUrl } from '@/lib/seo';
import type { Crumb } from '@/components/layout/Breadcrumbs';
import { JsonLd } from '@/components/ui/JsonLd';
import { Sections } from '@/components/ui/Blocks';
import { stripRichText } from '@/components/ui/RichText';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqList } from '@/components/sections/FaqList';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

/** Visible E-E-A-T byline: reviewing agent (linked to her profile) and the last-updated date. */
async function ReviewedBy({ locale, modified }: { locale: AppLocale; modified: string }) {
  const t = await getTranslations({ locale, namespace: 'Guides' });
  const profile = localizedPath(locale, { pathname: '/about/[agent]', params: { agent: primaryAgent.slug } });
  const date = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'es-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${modified}T00:00:00Z`),
  );
  return (
    <p className="mt-6 text-[1.05rem] text-ink" data-testid="reviewed-by">
      {t.rich('reviewedBy', {
        name: primaryAgent.name,
        link: (chunks) => (
          <a href={profile} className="font-bold text-navy-700 underline underline-offset-4">
            {chunks}
          </a>
        ),
      })}
      <span aria-hidden> · </span>
      <time dateTime={modified}>{t('updated', { date })}</time>
    </p>
  );
}

/** Long-form guide layout (guides, AEP, scam protection): article + FAQ + CTA. */
export async function GuidePage({
  locale,
  pageId,
  content,
  crumbName,
  parentCrumb,
  article,
  eyebrow,
  intro,
  aside,
  faqHeading,
  beforeCta,
}: {
  locale: AppLocale;
  pageId: string;
  content: GuideContent;
  crumbName: string;
  /** Breadcrumb between Home and this page (e.g. the guides hub). */
  parentCrumb?: Crumb;
  /** Article schema + reviewed-by byline. ISO dates. */
  article?: { published: string; modified: string; description: string };
  eyebrow?: string;
  intro?: ReactNode;
  aside?: ReactNode;
  faqHeading: string;
  /** Optional full-width section between the article and the closing CTA. */
  beforeCta?: ReactNode;
}) {
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const page = getPage(pageId);
  const path = localizedPath(locale, page.href);
  const crumbs = [...(parentCrumb ? [parentCrumb] : []), { name: crumbName, path }];
  const authorProfileUrl = localizedUrl(locale, { pathname: '/about/[agent]', params: { agent: primaryAgent.slug } });
  return (
    <PageShell locale={locale} pageId={pageId}>
      <PageHeader locale={locale} crumbs={crumbs} eyebrow={eyebrow} title={content.h1} lede={content.lede}>
        {article ? <ReviewedBy locale={locale} modified={article.modified} /> : null}
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
            data-toc
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
      {beforeCta}
      <FinalCta locale={locale} />
      <JsonLd data={faqSchema(content.faqs.map((f) => ({ q: f.q, a: stripRichText(f.a) })))} />
      {article ? (
        <JsonLd
          data={articleSchema({
            locale,
            headline: content.h1,
            description: article.description,
            url: localizedUrl(locale, page.href),
            image: ogImageUrl(locale, pageId),
            datePublished: article.published,
            dateModified: article.modified,
            author: primaryAgent,
            authorProfileUrl,
          })}
        />
      ) : null}
    </PageShell>
  );
}
