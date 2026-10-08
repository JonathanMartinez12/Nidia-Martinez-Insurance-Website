# SEO Audit — martinezinsurancesolutions.com

- **Audited:** 2026-10-08. Production at `https://www.martinezinsurancesolutions.com`; repo `main` @ `b0a1497`.
- **Production is on the latest commit.** The home-page office section added in `b0a1497` is live, so production serves the same code as the repo.
- **No code was changed for this audit.**

**Method**

| Source | Covers |
|---|---|
| `curl` against production | Status, redirects, headers |
| All 58 sitemap URLs fetched from the **www** host | All returned `200` |
| Local production build of `b0a1497` (`next build` + `next start`, port 3100) | Build route table and DOM-based measurements (word counts, links) |
| Lighthouse | Locally, because headless Chromium in this environment rejects the egress proxy's TLS certificate. `curl` honours the proxy CA; Chromium does not, and TLS checks were not disabled. |

---

## 1. Site URL & canonicals

### 1.1 Where the base URL is defined

Single source: `getSiteUrl()`. Everything else derives from it.

| File:line | What |
|---|---|
| `src/config/site.ts:260-265` | `getSiteUrl()`: `NEXT_PUBLIC_SITE_URL` (trailing `/` stripped) → else `https://${VERCEL_PROJECT_PRODUCTION_URL}` → else `http://localhost:3000` |
| `src/app/[locale]/layout.tsx:51` | `metadataBase: new URL(getSiteUrl())` |
| `src/lib/urls.ts:25-28` | `absoluteUrl(path)`: `getSiteUrl()` + path; root returns the bare origin (no trailing slash) |
| `src/lib/urls.ts:30-40` | `localizedUrl()` and `languageAlternates()` (hreflang en-US / es-US / x-default) |
| `src/lib/seo.ts:19, 33, 38` | OG image URL `absoluteUrl('/og/{locale}/{pageId}')`; `alternates.canonical`; `openGraph.url` |
| `src/app/sitemap.ts:8-20` | `<loc>` and `xhtml:link` alternates via `localizedUrl` / `languageAlternates` |
| `src/app/robots.ts:8-9` | `Sitemap:` via `absoluteUrl('/sitemap.xml')`; `Host:` via `getSiteUrl()` |
| `src/lib/schema.ts:13-14, 25, 31, 55, 105, 158` | JSON-LD `@id` (`/#agency`, `/#website`), `url`, `logo`, `image`, Person URLs |
| `src/components/layout/Breadcrumbs.tsx:44` | BreadcrumbList `item` URLs |
| `src/lib/contact/email.ts:27` | Email header logo `absoluteUrl(site.brand.sealWhite)` |
| `src/lib/launch.ts:15-16` | Launch check warns only if **both** env vars are unset |
| `scripts/verify.ts:24`, `playwright.config.ts:8` | Tests set `NEXT_PUBLIC_SITE_URL=http://localhost:3100` |

**Env files:**
- Only `.env.example` is in the repo. It has `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`.
- `.env`, `.env*.local` and `.env.local` are gitignored (`.gitignore:27-29`) and not present.
- `next.config.ts` has `trailingSlash: false` and no redirects or rewrites.

**What production actually uses:** it resolves to **`https://martinezinsurancesolutions.com`** (apex, no www). Evidence: canonical, hreflang, `og:url`, `og:image`, sitemap, robots and all 670 JSON-LD URL values on the 58 pages use that host (§1.2, §4, §6).

**Which env var produced it can't be determined from outside.** `getSiteUrl()` is server-only and nothing is inlined into the 10 client chunks checked. Two possibilities:
- **(a)** `NEXT_PUBLIC_SITE_URL` is set to the apex in Vercel. Earlier in this project it was set to `https://martinezinsurancesolutions.com`.
- **(b)** It is unset, so the fallback `VERCEL_PROJECT_PRODUCTION_URL` is used. Per Vercel's documentation (not verified here), that variable holds the project's *shortest* production custom domain, which is the apex.

The fix is the same either way (§16 C1).

### 1.2 Canonical / og:url mismatch — root cause confirmed

Live `/` head (raw):
```html
<link rel="canonical" href="https://martinezinsurancesolutions.com"/>
<link rel="alternate" hrefLang="en-US" href="https://martinezinsurancesolutions.com"/>
<link rel="alternate" hrefLang="es-US" href="https://martinezinsurancesolutions.com/es"/>
<link rel="alternate" hrefLang="x-default" href="https://martinezinsurancesolutions.com"/>
<meta property="og:url" content="https://martinezinsurancesolutions.com"/>
<meta property="og:image" content="https://martinezinsurancesolutions.com/og/en/home"/>
```
Meanwhile Vercel redirects `https://martinezinsurancesolutions.com/` → `308` → `https://www.martinezinsurancesolutions.com/`.

**Root cause:** `getSiteUrl()` resolves to the apex at **build time**, and every page is prerendered (`x-nextjs-prerender: 1`, `x-vercel-cache: HIT`, `age: 75933` on `/` ≈ 21 h). The value is baked into the static HTML. Every canonical, hreflang, sitemap URL, `og:url`, OG image and JSON-LD `@id` therefore points at a URL that 308-redirects to www.

**Fixing it needs an env var change *and* a redeploy.** Changing the variable alone does nothing to already-built pages.

### 1.3 Redirect chains (`curl`, production)

```
http://martinezinsurancesolutions.com                → 308 https://martinezinsurancesolutions.com/ → 308 https://www.martinezinsurancesolutions.com/ → 200   (2 hops)
https://martinezinsurancesolutions.com               → 308 https://www.martinezinsurancesolutions.com/ → 200
http://www.martinezinsurancesolutions.com            → 308 https://www.martinezinsurancesolutions.com/ → 200
https://www.martinezinsurancesolutions.com/          → 200
https://www…/medicare-advantage/                     → 308 https://www…/medicare-advantage → 200
https://www…/es/                                     → 308 https://www…/es → 200
https://www…/ES                                      → 307 https://www…/es → 200        (307 = temporary)
https://www…/index                                   → 404
https://www…/en                                      → 307 https://www…/ → 200          (307)
https://www…/en/medicare-advantage                   → 307 https://www…/medicare-advantage → 200 (307)
https://martinezinsurancesolutions.com/medicare-advantage → 308 https://www…/medicare-advantage → 200
https://www…/?utm_source=x                           → 200 (canonical → apex root)
https://www…/Medicare-Advantage                      → 200 (!) canonical → https://martinezinsurancesolutions.com/medicare-advantage
https://www…/MEDICARE-ADVANTAGE                      → 200 (!) same canonical
https://www…/service-area/Kenner                     → 404 (case-sensitive here)
```

**Notes:**
- **Hosting and trailing slashes:**
  - Host and HTTPS redirects are Vercel-level 308s.
  - `http://apex` takes 2 hops.
  - Trailing-slash removal is a 1-hop 308.
- **307s from the locale proxy:** `/en`, `/en/*`, uppercase locale (`/ES`), English slugs under `/es`, and Spanish slugs without `/es` are all **307 (temporary)**. They come from next-intl's middleware (`src/proxy.ts`).
- **Mixed-case top-level slugs return 200.** `/Medicare-Advantage` is served instead of redirecting. The canonical is correct (lowercase), but it's still a duplicate URL serving 200. Nested dynamic slugs (`/service-area/Kenner`) correctly 404.

## 2. Rendered head tags (production, raw)

| Page | `<html lang>` | canonical | hreflang en-US / es-US / x-default | og:url | robots meta |
|---|---|---|---|---|---|
| `/` | `en-US` | `https://martinezinsurancesolutions.com` | `…com` / `…com/es` / `…com` | `https://martinezinsurancesolutions.com` | none (= index, follow) |
| `/es` | `es-US` | `…com/es` | `…com` / `…com/es` / `…com` | `…com/es` | none |
| `/medicare-advantage` | `en-US` | `…com/medicare-advantage` | `…/medicare-advantage` / `…/es/medicare-advantage` / `…/medicare-advantage` | `…com/medicare-advantage` | none |
| `/es/seguro-suplementario-medicare` | `es-US` | `…com/es/seguro-suplementario-medicare` | `…/medicare-supplement` / `…/es/seguro-suplementario-medicare` / `…/medicare-supplement` | `…com/es/seguro-suplementario-medicare` | none |
| `/service-area/kenner` | `en-US` | `…com/service-area/kenner` | `…/service-area/kenner` / `…/es/area-de-servicio/kenner` / `…/service-area/kenner` | `…com/service-area/kenner` | none |
| `/about/nidia-martinez` | `en-US` | `…com/about/nidia-martinez` | `…/about/nidia-martinez` / `…/es/sobre-nosotros/nidia-martinez` / `…/about/nidia-martinez` | `…com/about/nidia-martinez` | none |

- **Host:** `…com` = `https://martinezinsurancesolutions.com` (apex) in **every** value.
- **Correct apart from the host:**
  - hreflang is reciprocal between EN and ES.
  - x-default points to EN.
  - `lang` matches the locale.
  - `og:locale` and `og:locale:alternate` are set (`en_US` / `es_US`).
  - Query strings and case variants canonicalize to the clean lowercase URL.

## 3. Locale middleware

- **Config:** `src/i18n/routing.ts:14-19`:
  - `localePrefix: 'as-needed'`
  - **`localeDetection: false`**
  - **`localeCookie: false`**
  - `alternateLinks: false`
- **Middleware:** `src/proxy.ts`. next-intl `createMiddleware(routing)`; the matcher excludes `api|og|_next|_vercel|files with an extension`.
- **No redirects by language, cookie, bot or geo:**

```
curl -sI https://www.martinezinsurancesolutions.com/ -H "Accept-Language: es"
HTTP/2 200   x-matched-path: /en   (no Location, no Set-Cookie)
… -A "Googlebot/2.1"                 → HTTP/2 200
… -H "Cookie: NEXT_LOCALE=es"        → HTTP/2 200
```

Googlebot is never redirected away from a URL. The only middleware redirects are path normalisations: wrong-locale slugs and `/en` prefixes (§1.3, all 307).

## 4. Sitemap & robots

**robots.txt** (live, raw):
```
User-Agent: *
Allow: /
Disallow: /api/

Host: https://martinezinsurancesolutions.com
Sitemap: https://martinezinsurancesolutions.com/sitemap.xml
```
- `Sitemap:` points to the apex, which 308-redirects. Google follows it, but it should be www.
- `Host:` is a non-standard (Yandex-only) directive, also on the apex.
- `Disallow: /api/` refers to a route that doesn't exist (no `/api` in the app; `/api` returns 404).

**sitemap.xml** (live) — 58 `<url>` entries, which is 29 pages × 2 locales:

| Property | Value |
|---|---|
| `<loc>` hosts | `https://martinezinsurancesolutions.com` ×58. **0 use www.** |
| `xhtml:link` alternates | Present in **58/58** entries: en-US ×58, es-US ×58, x-default ×58. All 174 hrefs are apex. |
| `<lastmod>` | `2026-09-27T00:00:00.000Z` on **all 58** |
| `<changefreq>` | monthly ×54, weekly ×4 |
| `<priority>` | 1 ×2, 0.9 ×18, 0.7 ×32, 0.3 ×6 |

**Where lastmod comes from:** hardcoded. `src/app/sitemap.ts:9`:
```ts
const lastModified = new Date(`${site.contentLastReviewed}T00:00:00Z`);
```
`site.contentLastReviewed = '2026-09-27'` is at `src/config/site.ts:232`. One manual date applies to every URL. It's not tied to content or git changes, so pages edited since (office photos, years, phone) still say 09-27. Google ignores `changefreq` and `priority`.

## 5. Indexable URL inventory

From `next build` (local, `b0a1497`): **every page is SSG (●)**.

| Route | Type | In sitemap? | Indexable? | Notes |
|---|---|---|---|---|
| 29 page routes × `en`/`es` (`/[locale]/…`, 13 dirs + `about/[agent]` ×2 + `service-area/[city]` ×8) | SSG | yes (58) | yes | intended |
| `/[locale]/[...rest]` | **Dynamic (ƒ)** | no | no | catch-all → `notFound()` → 404 + `noindex` |
| `/og/[locale]/[page]` (58 PNGs) | SSG | no | **yes** (200 `image/png`, no `X-Robots-Tag`) | can appear in Google Images; harmless but could be `noindex` |
| `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/favicon.ico`, `/icon.png`, `/apple-icon.png` | static | no | n/a | fine |
| `/_next/image?url=…&w=…` | on-demand | no | image | fine |
| `/api`, `/api/*` | — | — | — | **no API routes exist** (404). The contact form is a Server Action posted to the page URL. |
| `/_not-found` | — | — | — | 404 + noindex |

Duplicate and variant URLs that answer:

| URL pattern | Response | Risk |
|---|---|---|
| `https://martinezinsurancesolutions.com/*` (apex) | 308 → www | none (but all canonicals point here — §1) |
| `/path/` trailing slash | 308 → no slash | none |
| `/en`, `/en/*` | 307 → unprefixed | low (temporary redirect) |
| `/ES` | 307 → `/es` | low |
| `/es/<english-slug>` e.g. `/es/about` | 307 → `/es/sobre-nosotros` | low |
| `/<spanish-slug>` e.g. `/sobre-nosotros` | 307 → `/about` | low |
| `/Medicare-Advantage`, `/MEDICARE-ADVANTAGE` (top-level static slugs, any case) | **200** | low (canonical correct) |
| `?utm_*`, any query string | 200 | none (canonical strips the query) |

Nothing indexable that shouldn't be, apart from the OG PNGs, which are optional to block.

## 6. Structured data

Types per page (live, all 58 crawled):

| Page group | JSON-LD types |
|---|---|
| `/`, `/es` | InsuranceAgency, WebSite, FAQPage |
| 18 service pages (9 × 2) | InsuranceAgency, Service, FAQPage, BreadcrumbList |
| AEP, scam guide (×2) | InsuranceAgency, FAQPage, BreadcrumbList |
| `/faq`, `/es/preguntas-frecuentes` | InsuranceAgency, FAQPage (22 Q), BreadcrumbList |
| `/about`, `/es/sobre-nosotros` | InsuranceAgency, Person ×2, BreadcrumbList |
| 4 agent pages | InsuranceAgency, Person, BreadcrumbList |
| 16 city pages + 2 hubs, contact ×2, legal ×6 | InsuranceAgency, BreadcrumbList |

**Checks:**
- **`@id` / URL hosts:**
  - **All 670 URL values** (`@id`, `url`, `item`, `image`, `logo`) across the site use `https://martinezinsurancesolutions.com` (apex).
  - **0 use www.** Root cause §1.
- **InsuranceAgency present:**
  - `name`, `url`, `@id`, `logo`, `image` (both `/brand/seal.png`)
  - `telephone: "+15043132317"`, `email: martinezinsurancesolutions@outlook.com`
  - `address` (PostalAddress: 110 Veterans Blvd., Suite 100 A, Metairie, LA 70005, US)
  - `areaServed` (State Louisiana + 13 cities), `knowsLanguage ["en","es"]`
  - `contactPoint`, `employee` (both Person refs), `description`
- **InsuranceAgency missing:**
  - **`geo`** — not implemented in `src/lib/schema.ts`.
  - **`openingHoursSpecification`** — implemented (`schema.ts:69`) but `site.hours = null` (`site.ts:198`).
  - **`sameAs`** — implemented (`schema.ts:76`) but `site.sameAs = []` (`site.ts:200`).
  - **`priceRange`** — not implemented.
  - **`hasMap`** — not implemented.
  - No `aggregateRating` / `review`. Correct: there are no real reviews (`site.ts:202`).
- **Person:**
  - Present for both agents, on About and each agent page.
  - Keys: `@id, name, givenName, familyName, jobTitle, description, email, telephone, image, url, knowsAbout, knowsLanguage, workLocation, worksFor {@type InsuranceAgency, @id …/#agency, name "Martinez Insurance Solutions"}`.
  - No `sameAs` (no profiles configured). No `hasCredential` (license numbers / NPN are `null` in config).
- **FAQPage:**
  - On 26 pages. On every one, the schema questions = visible `<summary>` questions (e.g. `/faq` 22/22, service pages 4–5/4–5, 0 mismatches).
  - Answers are in server HTML inside `<details>` (collapsed but present). There's no FAQPage on pages without visible FAQs.
- **BreadcrumbList:** on all inner pages. Example (Kenner):
  `Home → Service Area → Kenner` with `item` URLs (apex).
- **WebSite:** home only (`/` and `/es`), `@id …/#website`, no `SearchAction` (no site search, so correct).
- **InsuranceAgency repeats on all 58 pages:** byte-identical, which is acceptable.

Full JSON-LD for home, a service page, a city page, an agent page and the FAQ page: **Appendix A**.

## 7. Navigation (server-rendered HTML)

```
curl -s https://www.martinezinsurancesolutions.com/ | (header <a href> counts)
/medicare-advantage 2, /medicare-supplement 2, /part-d-prescription-drug-plans 2, /special-needs-plans 2,
/dental-vision-insurance 2, /final-expense-insurance 2, /life-insurance 2, /hospital-indemnity-insurance 2,
/health-insurance 2, /annual-enrollment-period 2, /medicare-scam-protection 2, /faq 2, /about 2, /service-area 2, /contact 4, /es 1, / 1
nav landmarks: Language, Main, Site menu
```

**Nothing is missing.**
- The "Plans" dropdown's Medicare section (Advantage, Supplement, Part D, SNP) and "Other coverage" are server-rendered.
- Each link appears **twice**: the desktop `NavDropdown` panel (`src/components/layout/NavDropdown.tsx`, rendered with the `hidden` attribute until opened) and the mobile `MobileMenu`.
- Links are plain `<a href>` in the HTML, so they're crawlable without JS.
- The footer also links every product, every city page and the legal pages.

## 8. Content depth

- **Method:**
  - Local build, rendered DOM, `<main>` only, FAQ `<details>` opened.
  - **Excluded:** header and footer (outside `<main>`); every `<form>` plus its wrapping `<section>` (FinalCta / contact form); the carrier strip section; breadcrumbs; scripts.
  - Words = whitespace tokens that contain a letter or digit.
- **Under 600 words: 32 of 58 pages.**

| Words | Page | | Words | Page |
|---:|---|---|---:|---|
| 209 | `/accessibility` | | 671 | `/` |
| 241 | `/es/accesibilidad` | | 715 | `/health-insurance` |
| 306 | `/about/nidia-martinez` | | 717 | `/hospital-indemnity-insurance` |
| 307 | `/service-area` | | 730 | `/final-expense-insurance` |
| 321 | `/terms` | | 734 | `/dental-vision-insurance` |
| 332 | `/service-area/slidell` | | 746 | `/es` |
| 334 | `/about/john-martinez` | | 751 | `/life-insurance` |
| 336 | `/es/area-de-servicio` | | 775 | `/special-needs-plans` |
| 336 | `/service-area/gretna` | | 781 | `/es/seguro-de-indemnizacion-hospitalaria` |
| 337 | `/contact` | | 816 | `/part-d-prescription-drug-plans` |
| 345 | `/service-area/baton-rouge` | | 826 | `/annual-enrollment-period` |
| 346 | `/service-area/covington` | | 829 | `/es/seguro-de-gastos-finales` |
| 358 | `/es/contacto` | | 839 | `/es/seguro-de-vida` |
| 359 | `/es/sobre-nosotros/nidia-martinez` | | 839 | `/es/seguro-de-salud` |
| 363 | `/es/terminos-de-uso` | | 841 | `/medicare-scam-protection` |
| 367 | `/service-area/chalmette` | | 853 | `/es/seguro-dental-y-de-vision` |
| 368 | `/service-area/kenner` | | 867 | `/es/planes-para-necesidades-especiales` |
| 371 | `/es/area-de-servicio/gretna` | | 872 | `/faq` |
| 382 | `/service-area/metairie` | | 893 | `/es/planes-de-medicamentos-parte-d` |
| 385 | `/es/sobre-nosotros/john-martinez` | | 933 | `/es/proteccion-contra-fraudes-de-medicare` |
| 398 | `/es/area-de-servicio/baton-rouge` | | 934 | `/es/periodo-de-inscripcion-anual` |
| 400 | `/es/area-de-servicio/slidell` | | 949 | `/medicare-supplement` |
| 403 | `/es/area-de-servicio/covington` | | 958 | `/es/preguntas-frecuentes` |
| 406 | `/es/area-de-servicio/kenner` | | 1038 | `/medicare-advantage` |
| 412 | `/service-area/new-orleans` | | 1082 | `/es/seguro-suplementario-medicare` |
| 413 | `/es/area-de-servicio/chalmette` | | 1147 | `/es/medicare-advantage` |
| 418 | `/es/area-de-servicio/metairie` | | | |
| 422 | `/privacy-policy` | | | |
| 439 | `/about` | | | |
| 453 | `/es/politica-de-privacidad` | | | |
| 471 | `/es/area-de-servicio/new-orleans` | | | |
| 498 | `/es/sobre-nosotros` | | | |

All pages from 209 through 498 are under 600; every service page, the AEP and scam guides, the FAQ and home are above.

**The most important thin pages for local SEO:**
- All **16 city pages** (332–471 words).
- The **service-area hubs** (307 / 336).
- The **4 agent profiles** (306–385).

**City-page similarity** (rendered main text, word-3-gram Jaccard):

| Locale | Pages | Max | Min | Mean | Highest pair | Pairs > 50% |
|---|---|---|---|---|---|---|
| EN | 8 | 7.8% | 1.9% | 5.3% | slidell ~ covington 7.8% | **none** |
| ES | 8 | 8.4% | 2.7% | 5.6% | slidell ~ covington 8.4% | **none** |

So the city pages are unique, just short. Only **8** cities have pages (`src/config/cities.ts`); `site.serviceArea.cities` lists 13 (used in `areaServed`).

## 9. Internal linking

- **Method:** links inside `<main>`, excluding breadcrumbs and the FinalCta/contact-form section; header and footer are outside `<main>`.
- **Counts:** distinct *other* pages linking in.
  - "all main" = anywhere in `<main>`, including cards and related-service tiles.
  - "body copy" = inside `.prose-page` / `[data-content]`, i.e. contextual links in text.
- **Result: 44 of 58 pages have fewer than 3 body-copy inbound links.**

| All-main | Body copy | Page |
|---:|---:|---|
| 0 | 0 | `/accessibility`, `/es/accesibilidad`, `/terms`, `/es/terminos-de-uso`, `/es`, `/es/sobre-nosotros` |
| 1 | 0 | **all 16 city pages** (only link: the service-area hub grid), `/es/area-de-servicio` |
| 1 | 1 | `/privacy-policy`, `/es/politica-de-privacidad` |
| 2 | 0 | `/about` |
| 2 | 1 | `/faq`, `/es/preguntas-frecuentes` |
| 3 | 1 | `/about/nidia-martinez`, `/about/john-martinez`, ES agent pages, `/health-insurance`, `/es/seguro-de-salud` |
| 4 | 2 | `/life-insurance`, `/es/seguro-de-vida` |
| 7 | 2 | `/dental-vision-insurance`, `/es/seguro-dental-y-de-vision` |
| 9 | 0 | `/service-area` |
| 9 | 1 | `/hospital-indemnity-insurance`, `/es/seguro-de-indemnizacion-hospitalaria` |
| 12 | 2 | `/contact`, `/es/contacto` |
| 28 | 0 | `/` (home is linked via logo / breadcrumbs only, which is expected) |
| 6 | 5 | scam guide EN/ES |
| 7 | 3–4 | SNP, final expense (EN/ES) |
| 8 | 3 | Part D (EN/ES) |
| 12 | 8 | Medicare Supplement (EN/ES) |
| 14 | 7 | AEP (EN/ES) |
| 16 | 9 | Medicare Advantage (EN/ES) |

- **Weakest for local rankings:** no service page or guide links to any **city page** in body copy. City pages are reachable only from the `/service-area` hub and the sitewide footer.
- **Weak body-copy links elsewhere:** agent profiles and the FAQ get almost none.
- **No broken targets:** no internal links point to paths outside the sitemap.

## 10. Business facts

**Source of truth: `src/config/site.ts`.**

| Fact | Value | Source (file:line) | Live (all 58 pages, visible text) |
|---|---|---|---|
| Primary phone | (504) 313-2317 / `+15043132317` | `site.ts:189` (`site.primaryPhone`), John `site.ts:118` | 410 occurrences on 58/58 pages |
| Nidia's phone | (504) 913-7153 / `+15049137153` | `site.ts:96` | 70 on 58/58 (footer + home hero + profiles) |
| Hardcoded phone in copy | (504) 313-2317 | `messages/en.json:111` and `messages/es.json:111` (Meta.contact.description); `:127` (Meta.notFound.description) | — will drift if the config changes |
| **Fake example phone** | **(504) 555-0123** | `messages/en.json:374` (`phoneHint`), `:411` (`phoneInvalid`); same lines in es.json | **visible on 52/58 pages** (form hint "Example: (504) 555-0123") |
| Business email | martinezinsurancesolutions@outlook.com | `site.ts` (`site.email`) | 60 on 58/58 |
| Agent emails | nidiamartinez576@outlook.com, martj5493@gmail.com | `site.ts:97, 119`; `.env.example` | 6 pages each (contact + profiles) |
| Address | 110 Veterans Blvd., Suite 100 A, Metairie, LA 70005 | `site.ts:192-196` | footer on 58/58; home office section; contact |
| Name (full) | "Martinez Insurance Solutions" | `site.ts` `name`; messages; content | 246 on 58/58 |
| Name (short) | "Martinez Insurance" | `site.ts` `shortName`; **41 of 60 `<title>` tags** end in `\| Martinez Insurance` (EN 16/30, ES 25/30) | — |
| Years (config) | Nidia `yearsExperience: 22`; John `null` | `site.ts:94, 110` | — |
| Years (displayed) | "Over 20 Years Serving Seniors" (badge); "20 years of experience" (home trust strip); "22 years of experience" (Nidia's card/profile); "more than 20 years" (About copy) | `messages/en.json:162` (yearsHelping), **`:263` (`Home.trust.years` = "{years} years of experience", fed `headlineYears()` = 20, `TrustStrip.tsx:12`)**, `:161`; `content/en/pages.ts:257` | "20 years" on `/` trust strip; "22 years" on `/about` and `/about/nidia-martinez` |
| "27" | none left | — | 0 occurrences of "27 years"/"27 años" |

**Inconsistencies:**
1. **Brand suffix in titles is mixed.**
   - EN: 16 of 30 titles end `| Martinez Insurance`, 14 end `| Martinez Insurance Solutions`.
   - ES: 25 short, 5 full.
   - The legal entity, schema and `og:site_name` all say "Martinez Insurance Solutions". This was a char-length workaround for the 60-char title limit.
   - It weakens brand/site-name consistency. Google currently shows an odd "Bett Martinez Insurance Solutions" site name.
2. **Home trust strip says "20 years of experience".**
   - The badge on the same page says "Over 20 Years", and the profile says 22.
   - Root cause: `Home.trust.years` (`messages/en.json:263`) has no "over" but receives the rounded-down `headlineYears()`.
3. **A second 504 phone number, (504) 555-0123, is in visible text on 52 pages.**
   - It's a form hint, but it's a NAP-consistency risk for local SEO extraction.
4. **Phone is hardcoded in two meta descriptions** (`messages/*.json:111, 127`) instead of interpolated from config.

## 11. Performance

**Lighthouse 12.6.1 mobile.** Default mobile preset with simulated throttling, 3 runs each, median run. Run against a local `next start` of `b0a1497`, because headless Chromium can't reach production through this environment's egress proxy (see Method). Real-world TTFB on Vercel's CDN (cache HIT) will differ.

| URL | Perf (3 runs) | Median Perf / A11y / BP / SEO | FCP | LCP | TBT | CLS | SI | Bytes (img / JS) |
|---|---|---|---|---|---|---|---|---|
| `/` | 94, 96, 99 | **96** / 100 / 100 / 100 | 1.06 s | **2.70 s** | 78 ms | 0.000 | 1.06 s | 320 KiB (16 / 153) |
| `/medicare-advantage` | 97, 97, 97 | **97** / 100 / 100 / 100 | 1.06 s | **2.64 s** | 45 ms | 0.000 | 1.06 s | 306 KiB (4 / 153) |
| `/service-area/kenner` | 97, 97, 97 | **97** / 100 / 100 / 100 | 1.06 s | **2.64 s** | 49 ms | 0.000 | 1.06 s | 309 KiB (4 / 153) |

**LCP elements (all text, not images):**
- `/` → `h1#hero-heading` "Medicare Advisor in New Orleans, Louisiana". Phases: TTFB 455 ms, load delay 0, load time 0, **render delay 2244 ms**.
- `/medicare-advantage` → lede `p.mt-5` "Medicare Advantage (Part C) plans bundle…". TTFB 457, **render delay 2180 ms**.
- `/service-area/kenner` → lede `p.mt-5` "Kenner is home to many families…". TTFB 455, **render delay 2183 ms**.

**Why render delay is high:**
- Observed (unthrottled) FCP = LCP = ~126 ms.
- Lighthouse's simulation counts the ~153 KiB of JS that starts downloading before the LCP paint, so simulated LCP ≈ 2.6–2.7 s.
- The legal pages (longer DOM) sit right at 94–96 for this reason. Measured before this audit: `/privacy-policy` 94/94/96, `/terms` 93/94/94 on the previous commit. **Not an image problem.**

**next/image `sizes` and bytes (live production HTML):**

| Image | `sizes` (live) | loading | srcset max | Mobile pick (412 CSS px × 1.75 DPR) | Bytes (AVIF / JPEG fallback) |
|---|---|---|---|---|---|
| Hero headshot Nidia (`/`) | `(min-width: 1600px) 20vw, (min-width: 1024px) 18rem, 45vw` | eager + `<link rel=preload imageSizes=…>` | 3840w | 45vw → 324 px → **w=384** | **5,833 B** / 13,836 B |
| Hero headshot John (`/`) | same | lazy | 3840w | w=384 | ~same |
| Office photo together (`/`) | `(min-width: 1024px) 45vw, 100vw` | lazy | 3840w | 100vw → 721 px → **w=750** | **19,509 B** / 48,758 B |
| Office photo (`/contact`) | `(min-width: 1280px) 34vw, (min-width: 1024px) 38vw, 100vw` | lazy | 3840w | w=750 | 15,841 B / 39,025 B |
| Nidia desk (`/about/nidia-martinez`) | `(min-width: 1024px) 55vw, 100vw` | lazy | 3840w | w=750 | 17,847 B / 44,951 B |
| Headshot (`/about/nidia-martinez`) | `(min-width: 1600px) 24vw, (min-width: 1024px) 22rem, (min-width: 640px) 24rem, 100vw` | eager + preload | 3840w | 100vw → w=750 | — |

- **`w=3840` is listed in srcset, but mobile never downloads it.** It's Next.js's default `deviceSizes` list. Even if requested, it can't exceed the source:
  - `w=3840` of the 720 px headshot = 12,371 B AVIF / 34,144 B JPEG.
  - Originals: headshot 43,452 B; office photo 123,249 B.
- **No wasted bytes on mobile.** Total images on `/` during the Lighthouse run: **16 KiB**.

## 12. Rendering

From `next build` (Next 16.3.6, Turbopack):

```
○ /_not-found                         ● /og/[locale]/[page] (58 paths)
● /en, /es                            ○ /robots.txt  ○ /sitemap.xml  ○ /manifest.webmanifest
● every /[locale]/… page (58 total)   ○ /icon.png  ○ /apple-icon.png
ƒ /[locale]/[...rest]                 ƒ Proxy (Middleware)
```
- **Static vs dynamic:** all indexable pages are **SSG** (prerendered HTML). Home and AEP use ISR `revalidate = 86400` (`src/app/[locale]/page.tsx:24`, `src/app/[locale]/annual-enrollment-period/page.tsx:15`). The only dynamic route is the catch-all 404.
- **Client-only text:** none on indexable pages. Header dropdowns, mobile menu, FAQ answers and the contact form are all present in server HTML.
- **Exception — the 404 page's content is client-rendered only:**
  - Every 404 response (`/does-not-exist`, `/es/no-existe`, `/service-area/houston`, `/medicare-advantage/foo`, `/og/xx/home`) returns server HTML with `<html id="__next_error__">`, **no `lang`, no `<title>`, no `<h1>`**.
  - Only `noindex`, icons and scripts are present. The visible "We couldn't find that page" content is in the RSC payload and painted after JS runs. Reproduced on the local build too.
  - **Likely cause:**
    - `src/app/layout.tsx` is a pass-through root layout (`return children`, no `<html>`).
    - The real `<html>` lives in `src/app/[locale]/layout.tsx`.
    - `notFound()` thrown from `src/app/[locale]/[...rest]/page.tsx` (dynamic) is rendered through Next's error document rather than the locale layout. `src/app/not-found.tsx` (which has its own `<html lang>`) isn't used for these paths.
  - **SEO impact is low:** status is a real 404 with `noindex`, so it's not a soft 404. But no-JS clients get a blank page.

## 13. Analytics & conversions

- **GA4 is not installed in production.**
  - 0 occurrences of `googletagmanager`, `gtag(`, `G-…`, `GTM-` or `dataLayer` in live HTML (`/`, `/contact`, `/medicare-advantage`).
  - The code is gated on `NEXT_PUBLIC_GA_ID` (`src/app/[locale]/layout.tsx:63, 92` → `src/components/Analytics.tsx`), which is unset in production.
- **The events are wired but never fire:**
  - `click_to_call`: a delegated click listener on every `a[href^="tel:"]` (`src/components/Analytics.tsx:12-19`).
  - `generate_lead`: fired client-side when the form returns `success` (`src/components/contact/ContactForm.tsx:98`).
  - Both call `track()` (`src/lib/analytics.ts:10-12`), which is a **no-op unless `window.gtag` exists**. Calls and leads are currently **not measured**.
- **Contact form email delivery — not verified (production logs are not accessible from here; no test submission was made, as instructed).**
  - **Config path:** Server Action `src/app/actions/contact.ts` → `src/lib/contact/transport.ts`. It needs `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (must be `@martinezinsurancesolutions.com`, the Resend-verified domain) and `CONTACT_TO_EMAILS` (bare addresses, comma-separated).
  - **Failures in the user's Vercel and Resend screenshots (2026-09-29):**
    1. Resend `403 Domain not verified`, with `from: martinezinsurancesolutions@outlook.com`.
    2. Later, `[contact] CONTACT_TO_EMAILS is empty — lead could not be delivered`: three errors at 21:00–21:01 on `POST /contact`.
  - **No later evidence** of a successful send (Resend log with status 200) has been seen.
  - On failure, the user sees "Sorry — your message didn't go through" plus the phone number, so leads are not silently lost but are **not emailed**.

## 14. Content gaps

- **No blog or articles route.** `src/app/[locale]/` contains only the 29 page routes listed in §5.

| Topic | Dedicated page EN | Dedicated page ES | Where it's covered now (rendered text matches) |
|---|---|---|---|
| 2027 AEP guide | Partial: `/annual-enrollment-period` (year computed: AEP 2026 → coverage 2027) | Partial: `/es/periodo-de-inscripcion-anual` | Title "Medicare Enrollment: Oct 15–Dec 7 \| Martinez Insurance" and H1 have **no year**; "2027" appears in body text only (2 mentions each). |
| Medicare Advantage vs Supplement | **No** | **No** | A comparison mention only on `/medicare-advantage` and `/es/medicare-advantage` (1 each) |
| Turning 65 / Initial Enrollment Period | **No** | **No** | Mentioned on 14 pages (e.g. `/part-d…` 2, `/health-insurance` 2, `/es/seguro-de-salud` 3, FAQ) |
| Part D / Extra Help (LIS) | Part D page yes (`/part-d-prescription-drug-plans`); **no Extra Help page** | Part D yes; **no Ayuda Adicional page** | Extra Help mentioned on 8 pages |
| Medigap Open Enrollment | No (covered inside `/medicare-supplement`, 3 mentions) | No (inside the ES page) | 6 pages |
| D-SNP / dual eligible | Inside `/special-needs-plans` | Inside the ES page | 2 pages |

## 15. 404s

| Request | Status | Notes |
|---|---|---|
| `/does-not-exist`, `/es/no-existe` | **404** | `noindex`; client-rendered shell (§12) |
| `/service-area/houston`, `/es/area-de-servicio/houston`, `/service-area/Kenner`, `/service-area/new-orleans-la` | **404** | unknown city slugs (dynamicParams off) |
| `/about/nidia`, `/about/nidia-martinez/x`, `/medicare-advantage/foo`, `/es/preguntas-frecuentes/x` | **404** | |
| `/index`, `/api`, `/api/contact`, `/_not-found` | **404** | |
| `/og/xx/home`, `/og/en/nope`, `/og/en/home.png` | **404** | |
| `/faq/`, `/sitemap.xml/`, `/robots.txt/` | 308 → no slash | |

**No soft 404s found.** Every unknown path returns a real 404 status with `<meta name="robots" content="noindex">`. Valid pages never return 404 content with 200.

---

## 16. Prioritized fixes

### Critical
**C1 — Wrong canonical host sitewide (apex instead of www).**
- **Root cause:**
  - `getSiteUrl()` (`src/config/site.ts:260-265`) resolves to `https://martinezinsurancesolutions.com`, either via `NEXT_PUBLIC_SITE_URL` or the `VERCEL_PROJECT_PRODUCTION_URL` fallback (shortest domain).
  - Vercel serves www and 308s the apex to it.
  - Pages are SSG, so the value is frozen in HTML at build.
- **Affects:**
  - Canonical, hreflang (×3/page), `og:url`, `og:image`, sitemap `<loc>` and alternates (232 URLs), robots `Sitemap:`/`Host:`, all JSON-LD `@id`/`url`.
  - Files: `src/app/[locale]/layout.tsx:51`, `src/lib/urls.ts`, `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/lib/schema.ts`, `src/components/layout/Breadcrumbs.tsx`.
- **Fix:**
  - Set `NEXT_PUBLIC_SITE_URL=https://www.martinezinsurancesolutions.com` in Vercel → Production, then **redeploy**.
  - Optionally harden `getSiteUrl()` so the fallback can't pick the apex.
  - Then resubmit the sitemap in Search Console.

**C2 — Lead emails not confirmed working (business-critical).**
- **Root cause:** production env config. The last observed errors were `403 Domain not verified` (`CONTACT_FROM_EMAIL` on outlook.com) and `CONTACT_TO_EMAILS is empty`.
- **Files:** `src/lib/contact/transport.ts`, `src/lib/contact/routing.ts:25-30`, `src/app/actions/contact.ts:70-74, 100-103`.
- **Fix:** verify the Vercel env values, redeploy, and confirm one Resend log entry with status 200.

### High
**H1 — No analytics; calls and leads unmeasured.**
- **Root cause:** `NEXT_PUBLIC_GA_ID` is unset, so `<Analytics>` isn't rendered (`src/app/[locale]/layout.tsx:92`). `track()` no-ops (`src/lib/analytics.ts`).
- **Fix:** create the GA4 property, set the env var, redeploy, and mark `generate_lead` and `click_to_call` as key events.

**H2 — City pages thin and under-linked.**
- **Size:** 16 city pages at 332–471 words. Each has only 1 in-`<main>` inbound link (the hub grid) and **0 contextual links** from service pages or guides.
- **Root cause:** content length in `src/content/{en,es}/cities.ts`. Service-page content (`src/content/{en,es}/services.ts`) has 0 `page:city-*` links. Only 8 of the 13 served cities have pages (`src/config/cities.ts`).

**H3 — Missing high-intent content pages (EN + ES).**
- **Missing pages:**
  - Medicare Advantage vs Medigap
  - Turning 65 / Initial Enrollment Period
  - Extra Help / LIS
- **No blog/guides route for seasonal content.**
- **AEP title/H1 lack the year** ("2027"). See `messages/*.json` `Meta.aep.title` and `src/content/*/pages.ts` (AEP H1).

### Medium
**M1 — InsuranceAgency schema incomplete.**
- **Missing:** `geo`, `openingHoursSpecification` (`site.hours = null`, `site.ts:198`), `sameAs` (`site.sameAs = []`, `site.ts:200`), `priceRange`, `hasMap`. Person nodes lack `sameAs` and credentials (license/NPN `null`).
- **Files:** `src/lib/schema.ts:20-80`, `src/config/site.ts`.

**M2 — Mixed brand suffix in titles.**
- 41 of 60 titles end "| Martinez Insurance" vs the entity "Martinez Insurance Solutions" (`messages/en.json`, `messages/es.json` → `Meta.*.title`). A side effect of the 60-char limit.
- It feeds Google's site-name confusion. Pair it with C1 and a Google Business Profile with the exact name.

**M3 — Fake phone "(504) 555-0123" visible on 52 pages** (`messages/{en,es}.json:374, 411`, form hint and error). It's a NAP-consistency risk. Use a non-numeric hint or a non-504 format.

**M4 — Thin supporting pages.**
- **Under 600 words:** agent profiles (306–385), About (439/498), service-area hubs (307/336), contact (337/358).
- **Low body-copy inbound links:** agent profiles and the FAQ get ≤1 each (§9).

**M5 — Sitemap `lastmod` is a single hardcoded date** (`src/app/sitemap.ts:9` ← `site.contentLastReviewed`, `src/config/site.ts:232`). It's identical for all 58 URLs and already stale vs recent edits.

### Low
**L1 — 404 pages are client-rendered.** No `lang`, `<title>` or `<h1>` in server HTML (`src/app/layout.tsx` pass-through, `src/app/[locale]/[...rest]/page.tsx`, `src/app/[locale]/not-found.tsx`, `src/app/not-found.tsx`). Status 404 + noindex is correct.

**L2 — 307 (temporary) redirects** for `/en`, `/en/*`, `/ES`, wrong-locale slugs (next-intl middleware, `src/proxy.ts`). Prefer 308 for permanent normalisation.

**L3 — Mixed-case top-level paths return 200** (`/Medicare-Advantage`, `/MEDICARE-ADVANTAGE`) instead of redirecting to lowercase. The canonical is correct. Source: locale proxy rewrite (`src/proxy.ts` / `src/i18n/routing.ts` pathnames).

**L4 — Experience wording inconsistent.** The home trust strip shows "20 years of experience" (`messages/{en,es}.json:263` + `src/components/sections/TrustStrip.tsx:12`) next to "Over 20 Years". Profiles say 22.

**L5 — Phone hardcoded in meta descriptions** (`messages/{en,es}.json:111, 127`) instead of from config.

**L6 — robots.txt `Host:` directive** (non-standard) and `Disallow: /api/` for a non-existent route (`src/app/robots.ts`).

**L7 — OG image PNGs indexable** (`/og/[locale]/[page]`, 200, no `X-Robots-Tag`). Optional `noindex`.

**L8 — Lighthouse LCP render delay ~2.2 s (simulated)** on text LCP, caused by ~153 KiB JS in the critical chain. Long legal pages sit at 94–96 Perf. Images are not the cause (16 KiB on `/`).

**L9 — `http://` apex takes 2 redirect hops** (http→https apex→www). This is Vercel domain config; optional.

---

## Appendix A — JSON-LD (live production, raw)

### A.1 `InsuranceAgency` (sitewide; byte-identical on the 5 pages below: True)

```json
{
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://martinezinsurancesolutions.com/#agency",
  "name": "Martinez Insurance Solutions",
  "url": "https://martinezinsurancesolutions.com",
  "logo": "https://martinezinsurancesolutions.com/brand/seal.png",
  "image": "https://martinezinsurancesolutions.com/brand/seal.png",
  "description": "Local, licensed Medicare advisors in New Orleans with over 20 years of experience. No-cost, in-person help choosing a plan. Hablamos español.",
  "telephone": "+15043132317",
  "email": "martinezinsurancesolutions@outlook.com",
  "knowsLanguage": [
    "en",
    "es"
  ],
  "areaServed": [
    {
      "@type": "State",
      "name": "Louisiana"
    },
    {
      "@type": "City",
      "name": "New Orleans, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Metairie, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Kenner, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Harahan, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "River Ridge, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Chalmette, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Gretna, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Marrero, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Slidell, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Mandeville, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Covington, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "LaPlace, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    },
    {
      "@type": "City",
      "name": "Baton Rouge, LA",
      "containedInPlace": {
        "@type": "State",
        "name": "Louisiana"
      }
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+15043132317",
    "email": "martinezinsurancesolutions@outlook.com",
    "contactType": "customer service",
    "areaServed": "US-LA",
    "availableLanguage": [
      "English",
      "Spanish"
    ]
  },
  "employee": [
    {
      "@type": "Person",
      "@id": "https://martinezinsurancesolutions.com/about/nidia-martinez#person",
      "name": "Nidia Martinez",
      "jobTitle": "Licensed Insurance Agent",
      "url": "https://martinezinsurancesolutions.com/about/nidia-martinez"
    },
    {
      "@type": "Person",
      "@id": "https://martinezinsurancesolutions.com/about/john-martinez#person",
      "name": "John Martinez",
      "jobTitle": "Licensed Insurance Agent",
      "url": "https://martinezinsurancesolutions.com/about/john-martinez"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "streetAddress": "110 Veterans Blvd., Suite 100 A",
    "addressLocality": "Metairie",
    "addressRegion": "LA",
    "postalCode": "70005"
  }
}
```

### A.2 Home `/` — all other nodes

```json
[
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://martinezinsurancesolutions.com/#website",
    "name": "Martinez Insurance Solutions",
    "url": "https://martinezinsurancesolutions.com",
    "description": "Local, licensed Medicare advisors in New Orleans with over 20 years of experience. No-cost, in-person help choosing a plan. Hablamos español.",
    "inLanguage": [
      "en-US",
      "es-US"
    ],
    "publisher": {
      "@type": "InsuranceAgency",
      "@id": "https://martinezinsurancesolutions.com/#agency",
      "name": "Martinez Insurance Solutions"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to work with you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nothing. Insurance companies pay us, and your premium is the same whether you enroll with us or on your own."
        }
      },
      {
        "@type": "Question",
        "name": "If I'm happy with my plan, do I need to change it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. If you're satisfied after reading your Annual Notice of Change, your plan renews automatically. If the changes concern you, schedule a review with us."
        }
      },
      {
        "@type": "Question",
        "name": "Do you meet in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer personal, in-person help in Greater New Orleans, and we're happy to help by phone anywhere in Louisiana."
        }
      },
      {
        "@type": "Question",
        "name": "Is this the government or Medicare calling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — and Medicare won't call you uninvited to ask for your number. We're licensed agents, not the government. Learn how to avoid Medicare scams."
        }
      }
    ]
  }
]
```

### A.3 Service `/medicare-advantage` — all other nodes

```json
[
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://martinezinsurancesolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Medicare Advantage",
        "item": "https://martinezinsurancesolutions.com/medicare-advantage"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medicare Advantage Plans in New Orleans & Louisiana",
    "serviceType": "Medicare Advantage (Part C) plan enrollment assistance",
    "description": "Personal, no-cost help comparing and enrolling in Medicare Advantage (Part C) plans in Louisiana, from licensed, bilingual local agents.",
    "url": "https://martinezinsurancesolutions.com/medicare-advantage",
    "provider": {
      "@type": "InsuranceAgency",
      "@id": "https://martinezinsurancesolutions.com/#agency",
      "name": "Martinez Insurance Solutions"
    },
    "areaServed": {
      "@type": "State",
      "name": "Louisiana"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I still pay my Part B premium with a Medicare Advantage plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. With almost every Medicare Advantage plan you continue paying your Part B premium, plus any premium the plan charges. Some plans include a Part B premium reduction, sometimes called a “giveback.” We'll point those out if they fit your needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I keep my doctor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Often, yes — but it depends on the plan. Before you enroll, we check whether your doctors and preferred hospitals are in the plan's network so there are no surprises."
        }
      },
      {
        "@type": "Question",
        "name": "Are $0 premium plans really $0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The monthly plan premium can be $0, but you'll still have copays or coinsurance when you get care, and you'll keep paying your Part B premium. We help you estimate your total yearly costs, not just the premium."
        }
      },
      {
        "@type": "Question",
        "name": "Which Medicare Advantage companies do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can see the companies we represent in Louisiana under “Carriers we work with” on this page. Plan availability varies by parish, and we only recommend a plan that fits your situation."
        }
      },
      {
        "@type": "Question",
        "name": "What if I travel or spend time out of state?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many HMO plans cover only emergency and urgent care outside the plan's service area. If you travel often, a PPO or a Medicare Supplement may be a better fit. Let's talk through your plans."
        }
      }
    ]
  }
]
```

### A.4 City `/service-area/kenner` — all other nodes

```json
[
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://martinezinsurancesolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Area",
        "item": "https://martinezinsurancesolutions.com/service-area"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Kenner",
        "item": "https://martinezinsurancesolutions.com/service-area/kenner"
      }
    ]
  }
]
```

### A.5 Agent `/about/nidia-martinez` — all other nodes

```json
[
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://martinezinsurancesolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://martinezinsurancesolutions.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Nidia Martinez",
        "item": "https://martinezinsurancesolutions.com/about/nidia-martinez"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://martinezinsurancesolutions.com/about/nidia-martinez#person",
    "name": "Nidia Martinez",
    "givenName": "Nidia",
    "familyName": "Martinez",
    "jobTitle": "Licensed Insurance Agent",
    "description": "Nidia Martinez is a licensed insurance agent who has spent a long career helping people understand their insurance options. Today Nidia focuses on Medicare Advantage and Medicare Supplement plans for seniors across Greater New Orleans and throughout Louisiana.",
    "url": "https://martinezinsurancesolutions.com/about/nidia-martinez",
    "telephone": "+15049137153",
    "email": "nidiamartinez576@outlook.com",
    "knowsLanguage": [
      "en",
      "es"
    ],
    "knowsAbout": [
      "Medicare Advantage (Part C)",
      "Medicare Supplement (Medigap)",
      "Annual Enrollment plan reviews",
      "Help for people new to Medicare"
    ],
    "worksFor": {
      "@type": "InsuranceAgency",
      "@id": "https://martinezinsurancesolutions.com/#agency",
      "name": "Martinez Insurance Solutions"
    },
    "workLocation": {
      "@type": "Place",
      "name": "Greater New Orleans, Louisiana"
    },
    "image": "https://martinezinsurancesolutions.com/images/team/nidia-martinez.jpg"
  }
]
```

### A.6 FAQ `/faq` — all other nodes

```json
[
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://martinezinsurancesolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Medicare FAQ",
        "item": "https://martinezinsurancesolutions.com/faq"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does your help cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nothing. We're paid by the insurance companies, and your plan premium is the same whether you enroll through us or on your own."
        }
      },
      {
        "@type": "Question",
        "name": "Do you speak Spanish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Both Nidia and John are fluent in English and Spanish — hablamos español."
        }
      },
      {
        "@type": "Question",
        "name": "Can we meet in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer personal, in-person help throughout Greater New Orleans. Call us to set up a time, or we can help by phone if you prefer."
        }
      },
      {
        "@type": "Question",
        "name": "Which insurance companies do you represent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We list the companies we represent on our Medicare Advantage and Medicare Supplement pages. We don't offer every plan available in your area."
        }
      },
      {
        "@type": "Question",
        "name": "Are you part of Medicare or the government?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We're licensed insurance agents. We're not connected with or endorsed by the U.S. government or the federal Medicare program."
        }
      },
      {
        "@type": "Question",
        "name": "What are Medicare Parts A, B, C and D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Part A is hospital insurance. Part B covers doctor visits and outpatient care. Part C, or Medicare Advantage, is a way to get your Medicare benefits through a private plan. Part D covers prescription drugs."
        }
      },
      {
        "@type": "Question",
        "name": "When should I sign up for Medicare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Initial Enrollment Period is the seven-month window that begins three months before the month you turn 65. If you or your spouse are still working and have employer coverage, you may be able to delay Part B without a penalty — ask us before you decide."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a penalty for signing up late?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There can be. The Part B penalty is generally 10% for each full 12-month period you could have had Part B but didn’t. The Part D penalty applies if you go 63 days or more without creditable drug coverage. Both penalties usually last as long as you have that coverage."
        }
      },
      {
        "@type": "Question",
        "name": "What doesn't Original Medicare cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Original Medicare doesn't cover most routine dental care, eye exams for glasses, hearing aids or long-term custodial care, and it has no yearly limit on out-of-pocket costs. That's why many people add other coverage."
        }
      },
      {
        "@type": "Question",
        "name": "Should I choose Medicare Advantage or a Medicare Supplement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your health, your doctors, how much you travel and your budget. Medicare Advantage often has lower premiums and extra benefits but uses networks and copays. A Medicare Supplement usually costs more each month but lets you see any provider that accepts Medicare, with fewer out-of-pocket costs. We'll compare both with you."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change my plan if I don't like it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually during specific enrollment periods — like the Annual Enrollment Period each fall — or if you qualify for a Special Enrollment Period. Medicare Advantage members also have a chance to switch between January 1 and March 31."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Special Needs Plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Medicare Advantage plan for people with specific needs, such as diabetes or chronic heart conditions, or for people with both Medicare and Medicaid. These plans may offer enhanced benefits. Read about Special Needs Plans."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a Part D plan if I have a Medicare Supplement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you want prescription coverage, yes — Medigap plans sold today don't include drug coverage. Going without creditable drug coverage can also lead to a late enrollment penalty."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Annual Enrollment Period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "October 15 to December 7 each year. It's when you can change Medicare Advantage and Part D plans for the following year. Read our Annual Enrollment guide."
        }
      },
      {
        "@type": "Question",
        "name": "What is an Annual Notice of Change?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A letter your Medicare Advantage or Part D plan sends by the end of September explaining changes for next year, such as premiums, copays and drug coverage."
        }
      },
      {
        "@type": "Question",
        "name": "If I'm happy with my plan, do I need to do anything?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your plan renews automatically. If you're unhappy with the changes, schedule an in-person review with us."
        }
      },
      {
        "@type": "Question",
        "name": "What should I bring to my appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Medicare card, any current plan cards, your Annual Notice of Change if you have one, a list of your medicines and doses, and the names of your doctors and pharmacy."
        }
      },
      {
        "@type": "Question",
        "name": "Will you ever call me out of the blue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We don't make unsolicited sales calls. We'll contact you only if you've asked us to, for example through our contact form."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if someone asks for my Medicare number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't give it to anyone who contacts you unexpectedly. Hang up and call a number you trust — or call us. See our Medicare scam protection guide."
        }
      },
      {
        "@type": "Question",
        "name": "What is final expense insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A small whole life policy that helps your family pay for funeral and burial costs. Read about final expense insurance."
        }
      },
      {
        "@type": "Question",
        "name": "How does hospital indemnity insurance help with Medicare Advantage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It pays you a cash benefit for covered hospital stays, which you can put toward your plan's daily hospital copays or other expenses."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help family members under 65?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We help with health insurance for people under 65, life insurance, and dental and vision coverage."
        }
      }
    ]
  }
]
```
