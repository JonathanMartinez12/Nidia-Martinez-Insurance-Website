/**
 * Cities with their own service-area page. Each needs genuinely distinct content in
 * `src/content/cities/{en,es}.ts` (the content-QA check fails if two city pages are
 * more than 40% similar). See README → "Adding a city page".
 */
export const cityPages = [
  {
    slug: 'new-orleans',
    name: 'New Orleans',
    nameEs: 'Nueva Orleans',
    parish: 'Orleans Parish',
    parishEs: 'Parroquia de Orleans',
  },
  { slug: 'metairie', name: 'Metairie', nameEs: 'Metairie', parish: 'Jefferson Parish', parishEs: 'Parroquia Jefferson' },
  { slug: 'kenner', name: 'Kenner', nameEs: 'Kenner', parish: 'Jefferson Parish', parishEs: 'Parroquia Jefferson' },
  { slug: 'gretna', name: 'Gretna', nameEs: 'Gretna', parish: 'Jefferson Parish', parishEs: 'Parroquia Jefferson' },
  { slug: 'chalmette', name: 'Chalmette', nameEs: 'Chalmette', parish: 'St. Bernard Parish', parishEs: 'Parroquia St. Bernard' },
  { slug: 'slidell', name: 'Slidell', nameEs: 'Slidell', parish: 'St. Tammany Parish', parishEs: 'Parroquia St. Tammany' },
  { slug: 'covington', name: 'Covington', nameEs: 'Covington', parish: 'St. Tammany Parish', parishEs: 'Parroquia St. Tammany' },
  {
    slug: 'baton-rouge',
    name: 'Baton Rouge',
    nameEs: 'Baton Rouge',
    parish: 'East Baton Rouge Parish',
    parishEs: 'Parroquia East Baton Rouge',
  },
] as const;

export type CitySlug = (typeof cityPages)[number]['slug'];

export function getCity(slug: string) {
  return cityPages.find((c) => c.slug === slug);
}
