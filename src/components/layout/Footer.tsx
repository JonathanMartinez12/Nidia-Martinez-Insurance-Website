import { Mail, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { agents, site } from '@/config/site';
import { cityPages } from '@/config/cities';
import { productKeys, products } from '@/config/products';
import { telHref } from '@/lib/phone';
import { TpmoDisclaimer } from '@/components/sections/TpmoDisclaimer';
import { BrandLockup } from '@/components/ui/Logo';

const dayNames = {
  en: { Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed', Thursday: 'Thu', Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun' },
  es: { Monday: 'lun', Tuesday: 'mar', Wednesday: 'mié', Thursday: 'jue', Friday: 'vie', Saturday: 'sáb', Sunday: 'dom' },
} as const;

export async function Footer({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Footer' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tp = await getTranslations({ locale, namespace: 'Products' });

  const heading = 'font-sans text-sm font-bold uppercase tracking-[0.14em] text-navy-100';
  const link = 'inline-flex min-h-12 items-center text-white/90 underline-offset-4 hover:text-white hover:underline sm:min-h-10';
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative mt-0 bg-navy-950 text-white">
      <div className="container-page pt-16 pb-32 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr]">
          <div>
            <Link href="/" className="inline-block rounded-lg no-underline">
              <BrandLockup alt={`${site.name} — ${tc('homeLabel')}`} tagline={tc('tagline')} />
            </Link>
            <h2 className={`${heading} mt-8`}>{t('contactHeading')}</h2>
            <address className="mt-3 space-y-1 not-italic">
              <p className="font-serif text-xl font-semibold">{site.name}</p>
              <p>
                <a href={telHref(site.primaryPhone.e164)} className={`${link} gap-2 text-lg font-bold`}>
                  <Phone aria-hidden className="h-5 w-5" />
                  {site.primaryPhone.display}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className={`${link} gap-2 break-all`}>
                  <Mail aria-hidden className="h-5 w-5 shrink-0" />
                  {site.email}
                </a>
              </p>
              {site.address ? (
                <p className="flex gap-2 pt-2">
                  <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0" />
                  <span>
                    {site.address.streetAddress}
                    <br />
                    {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}
                  </span>
                </p>
              ) : (
                <p className="flex items-start gap-2 pt-2 text-white/90">
                  <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0" />
                  {t('serviceAreaLine')}
                </p>
              )}
            </address>
            {site.hours && site.hours.length > 0 ? (
              <div className="mt-6">
                <h2 className={heading}>{t('hours')}</h2>
                <ul className="mt-2 space-y-1 text-white/90">
                  {site.hours.map((h) => (
                    <li key={h.days.join()}>
                      {h.days.map((d) => dayNames[locale][d]).join(', ')}: {h.opens}–{h.closes}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <h2 className={`${heading} mt-8`}>{t('teamHeading')}</h2>
            <ul className="mt-2 space-y-3">
              {agents.map((a) => (
                <li key={a.slug}>
                  <Link href={{ pathname: '/about/[agent]', params: { agent: a.slug } }} className={`${link} font-semibold`}>
                    {a.name}
                  </Link>
                  <br />
                  <a href={telHref(a.phone.e164)} className={link}>
                    {a.phoneLabel === 'cell' ? tc('cell') : tc('direct')}: {a.phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={t('footerNav')} className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_1.4fr]">
            <div>
              <h2 className={heading}>{t('plansHeading')}</h2>
              <ul className="mt-3 space-y-1">
                {productKeys
                  .filter((k) => products[k].category === 'medicare')
                  .map((k) => (
                    <li key={k}>
                      <Link href={`/${k}` as '/medicare-advantage'} className={link}>
                        {tp(`${k}.name`)}
                      </Link>
                    </li>
                  ))}
              </ul>
              <h2 className={`${heading} mt-8`}>{t('coverageHeading')}</h2>
              <ul className="mt-3 space-y-1">
                {productKeys
                  .filter((k) => products[k].category === 'coverage')
                  .map((k) => (
                    <li key={k}>
                      <Link href={`/${k}` as '/medicare-advantage'} className={link}>
                        {tp(`${k}.name`)}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h2 className={heading}>{t('resourcesHeading')}</h2>
              <ul className="mt-3 space-y-1">
                <li>
                  <Link href="/annual-enrollment-period" className={link}>
                    {th('aep')}
                  </Link>
                </li>
                <li>
                  <Link href="/medicare-scam-protection" className={link}>
                    {th('scam')}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={link}>
                    {th('faq')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={link}>
                    {th('about')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={link}>
                    {th('contact')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 xl:col-span-1">
              <h2 className={heading}>{t('areasHeading')}</h2>
              <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 min-[420px]:grid-cols-2">
                {cityPages.map((c) => (
                  <li key={c.slug}>
                    <Link href={{ pathname: '/service-area/[city]', params: { city: c.slug } }} className={link}>
                      {locale === 'es' ? c.nameEs : c.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/service-area" className={link}>
                    {t('allAreas')}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <section
          aria-labelledby="footer-disclaimer"
          className="mt-14 rounded-2xl border border-white/15 bg-white/[0.04] p-6 text-[0.95rem] leading-relaxed text-white/90"
        >
          <h2 id="footer-disclaimer" className={heading}>
            {t('disclaimerHeading')}
          </h2>
          <TpmoDisclaimer locale={locale} className="mt-3" />
          <p className="mt-3">{tc('nonAffiliation')}</p>
          <p className="mt-3">{t('educational')}</p>
          {agents.some((a) => a.licenseNumber || a.npn) ? (
            <ul className="mt-3 space-y-1">
              {agents
                .filter((a) => a.licenseNumber || a.npn)
                .map((a) => (
                  <li key={a.slug}>
                    {a.name}
                    {a.licenseNumber ? ` · ${tc('licenseNumber', { number: a.licenseNumber })}` : ''}
                    {a.npn ? ` · ${tc('npn', { number: a.npn })}` : ''}
                  </li>
                ))}
            </ul>
          ) : null}
        </section>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8 text-white/85 md:flex-row md:items-center md:justify-between">
          <p>{t('copyright', { year })}</p>
          <nav aria-label={t('legalNav')}>
            <ul className="flex flex-wrap gap-x-6">
              <li>
                <Link href="/privacy-policy" className={link}>
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className={link}>
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={link}>
                  {t('accessibility')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
