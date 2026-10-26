# Ranking improvement report: Martinez Insurance Solutions

Plan: `RANKING_PROMPT_1.md` (steps 0–11). Shipped to production on 2026-10-26, verified on https://www.martinezinsurancesolutions.com.

## Status

| Check | Result |
|---|---|
| Step 0: www canonicals, robots, sitemap | Pass (unchanged since Phase 1) |
| `npm run verify` | tsc, ESLint, 185 unit tests, build and **444/444 Playwright** pass. Lighthouse: 65 of 66 URLs ≥ 95/100/100/100. EN home scored 89 performance as the first (cold-start) URL; three re-runs scored **96–97 / 100 / 100 / 100** (LCP ~2.6 s, CLS 0). |
| Lighthouse, guide pages | 97 / 100 / 100 / 100 (all 6 guide URLs + both hubs) |
| Lighthouse, city pages | 96–97 / 100 / 100 / 100 (all 16) |
| Production curl check | 54 new/changed URLs: title ends in "\| Martinez Insurance Solutions", exactly one H1, www canonical, en-US/es-US/x-default hreflang on www, JSON-LD parses. 0 issues. |
| Sitemap | 66 URLs (was 58), real per-page `lastmod` |

## Request indexing in this order

Search Console → URL Inspection → Request indexing (EN first, then ES):

1. `/` and `/es`
2. `/medicare-supplement` and `/es/seguro-suplementario-medicare`
3. `/medicare-advantage` and `/es/medicare-advantage`
4. `/guides/diabetes-heart-special-needs-plans` and `/es/guias/planes-necesidades-especiales-diabetes-corazon`
5. `/service-area/new-orleans` and `/es/area-de-servicio/new-orleans`
6. `/service-area/metairie` and `/es/area-de-servicio/metairie`
7. `/guides/medicare-office-near-me-new-orleans` and `/es/guias/oficina-de-medicare-cerca-de-mi`
8. `/guides/turning-65-medicare-louisiana` and `/es/guias/cumplir-65-medicare-luisiana`
9. `/health-insurance` and `/es/seguro-de-salud`
10. `/dental-vision-insurance` and `/es/seguro-dental-y-de-vision`
11. `/service-area/baton-rouge` and `/es/area-de-servicio/baton-rouge`
12. `/final-expense-insurance` and `/es/seguro-de-gastos-finales`
13. `/life-insurance` and `/es/seguro-de-vida`
14. `/special-needs-plans` and `/es/planes-para-necesidades-especiales`
15. The other cities: `/service-area/{kenner,gretna,chalmette,slidell,covington}` and `/es/area-de-servicio/…`
16. `/guides` and `/es/guias`
17. `/contact`, `/es/contacto`, `/part-d-prescription-drug-plans`, `/hospital-indemnity-insurance`, `/annual-enrollment-period`, `/medicare-scam-protection`, `/faq`, `/about/nidia-martinez`, plus their ES versions

Then resubmit `https://www.martinezinsurancesolutions.com/sitemap.xml`.

## What changed, step by step

| Step | Change |
|---|---|
| 1 | **Home:** H1 "Local Medicare Agents in Metairie & New Orleans". Agent/broker subhead. "Why work with a local Medicare agent?" section. New FAQs (free? / do you work for Medicare? / in person near me). WebSite + InsuranceAgency `alternateName` ["Martinez Insurance", "Martinez Seguros"]. **All 60 titles** end in "\| Martinez Insurance Solutions" with the keyword first. MA title year is computed (next year from Oct 1). |
| 2 | Guides infrastructure: `/guides` hub, Article schema, byline "Reviewed by Nidia Martinez, Licensed Insurance Agent" linking to her profile, accessible table block. New **Medicare office near me** guide. |
| 3 | New **diabetes & heart C-SNP** guide with a comparison table. The SNP page now has a summary and link at the top. |
| 4 | **Louisiana Medigap** page: plan chart (A–N), Plan G vs N, Louisiana rules, pricing methods, carriers. |
| 5 + 9b | **Louisiana Medicare Advantage** page: year subheading, "Medicare Part C plans in Louisiana", how-to-choose checklist, "best plan" answered as how to choose. Removed "$0" and giveback wording. |
| 6 | **8 + 8 city pages** expanded: "Medicare Advantage" in each H1, city FAQs with FAQPage schema, AEP callout, routes to the office, Councils on Aging, Baton Rouge suburbs, ES Baton Rouge quote H2 + FAQ. |
| 7 | New **turning-65** guide with an HTML checklist. |
| 8 | "Agentes de Medicare que hablan español, cerca de usted" on `/es` and `/es/contacto`. Spanish near-me FAQs. |
| 9 | Final expense: burial vs final expense; tercera edad / cotización FAQs. Life: term vs whole, seniors, young families. Dental & vision: 1,200+ words. |
| 9b | Health insurance (under 65): ACA basics, Open Enrollment dates, COBRA, Medicaid/CHIP, bridge to Medicare. |
| 10 | Guides in the header Resources menu and the footer. AEP and scam pages also get Article schema and the byline. Unit tests enforce word floors, ≥3 inbound links per guide, ≥4 per city, city similarity < 30% and unique section IDs. |

## Word counts and contextual inbound links (EN content; ES is similar or longer)

"Inbound" counts other pages whose body copy links to the page (navigation and footer links not counted). Home "before" counted only its FAQs; the rest of the home copy lives in the message files.

| Page | Words before → after | Inbound links before → after |
|---|---|---|
| Home | 131 → 663 | — |
| Medicare Advantage | 965 → 1,895 | 9 → 20 |
| Medicare Supplement | 925 → 1,957 | 8 → 15 |
| Part D | 728 → 792 | 3 → 9 |
| Special Needs Plans | 688 → 812 | 3 → 7 |
| Dental & vision | 698 → 1,288 | 2 → 6 |
| Final expense | 685 → 979 | 4 → 6 |
| Life insurance | 710 → 983 | 2 → 4 |
| Hospital indemnity | 679 → 725 | 1 → 2 |
| Health insurance | 671 → 1,280 | 1 → 3 |
| AEP | 757 → 771 | 7 → 9 |
| Scam protection | 752 → 766 | 6 → 10 |
| Contact | 218 → 343 | 2 → 8 |
| New Orleans | 366 → 1,106 | 0 → 11 |
| Metairie | 338 → 1,087 | 0 → 15 |
| Kenner | 321 → 866 | 0 → 6 |
| Gretna | 294 → 861 | 0 → 5 |
| Chalmette | 325 → 873 | 0 → 4 |
| Slidell | 288 → 862 | 0 → 4 |
| Covington | 306 → 861 | 0 → 5 |
| Baton Rouge | 294 → 855 | 0 → 7 |
| Guide: Medicare office near me | new → 1,071 | 0 → 8 |
| Guide: diabetes & heart C-SNP | new → 1,912 | 0 → 13 |
| Guide: turning 65 | new → 1,457 | 0 → 6 |
| Guides hub | new → 161 (+ guide cards) | 0 → 1 (+ header/footer) |

## Facts I could not verify, so I left them out

- **Specific Social Security office addresses** in Greater New Orleans. ssa.gov returns 403 to automated requests, so the guide points to `SSA.gov/locator` instead.
- **Anything from ldi.la.gov** (also 403):
  - SHIIP's name, phone (1-800-259-5300) and LDI page link are verified through shiphelp.org and Medicare & You 2027.
  - Louisiana-specific Medigap rules beyond medicare.gov's under-65 listing (e.g., any extra state open-enrollment or switching rights) are omitted. The page says "Louisiana law may give you more; we check".
- **Distances and drive times** to the Metairie office. Routes are described only.
- **Council on Aging phone numbers and addresses.** Names only, from the GOEA directory.
- **Dollar figures** (Part B deductible, K/L out-of-pocket limits, Part D base premium). medicare.gov sources disagree for 2026 and 2027 amounts aren't final, so amounts are described without numbers. Plan N's $20 / $50 copay caps are included (stable, on medicare.gov).
- **Network participation** of Ochsner, LCMC Health, Our Lady of the Lake, etc. in any plan. These are named only as systems people ask about.
- **C-SNP plan names or parish availability.** No plans are named.
- **Diabetic eye exam coverage.** Not stated; only cataract eyeglasses and glaucoma screening are, which are verified.
- **Note:** the CMS chronic-condition list (diabetes, chronic heart failure, cardiovascular disorders) comes from cms.gov's C-SNP page (last modified 09/2024). If CMS updates that list, the C-SNP guide's "Which heart conditions count?" paragraph should be rechecked.

## TODOs that need your input

1. **Contact form delivery:** set the Vercel Production env vars from Phase 1, then send a test lead. Not confirmed yet.
2. **GA4:** `NEXT_PUBLIC_GA_ID` isn't set.
3. **Metairie parking:** where should visitors park? The page currently says "when you call, we'll explain where to park and how to find our suite".
4. **Long-term care insurance:** do you sell it? Not added, per the plan.
5. **Short-term health insurance:** do you offer it? It isn't in the config, so it isn't mentioned anywhere.
6. **sameAs listings:** send the URLs for Google Business Profile, Facebook, Yelp, Bing Places, Apple Business Connect and BBB. They go in `site.sameAs` and render in the InsuranceAgency schema.
7. **License / NPN numbers** for Nidia and John, to show on profiles and in schema.
8. **Office hours:** `site.hours` is empty, so hours are hidden and left out of schema.
9. **Have Nidia read the three guides:** the byline says she reviewed them. Their `modified` dates are in `src/config/guides.ts`.
10. **Google Business Profile:** align the primary category and description with the new home copy (Medicare agent / broker, Metairie, Hablamos español).
