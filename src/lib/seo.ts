import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { site } from '@/config/site';
import { getPage } from '@/config/pages';
import type { AppLocale } from '@/i18n/routing';
import { absoluteUrl, languageAlternates, localizedUrl, ogLocale, otherLocale } from './urls';
import { headlineYears, combinedYears } from './experience';

/** Values available to every `Meta.*` message (ICU placeholders). */
export function metaValues(extra: Record<string, string | number> = {}) {
  return {
    years: headlineYears() ?? 0,
    combinedYears: combinedYears() ?? 0,
    ...extra,
  };
}

export function ogImageUrl(locale: AppLocale, pageId: string): string {
  return absoluteUrl(`/og/${locale}/${pageId}`);
}

/**
 * Full metadata for a registered page: unique title/description, self-referencing
 * canonical, hreflang (en-US, es-US, x-default), Open Graph and Twitter tags.
 */
export async function pageMetadata(locale: AppLocale, pageId: string): Promise<Metadata> {
  const page = getPage(pageId);
  const t = await getTranslations({ locale, namespace: 'Meta' });
  // Meta keys are validated for both locales by the unit tests.
  const title = t(`${page.metaKey}.title` as 'home.title', metaValues());
  const description = t(`${page.metaKey}.description` as 'home.description', metaValues());
  const url = localizedUrl(locale, page.href);
  const image = { url: ogImageUrl(locale, page.id), width: 1200, height: 630, alt: title, type: 'image/png' };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: languageAlternates(page.href) },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: [ogLocale[otherLocale(locale)]],
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}
