import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import { getContent } from '@/content';
import { agents, site } from '@/config/site';
import { getPage } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { telHref } from '@/lib/phone';
import { card } from '@/components/ui/styles';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { TpmoDisclaimer } from '@/components/sections/TpmoDisclaimer';
import { ContactFormSection } from '@/components/contact/ContactFormSection';
import { PageShell } from '@/components/layout/PageShell';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'contact');
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Contact' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const tf = await getTranslations({ locale, namespace: 'Footer' });
  const { contact } = getContent(locale);

  return (
    <PageShell locale={locale} pageId="contact">
      <PageHeader
        locale={locale}
        crumbs={[{ name: th('contact'), path: localizedPath(locale, getPage('contact').href) }]}
        title={contact.h1}
        lede={contact.lede}
      />
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:py-16">
        <section aria-labelledby="form-heading" className={`${card} p-6 sm:p-10`}>
          <h2 id="form-heading" className="text-3xl font-semibold sm:text-4xl">
            {t('formHeading')}
          </h2>
          <p className="mt-2 text-muted">{t('formIntro')}</p>
          <div className="mt-8">
            <ContactFormSection locale={locale} variant="full" idPrefix="contact" />
          </div>
        </section>

        <div className="space-y-6">
          <section
            aria-labelledby="call-heading"
            className="on-dark rounded-[var(--radius-card)] bg-navy-800 p-6 text-white sm:p-8"
          >
            <Image
              src={site.brand.logoWhite}
              alt={site.name}
              width={site.brand.logoSize.width}
              height={site.brand.logoSize.height}
              sizes="18rem"
              className="mb-6 h-auto w-64 border-b border-white/15 pb-6"
            />
            <h2 id="call-heading" className="flex items-center gap-2 text-2xl font-semibold text-white">
              <Phone aria-hidden className="h-6 w-6" />
              {t('callHeading')}
            </h2>
            <p className="mt-2 text-navy-50">{t('callBody')}</p>
            <ul className="mt-5 space-y-3">
              {agents.map((a) => (
                <li key={a.slug} className="rounded-2xl bg-white/10 p-4">
                  <Link
                    href={{ pathname: '/about/[agent]', params: { agent: a.slug } }}
                    className="font-serif text-xl font-semibold text-white"
                  >
                    {a.name}
                  </Link>
                  <a
                    href={telHref(a.phone.e164)}
                    className="mt-1 flex min-h-12 items-center gap-2 text-lg font-bold text-white no-underline hover:underline"
                  >
                    <Phone aria-hidden className="h-5 w-5" />
                    {a.phone.display}
                  </a>
                  <a
                    href={`mailto:${a.email}`}
                    className="flex min-h-12 items-center gap-2 break-all text-navy-50 no-underline hover:underline"
                  >
                    <Mail aria-hidden className="h-5 w-5 shrink-0" />
                    {a.email}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold text-navy-100" lang="es">
              {tc('hablamos')}
            </p>
          </section>

          <section aria-labelledby="area-heading" className={`${card} p-6`}>
            <h2 id="area-heading" className="flex items-center gap-2 text-2xl font-semibold">
              <MapPin aria-hidden className="h-6 w-6 text-red-600" />
              {t('areaHeading')}
            </h2>
            <p className="mt-2">
              {site.address
                ? `${site.address.streetAddress}, ${site.address.addressLocality}, ${site.address.addressRegion} ${site.address.postalCode}`
                : tf('serviceAreaLine')}
            </p>
            <Link href="/service-area" className="mt-2 inline-flex min-h-12 items-center font-bold underline underline-offset-4">
              {th('serviceArea')}
            </Link>
          </section>

          <section aria-labelledby="hours-heading" className={`${card} p-6`}>
            <h2 id="hours-heading" className="flex items-center gap-2 text-2xl font-semibold">
              <Clock aria-hidden className="h-6 w-6 text-red-600" />
              {t('hoursHeading')}
            </h2>
            {site.hours && site.hours.length > 0 ? (
              <ul className="mt-2 space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days.join()}>
                    {h.days.join(', ')}: {h.opens}–{h.closes}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2">{t('hoursByAppointment')}</p>
            )}
          </section>

          <section aria-labelledby="email-heading" className={`${card} p-6`}>
            <h2 id="email-heading" className="flex items-center gap-2 text-2xl font-semibold">
              <Mail aria-hidden className="h-6 w-6 text-red-600" />
              {t('emailHeading')}
            </h2>
            <a href={`mailto:${site.email}`} className="mt-2 flex min-h-12 items-center font-semibold break-all">
              {site.email}
            </a>
          </section>

          <div className="rounded-2xl border border-line bg-white p-5 text-[0.92rem] leading-relaxed text-muted">
            <TpmoDisclaimer locale={locale} />
            <p className="mt-3">{tc('nonAffiliation')}</p>
          </div>
        </div>
      </div>
      <div className="container-page pb-16" data-content="contact-body">
        <div className="prose-page">
          <Sections sections={contact.sections} locale={locale} />
        </div>
      </div>
    </PageShell>
  );
}
