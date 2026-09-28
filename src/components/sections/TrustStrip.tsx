import { Award, BadgeCheck, HandCoins, Languages, MapPin } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { combinedYears, headlineYears } from '@/lib/experience';

export async function TrustStrip({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const years = headlineYears();
  const combined = combinedYears();
  const items = [
    ...(years !== null ? [{ icon: Award, text: t('trust.years', { years }) }] : []),
    { icon: BadgeCheck, text: t('trust.licensed') },
    { icon: HandCoins, text: t('trust.noCost') },
    { icon: MapPin, text: t('trust.local') },
    { icon: Languages, text: t('trust.spanish'), lang: 'es' },
  ];
  return (
    <section aria-labelledby="trust-heading" className="border-y border-line bg-white">
      <div className="container-page py-8">
        <h2 id="trust-heading" className="sr-only">
          {t('trustHeading')}
        </h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
          {items.map(({ icon: Icon, text, lang }) => (
            <li key={text} className="flex items-center gap-3 font-bold text-navy-900" lang={lang}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-50">
                <Icon aria-hidden className="h-6 w-6 text-navy-700" />
              </span>
              <span className="leading-snug">{text}</span>
            </li>
          ))}
        </ul>
        {combined !== null ? (
          <p className="mt-5 text-center font-semibold text-muted">{tc('combinedYears', { years: combined })}</p>
        ) : null}
      </div>
    </section>
  );
}
