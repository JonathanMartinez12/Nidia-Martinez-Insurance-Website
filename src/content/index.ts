import type { AppLocale } from '@/i18n/routing';
import { planYear } from '@/lib/enrollment';
import type { SiteContent } from './types';
import en from './en';
import es from './es';

const content: Record<AppLocale, SiteContent> = { en, es };
const cache = new Map<string, SiteContent>();

/**
 * Locale content with date tokens filled in. `{planYear}` becomes the plan year people are
 * shopping for (next year from October 1), so copy never hardcodes a year.
 */
export function getContent(locale: AppLocale): SiteContent {
  const year = String(planYear());
  const key = `${locale}:${year}`;
  let filled = cache.get(key);
  if (!filled) {
    filled = JSON.parse(JSON.stringify(content[locale]).replaceAll('{planYear}', year)) as SiteContent;
    cache.set(key, filled);
  }
  return filled;
}
