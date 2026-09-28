import { Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import type { ProductKey } from '@/config/products';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { Swoosh } from '@/components/ui/Curve';
import { ContactFormSection } from '@/components/contact/ContactFormSection';

/** Closing call to action with the compact lead form. */
export async function FinalCta({
  locale,
  heading,
  body,
  formHeading,
  defaultInterests,
}: {
  locale: AppLocale;
  heading?: string;
  body?: string;
  formHeading?: string;
  defaultInterests?: ProductKey[];
}) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  return (
    <section
      aria-labelledby="final-cta"
      id="free-consultation"
      className="on-dark relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20 lg:py-24"
    >
      <Swoosh className="absolute inset-x-0 bottom-0 h-64 w-full opacity-70" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 id="final-cta" className="text-4xl font-semibold text-white sm:text-5xl">
            {heading ?? t('ctaHeading')}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-navy-50">{body ?? t('ctaBody')}</p>
          <a
            href={telHref(site.primaryPhone.e164)}
            className="mt-8 inline-flex min-h-14 items-center gap-3 rounded-xl bg-red-600 px-6 text-xl font-bold text-white no-underline hover:bg-red-700"
          >
            <Phone aria-hidden className="h-6 w-6" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
          <p className="mt-4 font-semibold text-navy-100" lang="es">
            {tc('hablamos')}
          </p>
        </div>
        <div
          className="rounded-[1.75rem] bg-paper p-6 text-ink shadow-[var(--shadow-lift)] sm:p-8"
          style={{ ['--focus-ring' as string]: 'var(--color-red-600)' }}
        >
          <h3 className="text-2xl font-semibold sm:text-3xl">{formHeading ?? t('ctaFormHeading')}</h3>
          <div className="mt-5">
            <ContactFormSection locale={locale} variant="compact" defaultInterests={defaultInterests} idPrefix="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
