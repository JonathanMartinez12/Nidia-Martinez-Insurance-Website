import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';

export async function HowItWorks({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const steps = ['one', 'two', 'three'] as const;
  return (
    <section aria-labelledby="how-heading" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <p className="eyebrow">{t('howEyebrow')}</p>
        <h2 id="how-heading" className="mt-2 text-4xl font-semibold sm:text-5xl">
          {t('howHeading')}
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s} className="relative rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)]">
              <span aria-hidden className="font-serif text-6xl leading-none font-semibold text-red-600">
                {i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{t(`steps.${s}.title`)}</h3>
              <p className="mt-2">{t(`steps.${s}.body`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
