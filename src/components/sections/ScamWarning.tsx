import { ShieldAlert } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { agents } from '@/config/site';

export async function ScamWarning({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Scam' });
  const nidia = agents.find((a) => a.slug === 'nidia-martinez') ?? agents[0]!;
  const john = agents.find((a) => a.slug === 'john-martinez') ?? agents[1] ?? agents[0]!;
  return (
    <section aria-labelledby="scam-heading" className="container-page py-10">
      <div className="grid gap-6 rounded-[1.75rem] border-2 border-red-100 bg-red-50 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-10">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-red-600 text-white">
          <ShieldAlert aria-hidden className="h-8 w-8" />
        </span>
        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 id="scam-heading" className="mt-1 text-3xl font-semibold sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-lg font-semibold">{t('body')}</p>
          <ul className="mt-4 grid gap-3 lg:grid-cols-3">
            {(['one', 'two', 'three'] as const).map((k) => (
              <li key={k} className="rounded-2xl bg-white p-5 shadow-sm">
                {t(`points.${k}`, { nidiaPhone: nidia.phone.display, johnPhone: john.phone.display })}
              </li>
            ))}
          </ul>
          <Link
            href="/medicare-scam-protection"
            className="mt-6 inline-flex min-h-12 items-center font-bold text-red-800 underline underline-offset-4"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
