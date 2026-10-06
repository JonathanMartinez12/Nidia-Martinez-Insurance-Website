import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import { getContent } from '@/content';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { metaValues, pageMetadata } from '@/lib/seo';
import { faqSchema, websiteSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';
import { stripRichText } from '@/components/ui/RichText';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { AepCallout } from '@/components/sections/AepCallout';
import { ScamWarning } from '@/components/sections/ScamWarning';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { OfficeSection } from '@/components/sections/OfficeSection';
import { FaqList } from '@/components/sections/FaqList';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';
import { CarrierStrip } from '@/components/sections/CarrierStrip';

// Re-render daily so the Annual Enrollment callout switches on/off by date.
export const revalidate = 86400;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'home');
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const tm = await getTranslations({ locale, namespace: 'Meta' });
  const { home } = getContent(locale);

  return (
    <PageShell locale={locale} pageId="home">
      <Hero locale={locale} />
      <TrustStrip locale={locale} />
      <ProductsGrid locale={locale} />
      <CarrierStrip locale={locale} variant="band" />
      <AepCallout locale={locale} />
      <ScamWarning locale={locale} />
      <HowItWorks locale={locale} />
      <OfficeSection locale={locale} />
      <section aria-labelledby="faq-teaser" className="py-16 sm:py-20 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow">{t('faqEyebrow')}</p>
            <h2 id="faq-teaser" className="mt-2 text-4xl font-semibold sm:text-5xl">
              {t('faqHeading')}
            </h2>
            <Link
              href="/faq"
              className="mt-6 inline-flex min-h-12 items-center gap-2 font-bold text-navy-700 underline underline-offset-4"
            >
              {tc('seeAllFaqs')}
              <ArrowRight aria-hidden className="h-5 w-5" />
            </Link>
          </div>
          <FaqList faqs={home.faqs} locale={locale} openFirst />
        </div>
      </section>
      <FinalCta locale={locale} />
      <JsonLd data={websiteSchema(locale, tm('home.description', metaValues()))} />
      <JsonLd data={faqSchema(home.faqs.map((f) => ({ q: f.q, a: stripRichText(f.a) })))} />
    </PageShell>
  );
}
