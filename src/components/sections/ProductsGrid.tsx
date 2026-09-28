import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { productKeys, products, type ProductKey } from '@/config/products';
import { productIcons } from '@/components/ui/icons';

export async function ProductCard({
  locale,
  productKey,
  level = 'h3',
}: {
  locale: AppLocale;
  productKey: ProductKey;
  level?: 'h2' | 'h3' | 'h4';
}) {
  const tp = await getTranslations({ locale, namespace: 'Products' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const Icon = productIcons[productKey];
  const H = level;
  const name = tp(`${productKey}.name`);
  return (
    <li className="group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-navy-700 group-hover:text-white">
        <Icon aria-hidden className="h-6 w-6" />
      </span>
      <H className="mt-4 text-[1.4rem] font-semibold">{name}</H>
      <p className="mt-2 flex-1 text-ink">{tp(`${productKey}.short`)}</p>
      <Link
        href={`/${productKey}` as '/medicare-advantage'}
        className="mt-4 inline-flex min-h-12 items-center gap-2 font-bold text-navy-700 no-underline after:absolute after:inset-0 after:rounded-[var(--radius-card)] after:content-[''] hover:underline"
      >
        {tc('exploreProduct', { product: name })}
        <ArrowRight aria-hidden className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </li>
  );
}

export async function ProductsGrid({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const groups = [
    {
      id: 'medicare',
      title: t('medicareGroup'),
      keys: productKeys.filter((k) => products[k].category === 'medicare'),
      grid: 'sm:grid-cols-2 xl:grid-cols-4',
    },
    {
      id: 'coverage',
      title: t('coverageGroup'),
      keys: productKeys.filter((k) => products[k].category === 'coverage'),
      grid: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    },
  ];
  return (
    <section aria-labelledby="products-heading" className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <p className="eyebrow">{t('productsEyebrow')}</p>
        <h2 id="products-heading" className="mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
          {t('productsHeading')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg">{t('productsIntro')}</p>
        {groups.map((g) => (
          <div key={g.id} className="mt-12">
            <h3 className="font-sans text-base font-bold tracking-[0.14em] text-muted uppercase">{g.title}</h3>
            <ul className={`mt-4 grid gap-5 ${g.grid}`}>
              {g.keys.map((k) => (
                <ProductCard key={k} locale={locale} productKey={k} level="h4" />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
