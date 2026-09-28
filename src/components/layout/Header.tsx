import { Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { products, productKeys } from '@/config/products';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { productIcons } from '@/components/ui/icons';
import { Logo } from '@/components/ui/Logo';
import { btn } from '@/components/ui/styles';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import { NavDropdown } from './NavDropdown';
import { TextSizeToggle } from './TextSizeToggle';

export async function Header({ locale, alternatePath }: { locale: AppLocale; alternatePath: string }) {
  const t = await getTranslations({ locale, namespace: 'Header' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const tp = await getTranslations({ locale, namespace: 'Products' });

  const medicare = productKeys.filter((k) => products[k].category === 'medicare');
  const coverage = productKeys.filter((k) => products[k].category === 'coverage');

  const productLink = (key: (typeof productKeys)[number], compact = false) => {
    const Icon = productIcons[key];
    return (
      <li key={key}>
        <Link
          href={`/${key}` as '/medicare-advantage'}
          className={`flex min-h-12 items-center gap-3 rounded-xl px-3 py-2 font-semibold text-navy-900 no-underline hover:bg-navy-50 ${compact ? 'text-base' : ''}`}
        >
          <Icon aria-hidden className="h-5 w-5 shrink-0 text-red-600" />
          {tp(`${key}.name`)}
        </Link>
      </li>
    );
  };

  const resources = [
    { href: '/annual-enrollment-period' as const, label: t('aep') },
    { href: '/medicare-scam-protection' as const, label: t('scam') },
    { href: '/faq' as const, label: t('faq') },
  ];
  const company = [
    { href: '/about' as const, label: t('about') },
    { href: '/service-area' as const, label: t('serviceArea') },
    { href: '/contact' as const, label: t('contact') },
  ];

  const navLink =
    'tap inline-flex items-center whitespace-nowrap rounded-lg px-3 font-semibold text-navy-900 no-underline hover:bg-navy-50';

  return (
    // Sticky with a negative top: the utility row scrolls away, the main row stays pinned.
    <header className="sticky -top-[3rem] z-40 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="on-dark h-[3rem] bg-navy-900 text-white">
        <div className="container-page flex h-full items-center justify-between gap-3">
          <p className="truncate text-sm font-semibold">
            <span className="hidden md:inline">{t('utilityMessage')} · </span>
            <span lang="es">{tc('hablamos')}</span>
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <TextSizeToggle label={t('textSize')} normalLabel={t('textNormal')} largeLabel={t('textLarge')} />
            <span aria-hidden className="h-6 w-px bg-white/30" />
            <LanguageToggle
              locale={locale}
              alternatePath={alternatePath}
              label={t('language')}
              switchLabel={t('switchLanguage')}
              currentLabel={t('currentLanguage')}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="container-page flex h-[4.5rem] items-center gap-3 lg:h-20">
          <Logo homeLabel={tc('homeLabel')} tagline={tc('tagline')} className="mr-auto shrink-0 xl:mr-4" />

          <nav aria-label={t('primaryNav')} className="hidden xl:block">
            <ul className="flex items-center gap-1">
              <li>
                <NavDropdown label={t('plans')} wide>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="px-3 pt-2 pb-1 text-sm font-bold tracking-wide text-muted uppercase">{t('medicarePlans')}</p>
                      <ul>{medicare.map((k) => productLink(k))}</ul>
                    </div>
                    <div>
                      <p className="px-3 pt-2 pb-1 text-sm font-bold tracking-wide text-muted uppercase">{t('otherCoverage')}</p>
                      <ul>{coverage.map((k) => productLink(k))}</ul>
                    </div>
                  </div>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown label={t('resources')}>
                  <ul>
                    {resources.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className="flex min-h-12 items-center rounded-xl px-3 font-semibold text-navy-900 no-underline hover:bg-navy-50"
                        >
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavDropdown>
              </li>
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={navLink}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 xl:ml-auto">
            <a
              href={telHref(site.primaryPhone.e164)}
              className="tap inline-flex items-center gap-2 rounded-xl bg-navy-700 px-2.5 font-bold whitespace-nowrap text-white no-underline hover:bg-navy-800 sm:px-4"
            >
              <Phone aria-hidden className="hidden h-5 w-5 shrink-0 sm:block" />
              <span className="sr-only">{tc('callUs')}: </span>
              <span className="text-[0.9rem] sm:text-base">{site.primaryPhone.display}</span>
            </a>
            <div className="hidden lg:block">
              <Link href="/contact" className={`${btn.primary} whitespace-nowrap`}>
                {tc('freeConsultation')}
              </Link>
            </div>
            <div className="xl:hidden">
              <MobileMenu openLabel={t('openMenu')} closeLabel={t('closeMenu')} menuLabel={t('menu')} navLabel={t('mobileNav')}>
                <div className="container-page grid gap-6 py-6 sm:grid-cols-2">
                  <div>
                    <p className="px-3 text-sm font-bold tracking-wide text-muted uppercase">{t('medicarePlans')}</p>
                    <ul className="mt-1">{medicare.map((k) => productLink(k, true))}</ul>
                    <p className="mt-4 px-3 text-sm font-bold tracking-wide text-muted uppercase">{t('otherCoverage')}</p>
                    <ul className="mt-1">{coverage.map((k) => productLink(k, true))}</ul>
                  </div>
                  <div>
                    <p className="px-3 text-sm font-bold tracking-wide text-muted uppercase">{t('resources')}</p>
                    <ul className="mt-1">
                      {[...resources, ...company].map((r) => (
                        <li key={r.href}>
                          <Link
                            href={r.href}
                            className="flex min-h-12 items-center rounded-xl px-3 font-semibold text-navy-900 no-underline hover:bg-navy-50"
                          >
                            {r.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 grid gap-3 px-3">
                      <a href={telHref(site.primaryPhone.e164)} className={btn.primary}>
                        <Phone aria-hidden className="h-5 w-5" />
                        {tc('callPhone', { phone: site.primaryPhone.display })}
                      </a>
                      <Link href="/contact" className={btn.secondary}>
                        {tc('bookFreeConsultation')}
                      </Link>
                    </div>
                  </div>
                </div>
              </MobileMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
