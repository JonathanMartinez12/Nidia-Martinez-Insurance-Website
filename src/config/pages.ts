/**
 * Registry of every indexable page. Drives the sitemap, OG images, Lighthouse URL
 * list and the e2e test matrix — a page missing here is a page missing everywhere.
 */
import { agents } from './site';
import { cityPages } from './cities';
import { productKeys, type ProductKey } from './products';
import type { AppPathname } from '@/i18n/routing';

export type StaticPathname = Exclude<AppPathname, '/about/[agent]' | '/service-area/[city]'>;

export type AppHref =
  | { pathname: StaticPathname; params?: undefined }
  | { pathname: '/about/[agent]'; params: { agent: string } }
  | { pathname: '/service-area/[city]'; params: { city: string } };

export type PageKind =
  'home' | 'service' | 'aep' | 'scam' | 'about' | 'agent' | 'service-area' | 'city' | 'faq' | 'contact' | 'legal';

export type PageEntry = {
  /** Stable id, also the OG image key. */
  id: string;
  kind: PageKind;
  href: AppHref;
  /** Key under `Meta` in the message files. */
  metaKey: string;
};

const servicePages: PageEntry[] = productKeys.map((key: ProductKey) => ({
  id: `service-${key}`,
  kind: 'service',
  href: { pathname: `/${key}` as StaticPathname },
  metaKey: `services.${key}`,
}));

export const pages: PageEntry[] = [
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
  { id: 'faq', kind: 'faq', href: { pathname: '/faq' }, metaKey: 'faq' },
  { id: 'contact', kind: 'contact', href: { pathname: '/contact' }, metaKey: 'contact' },
  { id: 'privacy', kind: 'legal', href: { pathname: '/privacy-policy' }, metaKey: 'privacy' },
  { id: 'terms', kind: 'legal', href: { pathname: '/terms' }, metaKey: 'terms' },
  { id: 'accessibility', kind: 'legal', href: { pathname: '/accessibility' }, metaKey: 'accessibility' },
];

export function getPage(id: string): PageEntry {
  const page = pages.find((p) => p.id === id);
  if (!page) throw new Error(`Unknown page id: ${id}`);
  return page;
}
