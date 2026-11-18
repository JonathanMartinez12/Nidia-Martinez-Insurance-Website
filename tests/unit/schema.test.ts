import { describe, expect, it } from 'vitest';
import { agents } from '@/config/site';
import {
  agencySchema,
  breadcrumbSchema,
  faqSchema,
  personSchema,
  serializeJsonLd,
  serviceSchema,
  validateJsonLd,
  websiteSchema,
} from '@/lib/schema';

const profileUrls = {
  'nidia-martinez': 'https://example.com/about/nidia-martinez',
  'john-martinez': 'https://example.com/about/john-martinez',
};

describe('JSON-LD builders', () => {
  it('InsuranceAgency is valid, has the GBP address, hours and sameAs, and omits TODO fields', () => {
    const a = agencySchema({
      locale: 'en',
      description: 'Local Medicare help',
      agentProfileUrls: profileUrls,
      jobTitle: 'Licensed Insurance Agent',
    });
    expect(validateJsonLd(a)).toEqual([]);
    expect(a).toMatchObject({ '@type': 'InsuranceAgency', knowsLanguage: ['en', 'es'], telephone: '+15043132317' });
    expect(a).toMatchObject({ address: { '@type': 'PostalAddress', addressLocality: 'Metairie', postalCode: '70005' } });
    expect(a).toMatchObject({ address: { streetAddress: '110 Veterans Blvd, Suite A' } });
    expect(a).toMatchObject({
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:30' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '10:00', closes: '16:00' },
      ],
    });
    expect(a).toMatchObject({ sameAs: ['https://www.google.com/maps/place/?q=place_id:ChIJV7bqD4evIIYRPMyFYHBSMyk'] });
    expect(a).not.toHaveProperty('aggregateRating');
    expect(a).not.toHaveProperty('review');
    expect(a).not.toHaveProperty('priceRange');
  });

  it('Person is valid for every agent', () => {
    for (const agent of agents) {
      const p = personSchema({
        agent,
        profileUrl: profileUrls[agent.slug as keyof typeof profileUrls],
        jobTitle: 'Licensed Insurance Agent',
        description: 'x',
        knowsAbout: ['Medicare'],
      });
      expect(validateJsonLd(p)).toEqual([]);
      expect(p).toMatchObject({
        '@type': 'Person',
        name: agent.name,
        knowsLanguage: ['en', 'es'],
        worksFor: { '@type': 'InsuranceAgency' },
      });
      if (!agent.headshot) expect(p).not.toHaveProperty('image');
    }
  });

  it('Service, FAQPage, BreadcrumbList and WebSite are valid', () => {
    expect(
      validateJsonLd(
        serviceSchema({
          name: 'Medicare Advantage',
          serviceType: 'x',
          description: 'y',
          url: 'https://example.com/medicare-advantage',
        }),
      ),
    ).toEqual([]);
    expect(validateJsonLd(faqSchema([{ q: 'Q?', a: 'A.' }]))).toEqual([]);
    expect(
      validateJsonLd(
        breadcrumbSchema([
          { name: 'Home', url: 'https://example.com/' },
          { name: 'FAQ', url: 'https://example.com/faq' },
        ]),
      ),
    ).toEqual([]);
    expect(validateJsonLd(websiteSchema('es', 'desc'))).toEqual([]);
  });

  it('the validator catches problems', () => {
    expect(validateJsonLd({ '@context': 'https://schema.org', '@type': 'Service', name: 'x' })).toContainEqual(
      expect.stringContaining('provider'),
    );
    expect(validateJsonLd({ '@context': 'https://schema.org', '@type': 'Person', name: 'x', url: '/relative' })).toContainEqual(
      expect.stringContaining('absolute URL'),
    );
    expect(
      validateJsonLd({ '@context': 'https://schema.org', '@type': 'Person', name: 'x', favoriteColor: 'red' }),
    ).toContainEqual(expect.stringContaining('not a known property'));
    expect(validateJsonLd({ '@context': 'https://schema.org', '@type': 'AggregateRating' }).length).toBeGreaterThan(0);
  });

  it('serialization escapes < to prevent script injection', () => {
    expect(serializeJsonLd({ a: '</script><script>alert(1)</script>' })).not.toContain('</script>');
  });
});
