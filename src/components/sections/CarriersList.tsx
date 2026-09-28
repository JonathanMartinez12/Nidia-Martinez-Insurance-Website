import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { confirmedCarriers, type Carrier } from '@/config/site';

/** "Carriers we work with" — text names from config; a logo only when `approved: true`. */
export async function CarriersList({
  locale,
  carriers,
  productName,
}: {
  locale: AppLocale;
  carriers: Carrier[];
  productName: string;
}) {
  const t = await getTranslations({ locale, namespace: 'Service' });
  const list = confirmedCarriers(carriers);
  if (list.length === 0) return null;
  return (
    <section
      aria-labelledby="carriers-heading"
      className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <h2 id="carriers-heading" className="text-2xl font-semibold sm:text-3xl">
        {t('carriersHeading')}
      </h2>
      <p className="mt-2">{t('carriersIntro', { product: productName })}</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {list.map((c) => (
          <li key={c.name} className="flex min-h-16 items-center gap-3 rounded-xl bg-navy-50 px-4 py-3">
            {c.logo?.approved ? (
              <Image src={c.logo.src} alt={c.name} width={c.logo.width} height={c.logo.height} className="h-8 w-auto" />
            ) : null}
            <span>
              <span className="block text-lg font-bold text-navy-900">{c.name}</span>
              {c.note ? <span className="block text-[0.95rem] text-muted">{c.note[locale]}</span> : null}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.95rem] text-muted">{t('carriersNote')}</p>
    </section>
  );
}
