export default function LocalBusinessSchema({ lang = 'en' }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'Nidia Martinez Insurance LLC',
    image: 'https://www.nidiamartinezinsurance.com/logo.png',
    '@id': 'https://www.nidiamartinezinsurance.com',
    url: 'https://www.nidiamartinezinsurance.com',
    telephone: '+15049137153',
    email: 'nidiamartinez576@outlook.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '110 Veterans Blvd Suite 100-A',
      addressLocality: 'Metairie',
      addressRegion: 'LA',
      postalCode: '70005',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.9946,
      longitude: -90.1553,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Louisiana',
      },
      {
        '@type': 'State',
        name: 'Florida',
      },
      {
        '@type': 'State',
        name: 'Mississippi',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
    },
    knowsLanguage: ['en', 'es'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
