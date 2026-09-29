/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the single source of truth for every business fact on the site.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  Anything marked `TODO` is a value the owner must supply. While a value is
 *  `null` the site hides whatever depends on it (it never renders the word
 *  "TODO" and never invents a substitute). Run `npm run check:launch` to list
 *  every open TODO; `NODE_ENV=production npm run verify` fails while a launch
 *  blocker is still open.
 *
 *  Never add reviews, ratings, license numbers, addresses, carriers, prices or
 *  statistics here unless they are real and confirmed.
 */

import type { ProductKey } from './products';

export type Locale = 'en' | 'es';

export type Phone = {
  /** Human-readable, e.g. "(504) 913-7153" */
  display: string;
  /** E.164, e.g. "+15049137153" — used for tel: links and schema */
  e164: string;
};

export type Agent = {
  slug: string;
  name: string;
  givenName: string;
  familyName: string;
  /** Years selling insurance. `null` = TODO; nothing that depends on it renders. */
  yearsExperience: number | null;
  /** Products this agent leads on. Drives the "For:" routing of contact-form leads. */
  specialties: ProductKey[];
  phone: Phone;
  /** "direct" or "cell" — shown next to the number */
  phoneLabel: 'direct' | 'cell';
  email: string;
  /** Path under /public, e.g. "/images/team/john-martinez.jpg". `null` = TODO → initials placeholder. */
  headshot: string | null;
  /** Intrinsic pixel size of the headshot file (required once `headshot` is set). */
  headshotSize: { width: number; height: number } | null;
  languages: Locale[];
  /** Louisiana producer license number. `null` = TODO (display slot hidden). */
  licenseNumber: string | null;
  /** National Producer Number. `null` = TODO (display slot hidden). */
  npn: string | null;
};

export type CarrierLine = 'medicare-advantage' | 'medicare-supplement';

export type Carrier = {
  name: string;
  /** Optional clarifying note, e.g. "insured by UnitedHealthcare" (bilingual). */
  note?: { en: string; es: string };
  /** Unconfirmed carriers are hidden everywhere until set to true. */
  confirmed: boolean;
  /** Product lines we are appointed for with this carrier. */
  lines: CarrierLine[];
  /**
   * Official logo under /public/carriers/ (sources in public/carriers/SOURCES.md). `width`/`height`
   * give the file's aspect ratio; it is displayed at a uniform height. `brand` = the name shown in
   * the logo when it differs from `name` (used for alt text).
   */
  logo: { src: string; width: number; height: number; brand?: string } | null;
  /** `true` = show the logo (the file must exist). `false` = show the carrier's name as text. */
  approved: boolean;
};

export type OpeningHours = {
  /** schema.org day names */
  days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>;
  /** 24h "HH:MM" */
  opens: string;
  closes: string;
};

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: 'LA';
  postalCode: string;
};

// ─── Agents ──────────────────────────────────────────────────────────────────

export const agents: Agent[] = [
  {
    slug: 'nidia-martinez',
    name: 'Nidia Martinez',
    givenName: 'Nidia',
    familyName: 'Martinez',
    yearsExperience: 27,
    specialties: ['medicare-advantage', 'medicare-supplement'],
    phone: { display: '(504) 913-7153', e164: '+15049137153' },
    phoneLabel: 'cell',
    email: 'nidiamartinez576@outlook.com',
    headshot: '/images/team/nidia-martinez.jpg',
    headshotSize: { width: 720, height: 900 },
    languages: ['en', 'es'],
    licenseNumber: null, // TODO
    npn: null, // TODO
  },
  {
    slug: 'john-martinez',
    name: 'John Martinez',
    givenName: 'John',
    familyName: 'Martinez',
    yearsExperience: null, // TODO: John's years of experience
    specialties: [
      'final-expense-insurance',
      'life-insurance',
      'hospital-indemnity-insurance',
      'dental-vision-insurance',
      'health-insurance',
    ],
    phone: { display: '(504) 313-2317', e164: '+15043132317' },
    phoneLabel: 'cell',
    email: 'martj5493@gmail.com',
    headshot: '/images/team/john-martinez.jpg',
    headshotSize: { width: 720, height: 900 },
    languages: ['en', 'es'],
    licenseNumber: null, // TODO
    npn: null, // TODO
  },
];

// ─── Carriers ────────────────────────────────────────────────────────────────

export const carriers: Carrier[] = [
  {
    name: 'Humana',
    confirmed: true,
    lines: ['medicare-advantage', 'medicare-supplement'],
    logo: { src: '/carriers/humana.svg', width: 470, height: 100 },
    approved: true,
  },
  {
    name: 'Peoples Health',
    confirmed: true,
    lines: ['medicare-advantage'],
    logo: { src: '/carriers/peoples-health.png', width: 360, height: 72 },
    approved: true,
  },
  {
    name: 'UnitedHealthcare',
    confirmed: true,
    lines: ['medicare-advantage'],
    logo: { src: '/carriers/unitedhealthcare.svg', width: 594, height: 186 },
    approved: true,
  },
  {
    name: 'Devoted Health',
    confirmed: true,
    lines: ['medicare-advantage'],
    logo: { src: '/carriers/devoted-health.svg', width: 216, height: 54 },
    approved: true,
  },
  {
    name: 'AARP Medicare Supplement',
    note: {
      en: 'Medicare Supplement plans, insured by UnitedHealthcare',
      es: 'Planes Medicare Suplementario, asegurados por UnitedHealthcare',
    },
    confirmed: true,
    lines: ['medicare-supplement'],
    logo: { src: '/carriers/aarp.svg', width: 120, height: 30, brand: 'AARP' },
    approved: true,
  },
  // TODO: unconfirmed — hidden until the owner sets `confirmed: true`
  {
    name: 'Blue Cross and Blue Shield of Louisiana',
    confirmed: false,
    lines: ['medicare-supplement'],
    logo: null,
    approved: false,
  },
];

// ─── Business ────────────────────────────────────────────────────────────────

export const site = {
  name: 'Martinez Insurance Solutions',
  shortName: 'Martinez Insurance',
  /** Business email used in schema and the footer. */
  email: 'martinezinsurancesolutions@outlook.com',
  /** The primary business line (header, sticky call bar, schema). John's cell. */
  primaryPhone: { display: '(504) 313-2317', e164: '+15043132317' } satisfies Phone,
  /** Street address. `null` = TODO → omitted from NAP and schema (service-area business). */
  address: {
    streetAddress: '110 Veterans Blvd., Suite 100 A',
    addressLocality: 'Metairie',
    addressRegion: 'LA',
    postalCode: '70005',
  } as PostalAddress | null,
  /** Office hours. `null` = TODO → hours hidden, `openingHoursSpecification` omitted. */
  hours: null as OpeningHours[] | null,
  /** Social / citation profile URLs used in schema `sameAs`. Empty until real profiles exist. */
  sameAs: [] as string[],
  /** Real, verifiable reviews only. Empty = no Review/AggregateRating schema, no review UI. */
  reviews: [] as Array<{ author: string; rating: number; body: string; date: string }>,
  serviceArea: {
    state: 'Louisiana',
    region: 'Greater New Orleans',
    /** Every city we name as served. City pages exist for those in `src/content/cities`. */
    cities: [
      'New Orleans',
      'Metairie',
      'Kenner',
      'Harahan',
      'River Ridge',
      'Chalmette',
      'Gretna',
      'Marrero',
      'Slidell',
      'Mandeville',
      'Covington',
      'LaPlace',
      'Baton Rouge',
    ],
  },
  compliance: {
    /**
     * TODO — LAUNCH BLOCKER.
     * "Y" in the CMS TPMO disclaimer: the number of plans/products the organizations
     * we represent offer in the service area. Must be set before launch.
     */
    plansOffered: null as number | null,
  },
  /** Date the educational content was last reviewed for accuracy (ISO). */
  contentLastReviewed: '2026-09-27',
  brand: {
    navy: '#233E84',
    red: '#C8202F',
    /** Official seal (source: assets/reference/martinez-insurance-agency-logo-pack.zip). The wordmark
     *  next to it is live text so it always matches `name`. */
    seal: '/brand/seal.png',
    sealWhite: '/brand/seal-white.png',
  },
} as const;

// ─── Derived helpers ─────────────────────────────────────────────────────────

export const primaryAgent: Agent = agents[0]!;

export function getAgent(slug: string): Agent | undefined {
  return agents.find((a) => a.slug === slug);
}

/** Confirmed carriers, optionally only those for one product line. */
export function confirmedCarriers(line?: CarrierLine): Carrier[] {
  return carriers.filter((c) => c.confirmed && (!line || c.lines.includes(line)));
}

/**
 * Canonical origin of the site (no trailing slash).
 * Priority: NEXT_PUBLIC_SITE_URL → Vercel production URL → localhost.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, '')}`;
  return 'http://localhost:3000';
}
