import { Phone } from 'lucide-react';
import Image from 'next/image';
import NextLink from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { btn } from '@/components/ui/styles';
import { PageShell } from '@/components/layout/PageShell';

/** Localized 404 with a line in the other language, helpful links and the phone number. */
export default async function NotFound() {
  const locale = (await getLocale()) as AppLocale;
  const t = await getTranslations({ locale, namespace: 'NotFound' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tp = await getTranslations({ locale, namespace: 'Products' });
  const other = locale === 'en' ? 'es' : 'en';
  const tOther = await getTranslations({ locale: other, namespace: 'NotFound' });

  const links = [
    { href: '/medicare-advantage' as const, label: tp('medicare-advantage.name') },
    { href: '/medicare-supplement' as const, label: tp('medicare-supplement.name') },
    { href: '/annual-enrollment-period' as const, label: th('aep') },
    { href: '/medicare-scam-protection' as const, label: th('scam') },
    { href: '/faq' as const, label: th('faq') },
    { href: '/contact' as const, label: th('contact') },
  ];

  return (
    <PageShell locale={locale}>
      <div className="container-page py-16 sm:py-24">
        <Image src={site.brand.seal} alt={site.name} width={96} height={96} className="mb-6 h-24 w-24" />
        <p className="eyebrow">{t('eyebrow')} · 404</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">{t('heading')}</h1>
        <p className="mt-5 max-w-2xl text-lg">{t('body')}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={telHref(site.primaryPhone.e164)} className={btn.primary}>
            <Phone aria-hidden className="h-5 w-5" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
          <Link href="/" className={btn.secondary}>
            {tc('home')}
          </Link>
        </div>
        <h2 className="mt-14 text-2xl font-semibold">{t('popular')}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="flex min-h-14 items-center rounded-2xl border border-line bg-white px-5 font-bold text-navy-900 no-underline shadow-sm hover:border-navy-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div lang={other === 'es' ? 'es-US' : 'en-US'} className="mt-14 rounded-2xl bg-sand p-6">
          <p className="text-lg font-bold text-navy-900">{t('otherLanguage')}</p>
          <p className="mt-1">{tOther('body')}</p>
          <NextLink href={other === 'es' ? '/es' : '/'} className="mt-3 inline-flex min-h-12 items-center font-bold underline">
            {t('otherLanguageLink')}
          </NextLink>
        </div>
      </div>
    </PageShell>
  );
}
