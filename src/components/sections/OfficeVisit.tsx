import { Car, Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { officeHours } from '@/lib/hours';
import { addressLine, directionsUrl } from '@/lib/maps';
import { telHref } from '@/lib/phone';
import { MapFacade } from '@/components/ui/MapFacade';
import { btn, card } from '@/components/ui/styles';

/**
 * "Visit our office": address, hours, directions (by Google place ID), a click-to-load map and
 * parking notes, all from the site config so they match the Google Business Profile.
 */
export async function OfficeVisit({ locale, callLocation = 'inline' }: { locale: AppLocale; callLocation?: string }) {
  const address = site.address;
  if (!address) return null;
  const t = await getTranslations({ locale, namespace: 'Office' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const hours = officeHours(locale);
  const directions = directionsUrl();
  const parking = site.parkingInfo?.[locale];

  return (
    <section aria-labelledby="visit-office-heading" className="container-page pb-16" data-testid="office-visit">
      <div className={`${card} grid gap-8 p-6 sm:p-8 lg:grid-cols-2`}>
        <div>
          <h2 id="visit-office-heading" className="text-3xl font-semibold sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-5 flex items-start gap-2 text-lg font-semibold text-navy-900">
            <MapPin aria-hidden className="mt-1 h-5 w-5 shrink-0 text-red-600" />
            <span>
              {site.name}
              <br />
              {address.streetAddress}
              <br />
              {address.addressLocality}, {address.addressRegion} {address.postalCode}
            </span>
          </p>
          {directions ? (
            <a href={directions} data-call-location={callLocation} className={`${btn.primary} mt-6 w-full text-xl sm:w-auto`}>
              <Navigation aria-hidden className="h-6 w-6" />
              {t('directions')}
            </a>
          ) : null}
          <a
            href={telHref(site.primaryPhone.e164)}
            data-call-location={callLocation}
            className={`${btn.secondary} mt-3 w-full text-lg sm:ml-3 sm:w-auto`}
          >
            <Phone aria-hidden className="h-5 w-5" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
          {hours.length > 0 ? (
            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-2xl font-semibold">
                <Clock aria-hidden className="h-6 w-6 text-red-600" />
                {t('hoursHeading')}
              </h3>
              <dl className="mt-3 space-y-2 text-lg">
                {hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap gap-x-3">
                    <dt className="font-semibold text-navy-900">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 font-semibold text-navy-800">{tc('weekendAppointments')}</p>
            </div>
          ) : null}
          {parking ? (
            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-2xl font-semibold">
                <Car aria-hidden className="h-6 w-6 text-red-600" />
                {t('parkingHeading')}
              </h3>
              <p className="mt-2 text-lg">{parking}</p>
            </div>
          ) : null}
        </div>
        <MapFacade query={`${site.name}, ${addressLine()}`} title={t('mapTitle')} label={t('showMap')} />
      </div>
    </section>
  );
}
