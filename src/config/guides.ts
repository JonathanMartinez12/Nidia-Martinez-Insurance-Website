/**
 * Long-form guides under /guides (ES /guias). Each guide is a static route (its folder
 * lives in `src/app/[locale]/guides/<slug>`), a pathname in `src/i18n/routing.ts` and an
 * entry here. Dates are ISO (YYYY-MM-DD) and feed Article schema, the visible byline and
 * the sitemap's lastmod — bump `modified` whenever a guide's content changes.
 */
export const guides = [
  {
    key: 'medicare-office',
    pathname: '/guides/medicare-office-near-me-new-orleans',
    published: '2026-10-25',
    modified: '2026-10-25',
  },
  {
    key: 'diabetes-heart-snp',
    pathname: '/guides/diabetes-heart-special-needs-plans',
    published: '2026-10-25',
    modified: '2026-10-25',
  },
  {
    key: 'turning-65',
    pathname: '/guides/turning-65-medicare-louisiana',
    published: '2026-10-25',
    modified: '2026-10-25',
  },
] as const;

export type GuideKey = (typeof guides)[number]['key'];
export type GuideEntry = (typeof guides)[number];

export function getGuide(key: GuideKey): GuideEntry {
  const guide = guides.find((g) => g.key === key);
  if (!guide) throw new Error(`Unknown guide: ${key}`);
  return guide;
}

/** Article dates for the older guide-style pages (first published with the site rebuild). */
export const legacyGuideDates = {
  aep: { published: '2026-09-28', modified: '2026-09-28' },
  scam: { published: '2026-09-28', modified: '2026-09-28' },
} as const;
