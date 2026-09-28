import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing, type AppLocale } from '@/i18n/routing';

export type LocaleParams = { params: Promise<{ locale: string }> };

/** Validates the locale segment and enables static rendering for it. */
export async function pageLocale(params: Promise<{ locale: string }>): Promise<AppLocale> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return locale;
}
