import type { Metadata } from 'next';
import { BadgeCheck, HandCoins, Languages, MapPin, Navigation, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { site } from '@/config/site';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { metaValues } from '@/lib/seo';
import { telHref } from '@/lib/phone';
import { PageAnalytics } from '@/components/analytics/PageAnalytics';
import { ContactFormSection } from '@/components/contact/ContactFormSection';
import { CarrierStrip } from '@/components/sections/CarrierStrip';
import { Reviews } from '@/components/sections/Reviews';
import { TpmoDisclaimer } from '@/components/sections/TpmoDisclaimer';
import { Logo } from '@/components/ui/Logo';
import { btn, card } from '@/components/ui/styles';

/**
 * Google Ads landing page (EN /medicare-help-metairie, ES /es/ayuda-medicare-metairie).
 * Short and focused: no site navigation, noindex, and kept out of the sitemap and page registry.
 * UTM parameters on the ad URL are picked up by GA4 from page_location; the call button, form and
 * sticky bar send the same events as the rest of the site, with page_type "landing".
 */
export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Meta' });
  return {
    title: { absolute: t('landing.title') },
    description: t('landing.description', metaValues()),
    robots: { index: false, follow: true },
  };
}

export default async function Page({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Landing' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const address = site.address;
  const oneLine = address ? `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}` : null;
  const maps = oneLine
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${oneLine}`)}`
    : null;
  const call = telHref(site.primaryPhone.e164);
  const trust = [
    { key: 'licensed', icon: BadgeCheck },
    { key: 'noCost', icon: HandCoins },
    { key: 'spanish', icon: Languages, lang: 'es' },
  ] as const;

  return (
    <>
      <PageAnalytics pageType="landing" city="metairie" locale={locale} />
      <header className="border-b border-line bg-paper">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-3 max-sm:px-4 lg:h-20">
          <Logo homeLabel={tc('homeLabel')} tagline={tc('tagline')} linked={false} className="min-w-0" />
          <a
            href={call}
            data-call-location="header"
            className="tap inline-flex items-center gap-2 rounded-xl bg-navy-700 px-3 font-bold whitespace-nowrap text-white no-underline hover:bg-navy-800 sm:px-4"
          >
            <Phone aria-hidden className="h-5 w-5 shrink-0" />
            <span className="sr-only">{tc('callUs')}: </span>
            {site.primaryPhone.display}
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="outline-none" data-landing>
        <section aria-labelledby="landing-heading" className="pt-10 pb-12 sm:pt-14">
          <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <div>
              <p className="eyebrow">{t('eyebrow')}</p>
              <h1 id="landing-heading" className="mt-3 text-[2.25rem] font-semibold sm:text-5xl">
                {t('h1')}
              </h1>
              <p className="mt-5 max-w-xl text-lg sm:text-xl">{t('lede')}</p>
              <a href={call} data-call-location="hero" className={`${btn.primary} mt-8 w-full text-xl sm:w-auto`}>
                <Phone aria-hidden className="h-6 w-6" />
                {tc('callPhone', { phone: site.primaryPhone.display })}
              </a>
              <p className="mt-3 font-semibold text-muted">{t('callHint')}</p>

              <h2 className="sr-only">{t('trustHeading')}</h2>
              <ul className="mt-8 grid gap-4">
                {trust.map(({ key, icon: Icon, ...rest }) => (
                  <li key={key} className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-50">
                      <Icon aria-hidden className="h-6 w-6 text-navy-700" />
                    </span>
                    <span>
                      <span className="block text-lg font-bold text-navy-900" lang={'lang' in rest ? rest.lang : undefined}>
                        {t(`trust.${key}.title`)}
                      </span>
                      {t(`trust.${key}.body`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${card} self-start p-6 sm:p-8`}>
              <h2 className="text-3xl font-semibold">{t('formHeading')}</h2>
              <p className="mt-2 mb-6 text-lg">{t('formIntro')}</p>
              <ContactFormSection locale={locale} variant="compact" idPrefix="lp" />
            </div>
          </div>
        </section>

        <Reviews locale={locale} limit={3} />

        <CarrierStrip locale={locale} variant="band" />

        {oneLine && maps ? (
          <section aria-labelledby="office-heading" className="py-12 sm:py-16">
            <div className="container-page">
              <h2 id="office-heading" className="text-3xl font-semibold sm:text-4xl">
                {t('officeHeading')}
              </h2>
              <p className="mt-4 flex items-start gap-2 text-lg font-semibold text-navy-900">
                <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                <span>
                  {site.name}
                  <br />
                  {oneLine}
                </span>
              </p>
              {site.hours === null ? <p className="mt-2 text-muted">{t('officeNote', { phone: site.primaryPhone.display })}</p> : null}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={call} data-call-location="inline" className={`${btn.primary} text-lg`}>
                  <Phone aria-hidden className="h-5 w-5" />
                  {tc('callPhone', { phone: site.primaryPhone.display })}
                </a>
                <a href={maps} data-call-location="inline" className={`${btn.secondary} text-lg`}>
                  <Navigation aria-hidden className="h-5 w-5" />
                  {t('directions')}
                </a>
              </div>
              <TpmoDisclaimer locale={locale} className="mt-10 max-w-4xl text-[0.95rem] text-muted" />
            </div>
          </section>
        ) : (
          <div className="container-page py-10">
            <TpmoDisclaimer locale={locale} className="max-w-4xl text-[0.95rem] text-muted" />
          </div>
        )}
      </main>
    </>
  );
}
