import { ArrowRight, CalendarCheck, MessageSquare } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { products, type ProductKey } from '@/config/products';
import { productIcons } from '@/components/ui/icons';

/** Internal links from every service page: 2–3 related products, the AEP page and contact. */
export async function RelatedServices({ locale, product }: { locale: AppLocale; product: ProductKey }) {
  const t = await getTranslations({ locale, namespace: 'Common' });
  const ts = await getTranslations({ locale, namespace: 'Service' });
  const tp = await getTranslations({ locale, namespace: 'Products' });
  const related = products[product].related;
  const item =
    'group flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-white p-4 font-bold text-navy-900 no-underline shadow-sm hover:border-navy-300 hover:shadow-[var(--shadow-card)]';
  return (
    <section aria-labelledby="related-heading" className="container-page py-16">
      <h2 id="related-heading" className="text-3xl font-semibold sm:text-4xl">
        {t('relatedCoverage')}
      </h2>
      <p className="mt-2 text-lg">{t('relatedIntro', { product: tp(`${product}.name`) })}</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((k) => {
          const Icon = productIcons[k];
          const name = tp(`${k}.name`);
          return (
            <li key={k}>
              <Link href={`/${k}` as '/medicare-advantage'} className={item}>
                <Icon aria-hidden className="h-6 w-6 shrink-0 text-red-600" />
                <span className="flex-1">{t('readAboutProduct', { product: name })}</span>
                <ArrowRight aria-hidden className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          );
        })}
      </ul>
      <h3 className="mt-10 font-sans text-base font-bold tracking-[0.14em] text-muted uppercase">{ts('moreHelp')}</h3>
      <ul className="mt-3 grid gap-4 sm:grid-cols-2">
        <li>
          <Link href="/annual-enrollment-period" className={item}>
            <CalendarCheck aria-hidden className="h-6 w-6 shrink-0 text-red-600" />
            <span className="flex-1">{ts('aepLink')}</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className={item}>
            <MessageSquare aria-hidden className="h-6 w-6 shrink-0 text-red-600" />
            <span className="flex-1">{ts('contactLink')}</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
