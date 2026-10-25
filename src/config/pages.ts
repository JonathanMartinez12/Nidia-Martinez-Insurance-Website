/**
 * Registry of every indexable page. Drives the sitemap, OG images, Lighthouse URL
 * list and the e2e test matrix — a page missing here is a page missing everywhere.
 */
import { agents } from './site';
import { cityPages } from './cities';
import { productKeys, type ProductKey } from './products';
import { guides } from './guides';
import type { AppPathname } from '@/i18n/routing';

export type StaticPathname = Exclude<AppPathname, '/about/[agent]' | '/service-area/[city]'>;

export type AppHref =
  | { pathname: StaticPathname; params?: undefined }
  | { pathname: '/about/[agent]'; params: { agent: string } }
  | { pathname: '/service-area/[city]'; params: { city: string } };

export type PageKind =
  | 'home'
  | 'service'
  | 'aep'
  | 'scam'
  | 'about'
  | 'agent'
  | 'service-area'
  | 'city'
  | 'guides'
  | 'guide'
  | 'faq'
  | 'contact'
  | 'legal';

export type PageEntry = {
  /** Stable id, also the OG image key. */
  id: string;
  kind: PageKind;
  href: AppHref;
  /** Key under `Meta` in the message files. */
  metaKey: string;
  /** ISO date the page's content last changed (sitemap lastmod); defaults to `site.contentLastReviewed`. */
  lastModified?: string;
};

const servicePages: PageEntry[] = productKeys.map((key: ProductKey) => ({
  id: `service-${key}`,
  kind: 'service',
  href: { pathname: `/${key}` as StaticPathname },
  metaKey: `services.${key}`,
}));

const basePages: PageEntry[] = [
  { id: 'home', kind: 'home', href: { pathname: '/' }, metaKey: 'home' },
  ...servicePages,
  { id: 'aep', kind: 'aep', href: { pathname: '/annual-enrollment-period' }, metaKey: 'aep' },
  { id: 'scam', kind: 'scam', href: { pathname: '/medicare-scam-protection' }, metaKey: 'scam' },
  { id: 'about', kind: 'about', href: { pathname: '/about' }, metaKey: 'about' },
  ...agents.map((a): PageEntry => ({
    id: `agent-${a.slug}`,
    kind: 'agent',
    href: { pathname: '/about/[agent]', params: { agent: a.slug } },
    metaKey: `agents.${a.slug}`,
  })),
  { id: 'service-area', kind: 'service-area', href: { pathname: '/service-area' }, metaKey: 'serviceArea' },
  ...cityPages.map((c): PageEntry => ({
    id: `city-${c.slug}`,
    kind: 'city',
    href: { pathname: '/service-area/[city]', params: { city: c.slug } },
    metaKey: `cities.${c.slug}`,
  })),
  {
    id: 'guides',
    kind: 'guides',
    href: { pathname: '/guides' },
    metaKey: 'guidesHub',
    lastModified: guides
      .map((g) => g.modified)
      .sort()
      .at(-1),
  },
  ...guides.map((g): PageEntry => ({
    id: `guide-${g.key}`,
    kind: 'guide',
    href: { pathname: g.pathname },
    metaKey: `guides.${g.key}`,
    lastModified: g.modified,
  })),
  { id: 'faq', kind: 'faq', href: { pathname: '/faq' }, metaKey: 'faq' },
  { id: 'contact', kind: 'contact', href: { pathname: '/contact' }, metaKey: 'contact' },
  { id: 'privacy', kind: 'legal', href: { pathname: '/privacy-policy' }, metaKey: 'privacy' },
  { id: 'terms', kind: 'legal', href: { pathname: '/terms' }, metaKey: 'terms' },
  { id: 'accessibility', kind: 'legal', href: { pathname: '/accessibility' }, metaKey: 'accessibility' },
];

/**
 * Pages whose content changed after `site.contentLastReviewed` (ISO date). Feeds the sitemap
 * lastmod and the visible "Last reviewed" line, so update it whenever a page's copy changes.
 */
const contentUpdated: Record<string, string> = {
  home: '2026-10-25',
  aep: '2026-10-25',
  scam: '2026-10-25',
  contact: '2026-10-25',
  faq: '2026-10-25',
  'agent-nidia-martinez': '2026-10-25',
  'service-medicare-supplement': '2026-10-25',
  'service-special-needs-plans': '2026-10-25',
};

export const pages: PageEntry[] = basePages.map((p) => ({ ...p, lastModified: p.lastModified ?? contentUpdated[p.id] }));

export function getPage(id: string): PageEntry {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`Unknown page id: ${id}`);
  return page;
}
