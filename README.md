# Martinez Insurance Solutions — website

Bilingual (English / Spanish) local-SEO website for **Martinez Insurance Solutions**, a
husband-and-wife Medicare and insurance agency (Nidia & John Martinez) serving Greater
New Orleans and all of Louisiana. The goal of every page: phone calls and form leads
from Google Search and Maps.

- **Stack:** Next.js 16 (App Router, static generation) · React 19 · TypeScript (strict) ·
  Tailwind CSS v4 · next-intl (locale-prefixed, translated slugs) · Server Actions + zod ·
  Resend · Playwright + axe · Vitest · Lighthouse CI
- **Zero i18n JS in the browser:** translations and localized links resolve on the server;
  client JS is limited to the contact form, menus and the text-size toggle.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000  (Spanish at /es)
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes (prod) | Canonical origin, e.g. `https://www.example.com` (falls back to Vercel's production URL) |
| `RESEND_API_KEY` | yes (prod) | Resend API key for lead emails |
| `CONTACT_TO_EMAILS` | yes | Comma-separated list — **every** lead goes to all of them |
| `CONTACT_FROM_EMAIL` | yes (prod) | Sender on a Resend-verified domain |
| `NEXT_PUBLIC_GA_ID` | no | GA4 ID. If unset, no analytics loads |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | no | Cloudflare Turnstile on the form (both required to enable) |
| `FORM_MIN_SUBMIT_MS`, `FORM_RATE_LIMIT` | no | Spam-check tuning (defaults 3000 ms, 5 per 10 min per IP) |

If email sending fails (or isn't configured), the form shows the phone number and the
error is logged server-side — a lead is never silently lost.

## Where things live

```
src/config/site.ts        ← ALL business facts: agents, phones, emails, carriers, hours,
                            address, TPMO "Y" count, review list. TODOs live here.
src/config/products.ts    ← the 9 products, related-product links, schema serviceType
src/config/cities.ts      ← cities that have their own page
src/config/pages.ts       ← registry of every page (drives sitemap, OG images, tests, Lighthouse)
src/i18n/routing.ts       ← locales + translated URL slugs
messages/en.json, es.json ← UI strings + every page's <title>/<meta description>
src/content/{en,es}/      ← long-form page content (services, cities, guides, FAQ, legal)
src/app/[locale]/…        ← routes (folder names = English slugs)
src/app/og/…              ← branded Open Graph images per page per locale (built statically)
src/app/actions/contact.ts← contact form Server Action (validation, spam checks, Resend)
tests/unit, tests/e2e     ← Vitest and Playwright suites
scripts/verify.ts         ← the full quality gate
```

### Editing business facts
Edit `src/config/site.ts`. Anything `null` is a TODO and is **hidden** until set (nothing
ever renders "TODO"). Examples:

- **John's years of experience:** set `yearsExperience` on John → his badge appears and the
  "Over X years of combined experience" line turns on automatically.
- **Headshots:** live in `public/images/team/` (720×900 JPG, 4:5). To replace one, export a new
  4:5 JPG there and update `headshot` + `headshotSize` (`{ width, height }` in pixels). Without a
  headshot the site falls back to an initials monogram. next/image serves AVIF/WebP automatically.
- **Reference material** (business cards, the client letter, original photos) is in
  `assets/reference/` — kept out of `public/` so it is never published.
- **Address / hours:** fill `site.address` / `site.hours` → they appear in the footer,
  contact page and `InsuranceAgency` schema.
- **Carriers:** edit `carriers` (name, product `lines`, `logo`, `approved`). `confirmed: false`
  hides a carrier everywhere. Logos live in `public/carriers/` with their source URLs in
  `public/carriers/SOURCES.md`; a logo shows only while `approved: true`, otherwise the name shows as
  text. The "Carriers we work with" strip (home, Medicare Advantage/Supplement, AEP, About, service
  area and city pages) updates automatically. Note: the Medicare Advantage meta description in
  `messages/*.json` also names the carriers — update it if the list changes.
- **TPMO disclaimer "Y":** set `site.compliance.plansOffered`. "X" is computed from confirmed
  Medicare Advantage carriers. Until Y is set, the disclaimer uses CMS's earlier wording and
  `npm run check:launch` reports it as a **launch blocker**.
- **Reviews:** only add real reviews to `site.reviews`. The site never emits Review/Rating
  schema otherwise.

Run `npm run check:launch` any time to list open TODOs.

### Editing text and translations
- Short UI strings, page titles and meta descriptions: `messages/en.json` and
  `messages/es.json`. **Both files must have exactly the same keys** (a unit test enforces this,
  plus title ≤ 60 / description ≤ 155 characters and site-wide uniqueness).
- Long-form content: `src/content/en/*.ts` and `src/content/es/*.ts`. Both are typed with
  `src/content/types.ts`; the structure (sections, lists, FAQs) must match between languages.
  Inline formatting: `**bold**` and `[link text](page:<page-id>)` (e.g. `page:aep`,
  `page:service-medicare-advantage`) — internal links resolve to the right language automatically.
- Write Spanish natively (usted register), not word-for-word.
- Product pages show "Last reviewed" from `site.contentLastReviewed` — update it after a review.

### Adding a city page
1. Add the city to `cityPages` in `src/config/cities.ts` (`slug`, names, parish EN/ES).
2. Add `Meta.cities.<slug>` title/description to **both** message files.
3. Add content under `cities.<slug>` in `src/content/en/cities.ts` **and** `src/content/es/cities.ts`.
   Write genuinely local content (parish, nearby hospitals/areas, how to meet). The content QA
   fails if any two city pages are more than 40% similar.
4. Run `npm run verify`. Sitemap, OG image, hreflang, footer links and tests pick it up automatically.

## Quality gate: `npm run verify`

Runs, in order, and fails on the first category that doesn't pass:

1. Launch-blocker check (`NODE_ENV=production npm run verify` fails while a blocker is open)
2. `tsc --noEmit`, ESLint with zero warnings
3. Vitest: utilities, translation-key completeness, meta lengths/uniqueness, content parity,
   service-page word counts (600–1,200), city similarity, schema builders, form logic
4. `next build` (fails on any warning)
5. Playwright against the production build:
   SEO (status, one H1, title/description, canonical, hreflang reciprocity, `lang`, OG/Twitter +
   OG image fetch, image alt/dimensions, JSON-LD validity + expected types + FAQ/visible match),
   sitemap ↔ pages parity, robots, full internal-link crawl, axe-core (mobile + desktop, WCAG 2.2
   AA + best practices, zero violations), keyboard navigation, contact form e2e (mock email),
   language toggle on every page, content QA (≥ 400 words, no visible TODO, no untranslated
   English on `/es`), 404s
6. Lighthouse CI on every route in both locales (mobile): Performance ≥ 95, Accessibility,
   Best Practices and SEO = 100. Scores are written to `lighthouse-scores.md`.

Other scripts: `npm run test:unit`, `npm run test:e2e` (needs a build), `npm run lhci`,
`npm run screenshots` (mobile + desktop, both locales → `screenshots/`).

### Structured data
Every page carries `InsuranceAgency`; plus `WebSite` (home), `Service` (product pages),
`Person` (About + agent profiles), `FAQPage` (pages with visible FAQs) and `BreadcrumbList`
(inner pages). Types are checked at compile time with `schema-dts` and at runtime by
`src/lib/schema-validate.ts` in unit and e2e tests. To double-check with Google after deploy:
paste a URL into the [Rich Results Test](https://search.google.com/test/rich-results) and the
[Schema Markup Validator](https://validator.schema.org/).

## Deploying to Vercel
1. Import the GitHub repo in Vercel (framework: Next.js; defaults are fine).
2. Add the environment variables above for **Production** (and Preview if you want the form
   to work there).
3. Deploy, then add the custom domain and set `NEXT_PUBLIC_SITE_URL` to it; redeploy.
4. Work through [`LAUNCH_CHECKLIST.md`](./LAUNCH_CHECKLIST.md).

Rate limiting is in-memory per server instance — fine for a small site; swap in a shared
store (e.g. Upstash Redis) if spam ever becomes a problem.

## Compliance notes
- The CMS TPMO disclaimer and the "not connected with the U.S. government or the federal
  Medicare program" statement are in the footer on every page and on the contact page.
- The form never asks for Medicare number, SSN, date of birth or health details; the TCPA
  consent box is unchecked by default and the exact consent wording is stored with the lead.
- No government logos, no carrier logos without approval, no "free gifts", no fake urgency.
