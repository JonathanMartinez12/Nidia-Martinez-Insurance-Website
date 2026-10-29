import { getPage, type PageKind } from '@/config/pages';
import { SERVICE_PARAM, type PageType } from './analytics';

const KIND_TO_TYPE: Record<PageKind, PageType> = {
  home: 'home',
  service: 'service',
  aep: 'aep',
  scam: 'scam',
  about: 'about',
  agent: 'agent',
  'service-area': 'service_area',
  city: 'city',
  guides: 'guides_hub',
  guide: 'guide',
  faq: 'faq',
  contact: 'contact',
  legal: 'legal',
};

/** GA4 page context for a registered page id; no id means the 404 page. */
export function analyticsPageInfo(pageId?: string): { page_type: PageType; service?: string; city?: string } {
  if (!pageId) return { page_type: 'not_found' };
  const page = getPage(pageId);
  const info: { page_type: PageType; service?: string; city?: string } = { page_type: KIND_TO_TYPE[page.kind] };
  if (page.kind === 'service') info.service = SERVICE_PARAM[pageId.replace(/^service-/, '')];
  if (page.kind === 'city') info.city = pageId.replace(/^city-/, '').replace(/-/g, '_');
  return info;
}
