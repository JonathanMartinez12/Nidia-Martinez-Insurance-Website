import { MapPin, Navigation, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { btn } from '@/components/ui/styles';
import { Photo } from '@/components/ui/Photo';

/** Home: "Sit down with us" — a real photo of the team plus the office address. Hidden without an address. */
export async function OfficeSection({ locale }: { locale: AppLocale }) {
  const address = site.address;
  if (!address) return null;
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const tp = await getTranslations({ locale, namespace: 'Photos' });
  const oneLine = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${oneLine}`)}`;

  return (
    <section aria-labelledby="office-heading" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Photo
          id="together"
          alt={tp('together')}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="shadow-[var(--shadow-lift)]"
        />
        <div>
          <p className="eyebrow">{t('officeEyebrow')}</p>
          <h2 id="office-heading" className="mt-2 text-4xl font-semibold sm:text-5xl">
            {t('officeHeading', { city: address.addressLocality })}
          </h2>
          <p className="mt-5 text-lg">{t('officeBody')}</p>
          <p className="mt-5 flex items-start gap-2 font-semibold text-navy-900">
            <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-red-600" />
            <span>
              {site.name}
              <br />
              {oneLine}
            </span>
          </p>
          {site.hours === null ? (
            <p className="mt-3 text-muted">{t('officeAppointment', { phone: site.primaryPhone.display })}</p>
          ) : null}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(site.primaryPhone.e164)} className={`${btn.primary} text-lg`}>
              <Phone aria-hidden className="h-5 w-5" />
              {tc('callPhone', { phone: site.primaryPhone.display })}
            </a>
            <a href={maps} className={`${btn.secondary} text-lg`}>
              <Navigation aria-hidden className="h-5 w-5" />
              {t('officeDirections')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
