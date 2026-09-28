import { CalendarCheck, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';

/** Persistent bottom call bar on phones. Dials the primary business line. */
export async function MobileCallBar({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'MobileBar' });
  return (
    <aside
      aria-label={t('label')}
      className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(17_31_74/0.35)] backdrop-blur md:hidden"
    >
      <div className="flex gap-2">
        <a
          href={telHref(site.primaryPhone.e164)}
          className="inline-flex min-h-14 min-w-0 flex-[1.25] items-center justify-center gap-2 rounded-xl bg-red-600 px-3 text-center text-base leading-tight font-bold text-white no-underline active:bg-red-700"
        >
          <Phone aria-hidden className="h-5 w-5 shrink-0" />
          <span className="sr-only">{t('callLabel')} </span>
          <span>{site.primaryPhone.display}</span>
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-14 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-navy-700 bg-white px-2 text-center text-base leading-tight font-bold text-navy-800 no-underline"
        >
          <CalendarCheck aria-hidden className="h-5 w-5 shrink-0" />
          <span>{t('consult')}</span>
        </Link>
      </div>
    </aside>
  );
}
