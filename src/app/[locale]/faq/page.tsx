import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import { getPage } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { faqSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';
import { stripRichText } from '@/components/ui/RichText';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqList } from '@/components/sections/FaqList';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'faq');
}

export default async function FaqPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Faq' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const { faq } = getContent(locale);
  const all = faq.groups.flatMap((g) => g.faqs);

  return (
    <PageShell locale={locale} pageId="faq">
      <PageHeader
        locale={locale}
        crumbs={[{ name: th('faq'), path: localizedPath(locale, getPage('faq').href) }]}
        title={faq.h1}
        lede={faq.lede}
      >
        <nav aria-label={t('categoriesNav')} className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {faq.groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-line bg-white px-4 font-semibold text-navy-900 no-underline shadow-sm hover:border-navy-300"
                >
                  {g.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <div className="container-page max-w-5xl space-y-14 py-12 lg:py-16" data-content="faq-body">
        {faq.groups.map((g) => (
          <section key={g.id} aria-labelledby={g.id}>
            <h2 id={g.id} className="scroll-mt-28 text-3xl font-semibold sm:text-4xl">
              {g.heading}
            </h2>
            <div className="mt-6">
              <FaqList faqs={g.faqs} locale={locale} />
            </div>
          </section>
        ))}
      </div>
      <FinalCta locale={locale} />
      <JsonLd data={faqSchema(all.map((f) => ({ q: f.q, a: stripRichText(f.a) })))} />
    </PageShell>
  );
}
