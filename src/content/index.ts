import type { AppLocale } from '@/i18n/routing';
import type { SiteContent } from './types';
import en from './en';
import es from './es';

const content: Record<AppLocale, SiteContent> = { en, es };

export function getContent(locale: AppLocale): SiteContent {
  return content[locale];
}
