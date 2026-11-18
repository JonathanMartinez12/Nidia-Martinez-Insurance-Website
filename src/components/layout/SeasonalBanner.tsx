import { Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { centralDate, daysUntilAepEnds, seasonDaysScript } from '@/lib/season';
import { BannerDismiss } from './BannerDismiss';

const linkClass = 'inline-flex min-h-11 items-center gap-1.5 font-bold whitespace-nowrap text-white underline underline-offset-4';

/**
 * Site-wide seasonal banner. All three variants are in the HTML; CSS shows the one matching
 * <html data-season> (set before paint by `seasonBootScript`), so it never shifts the layout.
 */
export async function SeasonalBanner({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Banner' });
  const today = centralDate();
  const days = Math.max(0, daysUntilAepEnds(today.year, today.month, today.day));
  const aepText = (n: number) => (n === 0 ? t('aepToday') : t('aep', { days: n }));
  // Templates for the in-browser countdown ("{n}" is replaced with today's number).
  const tplOther = t('aep', { days: 99 }).replace('99', '{n}');

  return (
    <div data-season-banner role="region" aria-label={t('label')} className="season-banner on-dark bg-red-700 text-white">
      <div className="container-page flex items-center gap-3 py-2">
        <div className="min-w-0 flex-1 text-[0.95rem] leading-snug font-semibold sm:text-base">
          <p data-variant="aep" className="flex-wrap items-center gap-x-4">
            <span
              data-aep-text
              data-tpl-zero={t('aepToday')}
              data-tpl-one={t('aep', { days: 1 })}
              data-tpl-other={tplOther}
              suppressHydrationWarning
            >
              {aepText(days)}
            </span>
            <a href={telHref(site.primaryPhone.e164)} data-call-location="banner" className={linkClass}>
              <Phone aria-hidden className="h-4 w-4" />
              {t('aepCall', { phone: site.primaryPhone.display })}
            </a>
          </p>
          <p data-variant="post" className="flex-wrap items-center gap-x-4">
            <span>{t('post')}</span>
            <Link href="/guides/turning-65-medicare-louisiana" className={linkClass}>
              {t('postLink')}
            </Link>
          </p>
          <p data-variant="oep" className="flex-wrap items-center gap-x-4">
            <span>{t('oep')}</span>
            <Link href="/guides/medicare-advantage-open-enrollment" className={linkClass}>
              {t('oepLink')}
            </Link>
          </p>
        </div>
        <BannerDismiss label={t('dismiss')} />
      </div>
      <script dangerouslySetInnerHTML={{ __html: seasonDaysScript }} />
    </div>
  );
}
