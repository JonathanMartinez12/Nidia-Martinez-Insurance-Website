import { routing, type AppLocale } from '@/i18n/routing';
import type { AppHref } from '@/config/pages';
import { getSiteUrl } from '@/config/site';

export const hreflangCode: Record<AppLocale, string> = { en: 'en-US', es: 'es-US' };
export const ogLocale: Record<AppLocale, string> = { en: 'en_US', es: 'es_US' };

/**
 * Public path for an internal href in a locale, e.g. `/es/seguro-de-vida`.
 * Mirrors next-intl's routing (localized pathnames, `as-needed` prefix) without pulling
 * its client navigation runtime into the bundle. The proxy enforces the same table.
 */
export function localizedPath(locale: AppLocale, href: AppHref): string {
  const def = routing.pathnames[href.pathname] as string | Record<AppLocale, string>;
  let path = typeof def === 'string' ? def : def[locale];
  for (const [key, value] of Object.entries(href.params ?? {})) path = path.replace(`[${key}]`, encodeURIComponent(value));
  if (locale === routing.defaultLocale) return path;
  return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Absolute URL for a public path. No trailing slashes anywhere — including the root —
 * which matches how Next.js normalizes canonical/hreflang URLs (trailingSlash: false).
 */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  if (path === '' || path === '/') return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localizedUrl(locale: AppLocale, href: AppHref): string {
  return absoluteUrl(localizedPath(locale, href));
}

/** hreflang map for a page: en-US, es-US, x-default (→ English). */
export function languageAlternates(href: AppHref): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of routing.locales) map[hreflangCode[locale]] = localizedUrl(locale, href);
  map['x-default'] = localizedUrl(routing.defaultLocale, href);
  return map;
}

export function otherLocale(locale: AppLocale): AppLocale {
  return locale === 'en' ? 'es' : 'en';
}
