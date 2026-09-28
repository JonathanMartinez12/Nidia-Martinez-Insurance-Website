import { CalendarCheck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { getEnrollmentStatus } from '@/lib/enrollment';
import { btn } from '@/components/ui/styles';

/**
 * Shows from Sep 1 (ANOC season) through Dec 7, hidden the rest of the year. Pages that
 * render it revalidate daily, so it switches on/off without a redeploy.
 */
export async function AepCallout({ locale, now = new Date() }: { locale: AppLocale; now?: Date }) {
  const status = getEnrollmentStatus(now);
  if (status.phase === 'off') return null;
  const t = await getTranslations({ locale, namespace: 'Aep' });
  const open = status.phase === 'aep';
  return (
    <section aria-labelledby="aep-callout" className="container-page py-6" data-testid="aep-callout" data-phase={status.phase}>
      <div className="on-dark relative overflow-hidden rounded-[1.75rem] bg-navy-800 p-6 text-white shadow-[var(--shadow-lift)] sm:p-10">
        <div aria-hidden className="absolute -top-16 -right-16 h-56 w-56 rounded-full border-[18px] border-white/5" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-red-600">
              <CalendarCheck aria-hidden className="h-7 w-7" />
            </span>
            <div>
              <h2 id="aep-callout" className="text-2xl font-semibold text-white sm:text-3xl">
                {open ? t('openTitle') : t('preTitle')}
              </h2>
              <p className="mt-2 max-w-2xl text-lg text-navy-50">
                {open
                  ? t('openBody', { coverageYear: status.coverageYear })
                  : t('preBody', { coverageYear: status.coverageYear })}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/contact" className={btn.primary}>
              {t('book')}
            </Link>
            <Link href="/annual-enrollment-period" className={btn.ghostOnDark}>
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
