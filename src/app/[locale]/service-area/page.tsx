import type { Metadata } from 'next';
import { ArrowRight, MapPin } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import { getContent } from '@/content';
import { site } from '@/config/site';
import { cityPages } from '@/config/cities';
import { getPage } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';
import { CarrierStrip } from '@/components/sections/CarrierStrip';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'service-area');
}

export default async function ServiceAreaPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Areas' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const content = getContent(locale);
  const cityNames = new Set<string>(cityPages.map((c) => c.name));

  return (
    <PageShell locale={locale} pageId="service-area">
      <PageHeader
        locale={locale}
        crumbs={[{ name: th('serviceArea'), path: localizedPath(locale, getPage('service-area').href) }]}
        title={content.serviceArea.h1}
        lede={content.serviceArea.lede}
      />
      <section aria-labelledby="cities-heading" className="container-page py-12">
        <h2 id="cities-heading" className="text-3xl font-semibold sm:text-4xl">
          {t('citiesHeading')}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cityPages.map((c) => {
            const name = locale === 'es' ? c.nameEs : c.name;
            return (
              <li key={c.slug}>
                <Link
                  href={{ pathname: '/service-area/[city]', params: { city: c.slug } }}
                  className="group flex h-full min-h-24 flex-col justify-between rounded-2xl border border-line bg-white p-5 no-underline shadow-sm hover:border-navy-300 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
                    <MapPin aria-hidden className="h-5 w-5 text-red-600" />
                    {t('exploreCity', { city: name })}
                  </span>
                  <span className="mt-2 flex items-center justify-between text-[0.95rem] text-muted">
                    {locale === 'es' ? c.parishEs : c.parish}
                    <ArrowRight aria-hidden className="h-5 w-5 text-navy-700 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <h3 className="mt-10 font-sans text-base font-bold tracking-[0.14em] text-muted uppercase">{t('alsoServing')}</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {site.serviceArea.cities
            .filter((c) => !cityNames.has(c))
            .map((c) => (
              <li key={c} className="rounded-full bg-navy-50 px-4 py-2 font-semibold text-navy-900">
                {c}
              </li>
            ))}
        </ul>
      </section>
      <div className="container-page pb-16" data-content="area-body">
        <div className="prose-page">
          <Sections sections={content.serviceArea.sections} locale={locale} />
        </div>
      </div>
      <CarrierStrip locale={locale} variant="band" />
      <FinalCta locale={locale} />
    </PageShell>
  );
}
