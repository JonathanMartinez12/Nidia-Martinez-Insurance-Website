import { CalendarCheck, CircleCheck, Phone, UserRound } from 'lucide-react';
import { getFormatter, getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { products, type ProductKey } from '@/config/products';
import { carriers, site } from '@/config/site';
import { getPage } from '@/config/pages';
import { getContent } from '@/content';
import { telHref } from '@/lib/phone';
import { localizedUrl } from '@/lib/urls';
import { faqSchema, serviceSchema } from '@/lib/schema';
import { btn, card } from '@/components/ui/styles';
import { JsonLd } from '@/components/ui/JsonLd';
import { Sections } from '@/components/ui/Blocks';
import { RichText, stripRichText } from '@/components/ui/RichText';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqList } from '@/components/sections/FaqList';
import { CarriersList } from '@/components/sections/CarriersList';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { FinalCta } from '@/components/sections/FinalCta';
import { TpmoDisclaimer } from '@/components/sections/TpmoDisclaimer';
import { Link } from '@/i18n/Link';
import { PageShell } from '@/components/layout/PageShell';

export async function ServicePage({ locale, product }: { locale: AppLocale; product: ProductKey }) {
  const content = getContent(locale).services[product];
  const t = await getTranslations({ locale, namespace: 'Service' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tp = await getTranslations({ locale, namespace: 'Products' });
  const format = await getFormatter({ locale });
  const name = tp(`${product}.name`);
  const page = getPage(`service-${product}`);
  const url = localizedUrl(locale, page.href);
  const reviewed = format.dateTime(new Date(`${site.contentLastReviewed}T12:00:00`), { dateStyle: 'long' });
  const isMedicare = products[product].category === 'medicare';
  const carrierList =
    product === 'medicare-advantage'
      ? carriers.medicareAdvantage
      : product === 'medicare-supplement'
        ? carriers.medicareSupplement
        : null;

  return (
    <PageShell locale={locale} pageId={`service-${product}`}>
      <PageHeader
        locale={locale}
        crumbs={[{ name, path: new URL(url).pathname }]}
        eyebrow={isMedicare ? th('medicarePlans') : th('otherCoverage')}
        title={content.h1}
        lede={content.lede}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={telHref(site.primaryPhone.e164)} className={btn.primary}>
            <Phone aria-hidden className="h-5 w-5" />
            {tc('callPhone', { phone: site.primaryPhone.display })}
          </a>
          <Link href="/contact" className={btn.secondary}>
            {tc('freeConsultation')}
          </Link>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-muted">
          <CalendarCheck aria-hidden className="h-5 w-5" />
          <span>{tc('lastReviewed', { date: reviewed })}</span>
        </p>
      </PageHeader>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:py-16">
        <article className="min-w-0" data-content="service-body">
          <div className="grid gap-5 md:grid-cols-2">
            <section aria-labelledby="who-for" className={`${card} p-6`}>
              <h2 id="who-for" className="flex items-center gap-2 text-2xl font-semibold">
                <UserRound aria-hidden className="h-6 w-6 text-red-600" />
                {t('whoFor')}
              </h2>
              <ul className="mt-3 space-y-2">
                {content.whoFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CircleCheck aria-hidden className="mt-1 h-5 w-5 shrink-0 text-navy-700" />
                    <span>
                      <RichText text={item} locale={locale} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section aria-labelledby="covers" className={`${card} p-6`}>
              <h2 id="covers" className="flex items-center gap-2 text-2xl font-semibold">
                <CircleCheck aria-hidden className="h-6 w-6 text-red-600" />
                {t('covers')}
              </h2>
              <ul className="mt-3 space-y-2">
                {content.covers.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CircleCheck aria-hidden className="mt-1 h-5 w-5 shrink-0 text-navy-700" />
                    <span>
                      <RichText text={item} locale={locale} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="prose-page mt-4">
            <Sections sections={content.sections} locale={locale} />
          </div>

          {carrierList ? (
            <div className="pt-14">
              <CarriersList locale={locale} carriers={carrierList} productName={name} />
            </div>
          ) : null}

          <section aria-labelledby="service-faq" className="pt-14">
            <h2 id="service-faq" className="text-3xl font-semibold sm:text-4xl">
              {t('faqHeading', { product: name })}
            </h2>
            <div className="mt-6">
              <FaqList faqs={content.faqs} locale={locale} />
            </div>
          </section>
        </article>

        <aside aria-label={t('moreHelp')} className="lg:sticky lg:top-28 lg:self-start">
          <div className="on-dark rounded-[var(--radius-card)] bg-navy-800 p-6 text-white shadow-[var(--shadow-lift)]">
            <p className="font-serif text-2xl font-semibold">{t('compactFormHeading', { product: name })}</p>
            <p className="mt-2 text-navy-50">{t('compactFormBody')}</p>
            <a href={telHref(site.primaryPhone.e164)} className={`${btn.primary} mt-5 w-full`}>
              <Phone aria-hidden className="h-5 w-5" />
              {site.primaryPhone.display}
            </a>
            <a href="#free-consultation" className={`${btn.ghostOnDark} mt-3 w-full`}>
              {tc('bookFreeConsultation')}
            </a>
            <p className="mt-4 text-center font-semibold text-navy-100" lang="es">
              {tc('hablamos')}
            </p>
          </div>
          {isMedicare ? (
            <div className="mt-6 rounded-2xl border border-line bg-white p-5 text-[0.92rem] leading-relaxed text-muted">
              <TpmoDisclaimer locale={locale} />
            </div>
          ) : null}
        </aside>
      </div>

      <RelatedServices locale={locale} product={product} />

      <FinalCta
        locale={locale}
        formHeading={t('compactFormHeading', { product: name })}
        body={t('compactFormBody')}
        defaultInterests={[product]}
      />

      <JsonLd
        data={serviceSchema({
          name: content.h1,
          serviceType: products[product].serviceType,
          description: stripRichText(content.summary),
          url,
        })}
      />
      <JsonLd data={faqSchema(content.faqs.map((f) => ({ q: f.q, a: stripRichText(f.a) })))} />
    </PageShell>
  );
}
