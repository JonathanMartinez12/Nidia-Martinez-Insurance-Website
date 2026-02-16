export default function sitemap() {
  const baseUrl = 'https://www.nidiamartinezinsurance.com';

  // English pages
  const englishPages = [
    '',
    '/about',
    '/services',
    '/services/medicare-advantage',
    '/services/medicare-supplements',
    '/services/dental-insurance',
    '/services/vision-insurance',
    '/carriers',
    '/contact',
    '/blog',
    '/blog/medicare-advantage-vs-medicare-supplements',
    '/blog/medicare-open-enrollment-2025',
    '/blog/bilingual-insurance-agents-matter',
  ];

  // Spanish pages
  const spanishPages = [
    '/es',
    '/es/about',
    '/es/services',
    '/es/services/medicare-advantage',
    '/es/services/medicare-supplements',
    '/es/services/dental-insurance',
    '/es/services/vision-insurance',
    '/es/carriers',
    '/es/contact',
    '/es/blog',
    '/es/blog/medicare-advantage-vs-medicare-supplements',
    '/es/blog/medicare-open-enrollment-2025',
    '/es/blog/bilingual-insurance-agents-matter',
  ];

  const allPages = [...englishPages, ...spanishPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' || page === '/es' ? 1.0 : 0.8,
  }));
}
