/**
 * JSON-LD builders. Typed against schema.org via `schema-dts` at compile time and
 * checked at runtime by `validateJsonLd` (unit + e2e tests).
 *
 * Rules: never emit Review/AggregateRating unless real reviews exist in config; omit
 * address/hours while they are TODO; FAQ schema only mirrors FAQs visible on the page.
 */
import type { BreadcrumbList, FAQPage, InsuranceAgency, Person, Service, WebSite, WithContext } from 'schema-dts';
import { agents, getSiteUrl, site, type Agent } from '@/config/site';
import type { AppLocale } from '@/i18n/routing';
import { absoluteUrl, hreflangCode } from './urls';

export const agencyId = () => `${getSiteUrl()}/#agency`;
export const websiteId = () => `${getSiteUrl()}/#website`;
export const personId = (agent: Agent, profileUrl: string) => `${profileUrl}#person`;

const louisiana = { '@type': 'State', name: 'Louisiana' } as const;

export function agencySchema(opts: {
  locale: AppLocale;
  description: string;
  agentProfileUrls: Record<string, string>;
  jobTitle: string;
}): WithContext<InsuranceAgency> {
  const logo = absoluteUrl(site.brand.logoPng);
  const node: WithContext<InsuranceAgency> = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': agencyId(),
    name: site.name,
    url: absoluteUrl('/'),
    logo,
    image: logo,
    description: opts.description,
    telephone: site.primaryPhone.e164,
    email: site.email,
    knowsLanguage: ['en', 'es'],
    areaServed: [
      louisiana,
      ...site.serviceArea.cities.map((name) => ({
        '@type': 'City' as const,
        name: `${name}, LA`,
        containedInPlace: louisiana,
      })),
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.primaryPhone.e164,
      email: site.email,
      contactType: 'customer service',
      areaServed: 'US-LA',
      availableLanguage: ['English', 'Spanish'],
    },
    employee: agents.map((a) => {
      const url = opts.agentProfileUrls[a.slug] ?? absoluteUrl('/');
      return {
        '@type': 'Person' as const,
        '@id': personId(a, url),
        name: a.name,
        jobTitle: opts.jobTitle,
        url,
      };
    }),
  };
  if (site.address) {
    node.address = { '@type': 'PostalAddress', addressCountry: 'US', ...site.address };
  }
  if (site.hours && site.hours.length > 0) {
    node.openingHoursSpecification = site.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  if (site.sameAs.length > 0) node.sameAs = [...site.sameAs];
  return node;
}

export function personSchema(opts: {
  agent: Agent;
  profileUrl: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
}): WithContext<Person> {
  const { agent } = opts;
  const node: WithContext<Person> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId(agent, opts.profileUrl),
    name: agent.name,
    givenName: agent.givenName,
    familyName: agent.familyName,
    jobTitle: opts.jobTitle,
    description: opts.description,
    url: opts.profileUrl,
    telephone: agent.phone.e164,
    email: agent.email,
    knowsLanguage: agent.languages,
    knowsAbout: opts.knowsAbout,
    worksFor: { '@type': 'InsuranceAgency', '@id': agencyId(), name: site.name },
    workLocation: { '@type': 'Place', name: `${site.serviceArea.region}, Louisiana` },
  };
  if (agent.headshot) node.image = absoluteUrl(agent.headshot);
  return node;
}

export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}): WithContext<Service> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    provider: { '@type': 'InsuranceAgency', '@id': agencyId(), name: site.name },
    areaServed: louisiana,
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question' as const,
      name: f.q,
      acceptedAnswer: { '@type': 'Answer' as const, text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem' as const,
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function websiteSchema(locale: AppLocale, description: string): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId(),
    name: site.name,
    url: absoluteUrl('/'),
    description,
    inLanguage: [hreflangCode.en, hreflangCode.es],
    publisher: { '@type': 'InsuranceAgency', '@id': agencyId(), name: site.name },
  };
}

/** Serialise for a <script type="application/ld+json"> tag (escapes `<`). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export { validateJsonLd } from './schema-validate';
