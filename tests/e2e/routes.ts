import { pages, type AppHref, type PageKind } from '../../src/config/pages';
import { routing } from '../../src/i18n/routing';

export type Locale = 'en' | 'es';
export const BASE = (process.env.BASE_URL ?? `http://localhost:${process.env.PORT ?? 3100}`).replace(/\/$/, '');

/** Independent re-implementation of the localized URL rules (checks the app, not itself). */
export function localize(locale: Locale, href: AppHref): string {
  const def = routing.pathnames[href.pathname] as string | Record<Locale, string>;
  let p = typeof def === 'string' ? def : def[locale];
  for (const [k, v] of Object.entries(href.params ?? {})) p = p.replace(`[${k}]`, v);
  if (locale === 'es') p = p === '/' ? '/es' : `/es${p}`;
  return p;
}

export type Route = {
  id: string;
  kind: PageKind;
  locale: Locale;
  path: string;
  enPath: string;
  esPath: string;
  otherPath: string;
};

export const routes: Route[] = pages.flatMap((p) =>
  (['en', 'es'] as const).map((locale) => {
    const enPath = localize('en', p.href);
    const esPath = localize('es', p.href);
    return {
      id: p.id,
      kind: p.kind,
      locale,
      path: locale === 'en' ? enPath : esPath,
      enPath,
      esPath,
      otherPath: locale === 'en' ? esPath : enPath,
    };
  }),
);

export const abs = (path: string) => (path === '/' ? BASE : `${BASE}${path}`);

/** JSON-LD @types every page kind must carry (InsuranceAgency is sitewide). */
export const expectedTypes: Record<PageKind, string[]> = {
  home: ['InsuranceAgency', 'WebSite', 'FAQPage'],
  service: ['InsuranceAgency', 'Service', 'FAQPage', 'BreadcrumbList'],
  aep: ['InsuranceAgency', 'FAQPage', 'BreadcrumbList'],
  scam: ['InsuranceAgency', 'FAQPage', 'BreadcrumbList'],
  about: ['InsuranceAgency', 'Person', 'BreadcrumbList'],
  agent: ['InsuranceAgency', 'Person', 'BreadcrumbList'],
  'service-area': ['InsuranceAgency', 'BreadcrumbList'],
  city: ['InsuranceAgency', 'BreadcrumbList'],
  faq: ['InsuranceAgency', 'FAQPage', 'BreadcrumbList'],
  contact: ['InsuranceAgency', 'BreadcrumbList'],
  legal: ['InsuranceAgency', 'BreadcrumbList'],
};

export function wordCount(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function similarity(a: string, b: string): number {
  const shingles = (t: string) => {
    const words = t
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(Boolean);
    const set = new Set<string>();
    for (let i = 0; i + 2 < words.length; i++) set.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
    return set;
  };
  const A = shingles(a);
  const B = shingles(b);
  let inter = 0;
  for (const s of A) if (B.has(s)) inter++;
  const union = A.size + B.size - inter;
  return union === 0 ? 0 : inter / union;
}
