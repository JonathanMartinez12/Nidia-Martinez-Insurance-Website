import { Clock, MapPin, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { officeHours } from '@/lib/hours';
import { telHref } from '@/lib/phone';
import { btn, card } from '@/components/ui/styles';

/** "Visit our office": address and hours from the site config (matches the Google Business Profile). */
export async function OfficeVisit({ locale, callLocation = 'inline' }: { locale: AppLocale; callLocation?: string }) {
  const address = site.address;
  if (!address) return null;
  const t = await getTranslations({ locale, namespace: 'Office' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const hours = officeHours(locale);

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
          <a href={telHref(site.primaryPhone.e164)} data-call-location={callLocation} className={`${btn.primary} mt-6 text-lg`}>
            <Phone aria-hidden className="h-5 w-5" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
        </div>
        {hours.length > 0 ? (
          <div>
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
      </div>
    </section>
  );
}
