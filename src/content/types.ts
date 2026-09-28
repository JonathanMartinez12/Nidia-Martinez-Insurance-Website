/**
 * Long-form content model. Every content module exists once per locale and is typed
 * with these shapes, so English and Spanish can never drift structurally (tsc + the
 * unit tests enforce it).
 *
 * Inline formatting inside strings: **bold** and [link text](target), where target is
 * an absolute https:// URL, `tel:` / `mailto:`, or `page:<page id>` (a page from
 * `src/config/pages.ts`, resolved to the right localized URL).
 */
import type { ProductKey } from '@/config/products';
import type { CitySlug } from '@/config/cities';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'callout'; tone: 'info' | 'warning'; title: string; text: string };

export type Section = { id: string; heading: string; blocks: Block[] };

export type Faq = { q: string; a: string };

export type ServiceContent = {
  h1: string;
  lede: string;
  /** One or two sentences; used for the Service schema description. */
  summary: string;
  whoFor: string[];
  covers: string[];
  sections: Section[];
  faqs: Faq[];
};

export type CityContent = {
  h1: string;
  lede: string;
  sections: Section[];
  nearby: string[];
  /** Products to feature for this city (order matters). */
  featured: ProductKey[];
};

export type GuideContent = {
  h1: string;
  lede: string;
  sections: Section[];
  faqs: Faq[];
};

export type AgentContent = {
  headline: string;
  bio: string[];
  focus: string[];
  sections: Section[];
};

export type AboutContent = {
  h1: string;
  lede: string;
  sections: Section[];
};

export type FaqGroup = { id: string; heading: string; faqs: Faq[] };

export type FaqPageContent = {
  h1: string;
  lede: string;
  groups: FaqGroup[];
};

export type LegalContent = {
  h1: string;
  updated: string;
  sections: Section[];
};

export type AreaHubContent = {
  h1: string;
  lede: string;
  sections: Section[];
};

export type HomeContent = {
  faqs: Faq[];
};

export type ContactPageContent = {
  h1: string;
  lede: string;
  sections: Section[];
};

export type SiteContent = {
  services: Record<ProductKey, ServiceContent>;
  cities: Record<CitySlug, CityContent>;
  aep: GuideContent;
  scam: GuideContent;
  about: AboutContent;
  agents: Record<string, AgentContent>;
  serviceArea: AreaHubContent;
  faq: FaqPageContent;
  home: HomeContent;
  contact: ContactPageContent;
  privacy: LegalContent;
  terms: LegalContent;
  accessibility: LegalContent;
};
