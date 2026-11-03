import { Star } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { reviews as allReviews, type CustomerReview } from '@/config/reviews';
import { site } from '@/config/site';
import { hreflangCode } from '@/lib/urls';

/**
 * "What our clients say": real Google reviews from src/config/reviews.ts. Renders nothing while
 * the list is empty, and never emits Review/AggregateRating schema.
 */
export async function Reviews({
  locale,
  limit,
  reviews = allReviews,
}: {
  locale: AppLocale;
  limit?: number;
  reviews?: CustomerReview[];
}) {
  if (reviews.length === 0) return null;
  const t = await getTranslations({ locale, namespace: 'Reviews' });
  const month = new Intl.DateTimeFormat(hreflangCode[locale], { month: 'long', year: 'numeric', timeZone: 'UTC' });
  const shown = reviews.slice(0, limit);

  return (
    <section aria-labelledby="reviews-heading" className="bg-sand py-16 sm:py-20" data-testid="reviews">
      <div className="container-page">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h2 id="reviews-heading" className="mt-2 text-4xl font-semibold sm:text-5xl">
          {t('heading')}
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <li key={`${r.author}-${r.body.slice(0, 20)}`} className="flex flex-col rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
              <p className="flex gap-0.5 text-amber-600" role="img" aria-label={t('stars', { rating: r.rating })}>
                {Array.from({ length: r.rating }, (_, i) => (
                  <Star key={i} aria-hidden className="h-5 w-5" fill="currentColor" />
                ))}
              </p>
              <blockquote className="mt-3 flex-1 text-lg" lang={r.lang === locale ? undefined : r.lang}>
                <p>
                  “{r.body}
                  {r.excerpt ? ' …' : ''}”
                </p>
              </blockquote>
              <p className="mt-4 font-bold text-navy-900">
                {r.author}
                <span className="block text-sm font-normal text-muted">
                  {t('via', { source: r.source })} · {month.format(new Date(`${r.date}-15T00:00:00Z`))}
                </span>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center gap-2 font-bold text-navy-800 underline underline-offset-4"
          >
            <Star aria-hidden className="h-5 w-5 text-amber-600" fill="currentColor" />
            {t('leaveReview')}
          </a>
        </p>
      </div>
    </section>
  );
}
