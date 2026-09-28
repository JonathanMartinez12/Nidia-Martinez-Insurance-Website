import type { Metadata } from 'next';
import { Mail, Phone, ShieldAlert } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import { agents } from '@/config/site';
import { getPage } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { telHref } from '@/lib/phone';
import { localizedUrl } from '@/lib/urls';
import { GuidePage } from '@/components/pages/GuidePage';
import { PrintButton } from '@/components/ui/PrintButton';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'scam');
}

export default async function ScamPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'ScamPage' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const content = getContent(locale).scam;
  const url = localizedUrl(locale, getPage('scam').href);
  const mailto = `mailto:?subject=${encodeURIComponent(t('shareSubject'))}&body=${encodeURIComponent(`${t('shareBody')}\n\n${url}`)}`;

  return (
    <GuidePage
      locale={locale}
      pageId="scam"
      content={content}
      crumbName={th('scam')}
      eyebrow={t('eyebrow')}
      faqHeading={t('faqHeading')}
      intro={
        <>
          <div className="mt-8 rounded-2xl border-2 border-red-100 bg-white p-5 sm:p-6">
            <p className="flex items-center gap-2 font-serif text-2xl font-semibold text-navy-900">
              <ShieldAlert aria-hidden className="h-7 w-7 text-red-600" />
              {t('rulesHeading')}
            </p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-2">
              {(['one', 'two', 'three', 'four'] as const).map((k, i) => (
                <li key={k} className="flex gap-3 font-semibold">
                  <span aria-hidden className="font-serif text-2xl leading-none text-red-600">
                    {i + 1}
                  </span>
                  {t(`rules.${k}`)}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <PrintButton label={t('print')} />
            <a
              href={mailto}
              className="no-print inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-navy-700 bg-white px-5 font-bold text-navy-800 no-underline hover:bg-navy-50"
            >
              <Mail aria-hidden className="h-5 w-5" />
              {t('share')}
            </a>
          </div>
        </>
      }
      aside={
        <div className="mt-6 rounded-[var(--radius-card)] border-2 border-red-100 bg-red-50 p-6">
          <p className="font-serif text-2xl font-semibold text-navy-900">{t('askHeading')}</p>
          <p className="mt-2">{t('askBody')}</p>
          <ul className="mt-4 space-y-2">
            {agents.map((a) => (
              <li key={a.slug}>
                <a
                  href={telHref(a.phone.e164)}
                  className="flex min-h-12 items-center gap-2 rounded-xl bg-white px-4 font-bold text-navy-900 no-underline shadow-sm hover:bg-navy-50"
                >
                  <Phone aria-hidden className="h-5 w-5 text-red-600" />
                  {a.givenName}: {a.phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
