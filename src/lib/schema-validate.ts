/**
 * Runtime JSON-LD validation (dependency-free so Playwright can import it too).
 */

/**
 * Allowed properties per schema.org type we emit (subset of schema.org — every entry
 * here is a real property of that type or one of its parents).
 */
const ALLOWED: Record<string, { required: string[]; allowed: string[] }> = {
  InsuranceAgency: {
    required: ['name', 'url', 'telephone'],
    allowed: [
      'name',
      'url',
      'logo',
      'image',
      'description',
      'telephone',
      'email',
      'knowsLanguage',
      'areaServed',
      'contactPoint',
      'employee',
      'address',
      'openingHoursSpecification',
      'sameAs',
      'priceRange',
      'founder',
      'alternateName',
    ],
  },
  Person: {
    required: ['name'],
    allowed: [
      'name',
      'givenName',
      'familyName',
      'jobTitle',
      'description',
      'url',
      'telephone',
      'email',
      'knowsLanguage',
      'knowsAbout',
      'worksFor',
      'workLocation',
      'image',
      'sameAs',
      'hasCredential',
    ],
  },
  Service: {
    required: ['name', 'provider'],
    allowed: ['name', 'serviceType', 'description', 'url', 'provider', 'areaServed', 'audience'],
  },
  FAQPage: { required: ['mainEntity'], allowed: ['mainEntity', 'name', 'url', 'inLanguage'] },
  Question: { required: ['name', 'acceptedAnswer'], allowed: ['name', 'acceptedAnswer', 'text'] },
  Answer: { required: ['text'], allowed: ['text'] },
  BreadcrumbList: { required: ['itemListElement'], allowed: ['itemListElement'] },
  ListItem: { required: ['position', 'name'], allowed: ['position', 'name', 'item'] },
  WebSite: {
    required: ['name', 'url'],
    allowed: ['name', 'url', 'description', 'inLanguage', 'publisher', 'alternateName'],
  },
  State: { required: ['name'], allowed: ['name', 'containedInPlace'] },
  City: { required: ['name'], allowed: ['name', 'containedInPlace'] },
  Place: { required: ['name'], allowed: ['name', 'address'] },
  ContactPoint: {
    required: ['telephone', 'contactType'],
    allowed: ['telephone', 'email', 'contactType', 'areaServed', 'availableLanguage', 'hoursAvailable'],
  },
  OpeningHoursSpecification: { required: ['dayOfWeek', 'opens', 'closes'], allowed: ['dayOfWeek', 'opens', 'closes'] },
  PostalAddress: {
    required: ['addressLocality', 'addressRegion'],
    allowed: ['streetAddress', 'addressLocality', 'addressRegion', 'postalCode', 'addressCountry'],
  },
};

const URL_PROPS = new Set(['url', 'item', 'logo', 'image', '@id', 'sameAs']);

export function validateJsonLd(data: unknown): string[] {
  const errors: string[] = [];
  if (!data || typeof data !== 'object') return ['JSON-LD root is not an object'];
  const root = data as Record<string, unknown>;
  if (root['@context'] !== 'https://schema.org') errors.push('@context must be "https://schema.org"');
  if (root['@type'] === 'Review' || root['@type'] === 'AggregateRating') {
    errors.push('Review/AggregateRating is not allowed without real reviews in config');
  }

  const visit = (node: unknown, path: string) => {
    if (Array.isArray(node)) {
      node.forEach((n, i) => visit(n, `${path}[${i}]`));
      return;
    }
    if (!node || typeof node !== 'object') return;
    const obj = node as Record<string, unknown>;
    const type = obj['@type'];
    if (typeof type === 'string') {
      const rule = ALLOWED[type];
      if (!rule) {
        errors.push(`${path}: unexpected @type "${type}"`);
      } else {
        // Nodes that are only a reference ({ @type, @id, name }) don't need required props.
        const isRef = typeof obj['@id'] === 'string' && Object.keys(obj).length <= 4 && type !== 'Question';
        if (!isRef) {
          for (const req of rule.required) {
            if (obj[req] === undefined || obj[req] === '' || (Array.isArray(obj[req]) && (obj[req] as unknown[]).length === 0)) {
              errors.push(`${path} (${type}): missing required "${req}"`);
            }
          }
        }
        for (const key of Object.keys(obj)) {
          if (key.startsWith('@')) continue;
          if (!rule.allowed.includes(key)) errors.push(`${path} (${type}): "${key}" is not a known property`);
        }
      }
    } else if (path !== '$' || !('@graph' in obj)) {
      errors.push(`${path}: node without @type`);
    }
    for (const [key, value] of Object.entries(obj)) {
      if (key === '@context' || key === '@type') continue;
      if (URL_PROPS.has(key)) {
        const values = Array.isArray(value) ? value : [value];
        for (const v of values) {
          if (typeof v === 'string' && !/^https?:\/\/[^\s]+$/.test(v)) {
            errors.push(`${path}.${key}: "${v}" is not an absolute URL`);
          }
        }
      }
      if (typeof value === 'string' && /\bTODO\b/.test(value)) errors.push(`${path}.${key}: contains TODO`);
      if (value && typeof value === 'object') visit(value, `${path}.${key}`);
    }
  };
  visit(root, '$');
  return errors;
}
