import { Star } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';

/**
 * "★ 5.0 on Google · 40+ reviews", linking to our Google reviews. Rating and count come from
 * `site.googleRating` (hidden while null). Never emits AggregateRating/Review schema.
 */
export async function ReviewBadge({ locale, className = '' }: { locale: AppLocale; className?: string }) {
  const rating = site.googleRating;
  if (!rating) return null;
  const t = await getTranslations({ locale, namespace: 'Reviews' });
  return (
    <a
      href={site.googleReviewsUrl}
      target="_blank"
      rel="noopener"
      data-cta="review_badge"
      data-testid="review-badge"
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-white px-4 font-bold text-navy-900 no-underline shadow-sm hover:bg-navy-50 ${className}`}
    >
      <Star aria-hidden className="h-5 w-5 shrink-0 text-amber-600" fill="currentColor" />
      {t('badge', { rating: rating.rating.toFixed(1), count: rating.count })}
    </a>
  );
}
