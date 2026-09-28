import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MapPin, Phone } from 'lucide-react';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, type AppLocale } from '@/i18n/routing';
import { getContent } from '@/content';
import { site } from '@/config/site';
import { cityPages, getCity } from '@/config/cities';
import { getPage } from '@/config/pages';
import { pageMetadata } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { telHref } from '@/lib/phone';
import { btn } from '@/components/ui/styles';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { ProductCard } from '@/components/sections/ProductsGrid';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

type Params = { params: Promise<{ locale: string; city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => cityPages.map((c) => ({ locale, city: c.slug })));
}

async function resolve(params: Params['params']) {
  const { locale, city: slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const city = getCity(slug);
  if (!city) notFound();
  setRequestLocale(locale);
  return { locale: locale as AppLocale, city };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, city } = await resolve(params);
  return pageMetadata(locale, `city-${city.slug}`);
}

export default async function CityPage({ params }: Params) {
  const { locale, city } = await resolve(params);
  const t = await getTranslations({ locale, namespace: 'Areas' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const content = getContent(locale).cities[city.slug];
  const name = locale === 'es' ? city.nameEs : city.name;
  const href = { pathname: '/service-area/[city]' as const, params: { city: city.slug } };

  return (
    <PageShell locale={locale} pageId={`city-${city.slug}`}>
      <PageHeader
        locale={locale}
        crumbs={[
          { name: th('serviceArea'), path: localizedPath(locale, getPage('service-area').href) },
          { name, path: localizedPath(locale, href) },
        ]}
        eyebrow={locale === 'es' ? `${city.parishEs} · Luisiana` : `${city.parish} · Louisiana`}
        title={content.h1}
        lede={content.lede}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={telHref(site.primaryPhone.e164)} className={btn.primary}>
            <Phone aria-hidden className="h-5 w-5" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
          <a href="#free-consultation" className={btn.secondary}>
            {tc('freeConsultation')}
          </a>
        </div>
      </PageHeader>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:py-16">
        <article className="prose-page min-w-0" data-content="city-body">
          <Sections sections={content.sections} locale={locale} />
        </article>
        <aside aria-label={t('nearbyHeading')} className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <MapPin aria-hidden className="h-6 w-6 text-red-600" />
              {t('nearbyHeading')}
            </h2>
            <ul className="mt-3 space-y-1">
              {content.nearby.map((n) => (
                <li key={n} className="font-semibold">
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section aria-labelledby="city-services" className="container-page pb-16">
        <h2 id="city-services" className="text-3xl font-semibold sm:text-4xl">
          {t('servicesHeading', { city: name })}
        </h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.featured.map((k) => (
            <ProductCard key={k} locale={locale} productKey={k} level="h3" />
          ))}
        </ul>
      </section>

      <FinalCta locale={locale} />
    </PageShell>
  );
}
