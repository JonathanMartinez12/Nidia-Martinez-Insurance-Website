import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { confirmedCarriers, type CarrierLine } from '@/config/site';

/** Logos render at this height (px) on desktop; 32px on mobile via CSS. */
const LOGO_HEIGHT = 40;

/**
 * "Carriers we work with" — driven by `carriers` in the site config. A carrier's logo renders only
 * when `approved: true`, in full color at a uniform height; otherwise its name is shown as text.
 * Logos are not links.
 */
export async function CarrierStrip({
  locale,
  line,
  productName,
  variant = 'card',
}: {
  locale: AppLocale;
  /** Only carriers for this product line; omit for every carrier we represent. */
  line?: CarrierLine;
  /** Product name for the intro sentence on product pages. */
  productName?: string;
  /** `card`: boxed, inside page content. `band`: full-width section between page sections. */
  variant?: 'card' | 'band';
}) {
  const t = await getTranslations({ locale, namespace: 'Carriers' });
  const list = confirmedCarriers(line);
  if (list.length === 0) return null;

  const content = (
    <>
      <h2
        id="carriers-heading"
        className={variant === 'band' ? 'text-3xl font-semibold sm:text-4xl' : 'text-2xl font-semibold sm:text-3xl'}
      >
        {t('heading')}
      </h2>
      <p className="mt-2 max-w-3xl">{productName ? t('introProduct', { product: productName }) : t('intro')}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]" data-testid="carrier-strip">
        {list.map((c) => (
          <li
            key={c.name}
            className="flex min-h-20 flex-col items-center justify-center rounded-xl border border-line bg-white px-3 py-4 text-center"
          >
            {c.approved && c.logo ? (
              <Image
                src={c.logo.src}
                alt={t('logoAlt', { name: c.logo.brand ?? c.name })}
                width={Math.round((LOGO_HEIGHT * c.logo.width) / c.logo.height)}
                height={LOGO_HEIGHT}
                unoptimized={c.logo.src.endsWith('.svg')}
                className="h-8 w-auto max-w-full object-contain sm:h-10"
              />
            ) : (
              <span className="font-serif text-xl leading-tight font-semibold text-navy-900">{c.name}</span>
            )}
            {c.note ? <span className="mt-1 block text-[0.95rem] text-muted">{c.note[locale]}</span> : null}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.95rem] text-muted">{t('footnote')}</p>
    </>
  );

  if (variant === 'band') {
    return (
      <section aria-labelledby="carriers-heading" className="border-y border-line bg-navy-50/60 py-14 sm:py-16">
        <div className="container-page">{content}</div>
      </section>
    );
  }
  return (
    <section
      aria-labelledby="carriers-heading"
      className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      {content}
    </section>
  );
}
