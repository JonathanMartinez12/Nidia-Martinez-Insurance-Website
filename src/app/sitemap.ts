import type { MetadataRoute } from 'next';
import { pages } from '@/config/pages';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';
import { languageAlternates, localizedUrl } from '@/lib/urls';

/** Every page in both locales, each with its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, page.href),
      lastModified: new Date(`${page.lastModified ?? site.contentLastReviewed}T00:00:00Z`),
      changeFrequency: page.kind === 'home' || page.kind === 'aep' ? ('weekly' as const) : ('monthly' as const),
      priority: page.kind === 'home' ? 1 : page.kind === 'service' || page.kind === 'guide' ? 0.9 : page.kind === 'legal' ? 0.3 : 0.7,
      alternates: { languages: languageAlternates(page.href) },
    })),
  );
}
