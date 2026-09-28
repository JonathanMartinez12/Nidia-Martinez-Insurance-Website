import type { Metadata } from 'next';
import { Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import { site } from '@/config/site';
import { getEnrollmentStatus } from '@/lib/enrollment';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { telHref } from '@/lib/phone';
import { btn } from '@/components/ui/styles';
import { GuidePage } from '@/components/pages/GuidePage';

// Daily re-render keeps the "open now / starts soon" status and coverage year current.
export const revalidate = 86400;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'aep');
}

export default async function AepPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'AepPage' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const status = getEnrollmentStatus();
  const content = getContent(locale).aep;

  const dates = [
    { day: t('dates.openDay'), label: t('dates.open') },
    { day: t('dates.closeDay'), label: t('dates.close') },
    { day: t('dates.startDay'), label: t('dates.start', { year: status.coverageYear }) },
  ];

  return (
    <GuidePage
      locale={locale}
      pageId="aep"
      content={content}
      crumbName={th('aep')}
      eyebrow={t('eyebrow')}
      faqHeading={t('faqHeading')}
      intro={
        <>
          <p
            className="mt-6 inline-flex rounded-full bg-white px-4 py-2 font-bold text-navy-900 shadow-sm"
            data-testid="aep-status"
          >
            {status.phase === 'aep'
              ? t('statusOpen', { year: status.coverageYear })
              : t('statusUpcoming', { year: status.aepYear, coverageYear: status.coverageYear })}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {dates.map((d) => (
              <li key={d.label} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                <p className="font-serif text-3xl font-semibold text-red-700">{d.day}</p>
                <p className="mt-1 font-semibold text-navy-900">{d.label}</p>
              </li>
            ))}
          </ul>
        </>
      }
      aside={
        <div className="on-dark mt-6 rounded-[var(--radius-card)] bg-navy-800 p-6 text-white">
          <p className="font-serif text-2xl font-semibold">{t('reviewHeading')}</p>
          <p className="mt-2 text-navy-50">{t('reviewBody')}</p>
          <a href={telHref(site.primaryPhone.e164)} className={`${btn.primary} mt-5 w-full`}>
            <Phone aria-hidden className="h-5 w-5" />
            {site.primaryPhone.display}
          </a>
          <a href="#free-consultation" className={`${btn.ghostOnDark} mt-3 w-full`}>
            {tc('bookFreeConsultation')}
          </a>
        </div>
      }
    />
  );
}
