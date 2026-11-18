# November update report: Martinez Insurance Solutions

Date: November 18, 2026. Based on the Search Console, GA4 and Google Business Profile data through Nov 16.

Every step was committed separately, Steps 1–3 were deployed first, and everything was deployed again at the end. `npm run verify` passed before the final deploy, apart from one single-run Lighthouse dip that re-measured at 100 (details under Production verification).

---

## What changed, step by step

### Step 1: Business facts match the Google Business Profile
- **Address:** now `110 Veterans Blvd, Suite A, Metairie, LA 70005` everywhere it appears: config, footer, contact page, city pages, and the InsuranceAgency JSON-LD. "100 A" has zero results in the repository.
- **Hours:** Mon–Fri 8:00 AM – 6:30 PM and Sat–Sun 10:00 AM – 4:00 PM, in EN and ES.
  - Shown in the footer, on /contact and on the Metairie page (new "Visit our office" section).
  - Added to the JSON-LD as `openingHoursSpecification`.
- **"Weekend appointments available" / "Citas los fines de semana":** on the home page (hero), the AEP page and /contact.
- **sameAs:** the Google Business Profile, as a Maps link built from its place ID.
  - Yelp, Bing Places, Facebook and Instagram were left out because their URLs were placeholders in the brief (see "Facts left out").

### Step 2: Analytics accuracy
- **GA4 only loads for real visitors on `www.martinezinsurancesolutions.com`.** It doesn't load when:
  - `navigator.webdriver` is set
  - the user agent matches Lighthouse, HeadlessChrome, Playwright, Puppeteer, PageSpeed, Google-InspectionTool, bot, crawler or spider
  - the host is localhost, a Vercel preview URL, the bare (non-www) domain, or anything else
  - the browser sends Global Privacy Control
- **Events tested on production from a mobile tap:** an iPhone emulation set up to look like a real browser (`webdriver` off, Safari user agent), visiting `?internal=1&debug_mode=1`. Every hit carried the DebugView flag:

  | Tap | Event received by GA4 | Parameters |
  |---|---|---|
  | Sticky bar Call | `click_to_call` | button_location=sticky_bar, phone_owner=primary, page_type=home |
  | Sticky bar Text | `sms_click` | button_location=sticky_bar |
  | Footer email | `email_click` | button_location=footer |
  | Footer Get directions | `directions_click` | button_location=footer |

- **`generate_lead`** is covered by the local browser tests (EN + ES, sticky sheet, inline and contact-page forms). I didn't submit a lead on production because it would email Nidia and John. To check it yourself, submit a lead named "TEST – please ignore" with `?debug_mode=1` on your phone.
- **Why `click_to_call` shows 0 in 28 days:**
  - The event fires. GA4 received it every time in the test above.
  - With only ~8 real Louisiana users in that window, zero taps is plausible.
  - Data-center traffic (Moses Lake, Ashburn, San Jose) inflated the user count. Most of it is now excluded from loading GA at all.
  - Visits from browsers tagged `?internal=1` are dropped once the Internal Traffic filter is Active, so family taps won't show either.
- Also tracked now: `banner_click`, `banner_dismiss` and `map_open` (new in Step 3).

### Step 3: Trust and conversion
- **Google reviews badge:** "★ 5.0 on Google · 40+ reviews" / "★ 5.0 en Google · más de 40 reseñas".
  - Placed under the hero CTA and on /contact.
  - Links to `https://search.google.com/local/reviews?placeid=ChIJV7bqD4evIIYRPMyFYHBSMyk`.
  - The rating and count live in `site.googleRating`. No AggregateRating/Review schema (a test enforces this).
- **Leave-a-review link** (footer, reviews section, form success state) now points to `https://search.google.com/local/writereview?placeid=ChIJV7bqD4evIIYRPMyFYHBSMyk`.
- **"Visit our office"** on /contact and /service-area/metairie (EN + ES):
  - address and hours
  - a large **Get directions** button (Google Maps directions pinned to the place ID)
  - a click-to-load map (no Google scripts until tapped, fixed-ratio box, so no layout shift)
  - parking and entrance info: hidden until it's supplied (`site.parkingInfo`)
- **Footer:** Get directions link, which appears on mobile too.
- **Seasonal banner**, computed from today's date in Central time (never hardcoded). A tiny script in `<head>` picks the season before first paint, so there's no layout shift.

  | Dates | Banner |
  |---|---|
  | Oct 15 – Dec 7 | "Medicare Annual Enrollment ends December 7: {N} days left. Free plan reviews, weekends too." + Call button |
  | Dec 8 – Dec 31 | "Turning 65 or new to Medicare? We help year-round." + turning-65 guide link |
  | Jan 1 – Mar 31 | "Not happy with your Medicare Advantage plan? You can switch once by March 31." + MA Open Enrollment guide link |

  - Dismissible: remembered for the browser session.
  - Accessible: a labeled region with a labeled dismiss button.
  - EN + ES.
  - Tracks `banner_click` (season, link type).

### Step 4: "Louisiana Medicare Part C"
- **Title:** `Medicare Advantage (Part C) Plans in Louisiana (2027) | Martinez Insurance Solutions`. ES: `Planes Medicare Advantage (Parte C) en Luisiana (2027) | …`.
- **H1:** `Medicare Advantage (Part C) Plans in Louisiana` / `Planes Medicare Advantage (Parte C) en Luisiana`.
- The meta description already had "Part C" and "Louisiana".
- **New section "How many Medicare Advantage (Part C) plans are in your parish?" (EN + ES)**
  - Source: CMS's official **CY2027 Landscape file**, `CY2027_Landscape_202611.csv` from `https://www.cms.gov/files/zip/cy2027-landscape-202611.zip` (ReadMe: "Data Last Updated: 11/01/2026"). The file is cited on the page.
  - Counts only, never plan names, premiums or benefits.

  | Parish | HMO | PPO | SNP | Total |
  |---|---|---|---|---|
  | Orleans | 17 | 17 | 33 | 67 |
  | Jefferson | 17 | 16 | 33 | 66 |
  | St. Tammany | 10 | 16 | 31 | 57 |
  | St. Bernard | 12 | 11 | 30 | 53 |
  | St. Charles | 16 | 16 | 30 | 62 |
  | St. John the Baptist | 12 | 10 | 31 | 53 |
  | East Baton Rouge | 16 | 17 | 32 | 65 |

  - What counts as one plan: one plan option (contract-plan-segment) offered in the parish.
  - HMO includes HMO-POS; PPO includes regional PPO; SNP includes D-SNP, C-SNP and I-SNP.
  - Not counted: drug-only plans (PDP) and employer plans (which aren't in the file).
  - The counts were computed twice, independently (a Python script and the Node refresh script), and match.
  - Data: `src/data/ma-landscape-la.json`. Refresh with `node scripts/refresh-ma-landscape.mjs`, which finds the newest landscape zip on cms.gov.
- **Already present in EN + ES (confirmed):**
  - H2 "Medicare Part C plans in Louisiana" / "Planes de la Parte C de Medicare en Luisiana"
  - FAQ "Is Medicare Advantage the same as Part C?" / "¿Medicare Advantage es lo mismo que la Parte C?"

### Step 5: Double down on what's ranking
- **Every ES city page** (Nueva Orleans, Metairie, Kenner, Gretna, Chalmette, Slidell, Covington, Baton Rouge) has:
  - the H2 "Agentes de seguros que hablan español en {Ciudad}", with 2–3 sentences written for that city
  - the FAQ "¿Hay agentes de Medicare que hablen español en {Ciudad}?"
  - EN mirrors this ("Spanish-speaking insurance agents in {City}"), because the content tests require EN and ES to match structurally.
- **EN city pages and the home page** have the line "Spanish-speaking Medicare agents (Hablamos español)".
- **Turning 65:**
  - Every city page links to the turning-65 guide with "Turning 65 in {City}? Get local Medicare help" (ES: "¿Cumple 65 en {Ciudad}? Obtenga ayuda local con Medicare").
  - The home page uses "Turning 65 in Greater New Orleans? Get local Medicare help".
  - New guide FAQ: "Where can I get Medicare help near me when I turn 65?"
- **Dental & vision:**
  - The title already matched exactly.
  - New and renamed sections: "Dental insurance for seniors and people on Medicare", "Under 65 dental plans" (expanded with family plans) and "How to choose a dental plan: a checklist".
  - New FAQ: "Does a Medicare Advantage plan include dental coverage?"
  - Re-verified on medicare.gov.
  - The home services grid and the health-insurance page already link to it.

### Step 6: New guide on finding a doctor in your network
- **URLs:** EN `/guides/find-doctor-medicare-advantage-new-orleans`, ES `/es/guias/encontrar-medico-medicare-advantage-nueva-orleans`.
- **Covers:**
  - how to check: plan directory, calling the office (with the exact plan name and year), Medicare Plan Finder
  - "Ochsner, LCMC Health and other health systems", only as examples of what people ask about
  - an HMO vs PPO referral and network table
  - what happens when a doctor leaves the network (notice rules, continuing care, possible Special Enrollment Period)
  - questions to ask during AEP
  - how we check networks
- No doctors or practices are named or recommended; one FAQ says so explicitly.
- FAQ + Article schema + byline.
- Linked from /medicare-advantage, every city page, the AEP page and the guides hub.

### Step 7: Spanish Medigap
- **ES title and H1:** `Seguro Suplementario de Medicare (Medigap) en Luisiana`.
- **"Seguro suplementario de Medicare"** now appears naturally in the headings.
- **FAQs:** "¿Qué plan suplementario me conviene?" and "¿Plan G o Plan N: cuál es la diferencia?"
  - Plan G vs N verified against medicare.gov's Medigap comparison chart.
  - EN gets the matching "Plan G vs Plan N" FAQ.

### Step 8: Sitemap and IndexNow
- Sitemap `lastmod` set to 2026-11-18 for every changed page, and the new guide was added automatically.
- On each production deploy, the IndexNow GitHub Action submits URLs whose `lastmod` changed.

---

## Production verification (curl, November 18)

**After the Steps 1–3 deploy** (commit 25256e2):

| Check | Result |
|---|---|
| "100 A" on /, /contact, Metairie (EN/ES) | 0 occurrences |
| Address in InsuranceAgency JSON-LD | `110 Veterans Blvd, Suite A` |
| `openingHoursSpecification` | Mon–Fri 08:00–18:30, Sat–Sun 10:00–16:00 |
| `sameAs` | GBP place-ID URL; no AggregateRating/Review |
| Hours and "Weekend appointments available" / "Citas los fines de semana" | /, /es, /contact, Metairie (EN/ES), AEP (EN/ES) |
| Review badge | / and /contact |
| "Visit our office" with `destination_place_id=ChIJV7bqD4evIIYRPMyFYHBSMyk` | /contact, /service-area/metairie, /es/area-de-servicio/metairie |
| Footer directions link | present |
| Seasonal banner | present |
| Write-review links (`local/writereview?placeid=…`) | present |

**Step 2 live tap test:** `click_to_call`, `sms_click`, `email_click` and `directions_click` all reached GA4 with the DebugView flag (table in Step 2).

**After the final deploy** (commit 382ce94):

| Check | Result |
|---|---|
| /medicare-advantage title | `Medicare Advantage (Part C) Plans in Louisiana (2027) \| Martinez Insurance Solutions` |
| /medicare-advantage H1 | `Medicare Advantage (Part C) Plans in Louisiana` |
| /es/medicare-advantage title | `Planes Medicare Advantage (Parte C) en Luisiana (2027) \| …` |
| /es/medicare-advantage H1 | `Planes Medicare Advantage (Parte C) en Luisiana` |
| Parish section | H2 present; Orleans row 17 / 17 / 33; cites `cy2027-landscape-202611.zip`; H2 "Medicare Part C plans in Louisiana" and the Part C FAQ present |
| /es/area-de-servicio/baton-rouge | H2 "Agentes de seguros que hablan español en Baton Rouge", the FAQ, and "¿Cumple 65 en Baton Rouge? Obtenga ayuda local con Medicare" |
| /service-area/kenner | "Spanish-speaking Medicare agents (Hablamos español)", "Turning 65 in Kenner? Get local Medicare help", find-doctor link |
| Home | Spanish line and "Turning 65 in Greater New Orleans? Get local Medicare help" |
| /es/seguro-suplementario-medicare | Title and H1 "Seguro Suplementario de Medicare (Medigap) en Luisiana"; both new FAQs |
| /dental-vision-insurance | Title unchanged (already correct); 3 new/renamed sections and the new FAQ |
| Find-doctor guide (EN + ES) | 200; Article + FAQPage schema; linked from MA, AEP, Kenner (every city) and the guides hub |
| Turning-65 guide | New FAQ present |
| Sitemap | 70 URLs; new guide included (EN/ES); landing pages excluded; 34 URLs at lastmod 2026-11-18 |
| IndexNow | Key file 200; GitHub Action run 44234040458 after the deploy: success |

`npm run verify` (final run):
- Passed: type check, lint, 217 unit tests, build, all Playwright tests (SEO, links, axe, keyboard, form, language, content QA, analytics, banner, office, badge) and Lighthouse CI on 72 URLs.
- One exception: `/es/area-de-servicio` (unchanged in this update) scored 94 on its single Lighthouse run. Re-run three times, it scored 100 / 100 / 100. Every other URL scored ≥95 / 100 / 100 / 100. The noindex ad landing pages are excluded from the SEO check by design.


---

## GA4: exact click-by-click steps

### A. Mark the 5 lead events as key events
1. Open **analytics.google.com** and pick the Martinez Insurance Solutions property (G-WZ214QR591).
2. Click **Admin** (gear icon, bottom-left).
3. Under **Data display**, click **Events**.
4. For each event below, find its row and click the **star** in the "Mark as key event" column until it turns blue:
   - `generate_lead`
   - `click_to_call`
   - `sms_click`
   - `email_click`
   - `directions_click`
5. **If an event isn't in the list yet** (events appear 24–48 hours after they first fire):
   1. Go to **Admin → Data display → Key events → New key event**.
   2. Type the event name exactly as above, all lowercase.
   3. Click **Save**.
6. **Optional:** the default key events `purchase`, `qualify_lead` and `close_convert_lead` will never fire on this site.
   1. In **Admin → Data display → Key events**, click the star (or **⋮ → Unmark as key event**) on each.
   2. This keeps the key-events report clean.
7. **Test it:**
   1. Open `https://www.martinezinsurancesolutions.com/?debug_mode=1` on your phone.
   2. In **Admin → Data display → DebugView**, pick your phone.
   3. Tap Call, Text, an email link and Get directions, then submit a lead named "TEST – please ignore".
   4. Key events show with a green flag in DebugView.

### B. Register the 5 custom dimensions
1. Go to **Admin → Data display → Custom definitions**.
2. On the **Custom dimensions** tab, click **Create custom dimension**.
3. Fill it in, click **Save**, and repeat for each row (names are case-sensitive):

   | Dimension name | Scope | Event parameter |
   |---|---|---|
   | Button location | Event | `button_location` |
   | Phone owner | Event | `phone_owner` |
   | Page type | Event | `page_type` |
   | Locale | Event | `locale` |
   | City | Event | `city` |

4. Data fills in from the moment each dimension is created (not retroactively). Expect 24–48 hours before it appears in reports and Explorations.

**Recommended:**
- In **Admin → Data streams → (web stream) → Enhanced measurement**, turn **Outbound clicks** off. GA's own `click` event duplicates the site's `email_click`, `directions_click` and `outbound_click`.
- Also check that **Admin → Data filters → Internal Traffic** is **Active**.

---

## Search Console → Request indexing (in priority order)

URL Inspection → paste the URL → **Request indexing**.

1. https://www.martinezinsurancesolutions.com/medicare-advantage
2. https://www.martinezinsurancesolutions.com/es/medicare-advantage
3. https://www.martinezinsurancesolutions.com/es/area-de-servicio/baton-rouge
4. https://www.martinezinsurancesolutions.com/dental-vision-insurance
5. https://www.martinezinsurancesolutions.com/es/seguro-dental-y-de-vision
6. https://www.martinezinsurancesolutions.com/guides/find-doctor-medicare-advantage-new-orleans
7. https://www.martinezinsurancesolutions.com/es/guias/encontrar-medico-medicare-advantage-nueva-orleans
8. https://www.martinezinsurancesolutions.com/es/seguro-suplementario-medicare
9. https://www.martinezinsurancesolutions.com/guides/turning-65-medicare-louisiana
10. https://www.martinezinsurancesolutions.com/es/guias/cumplir-65-medicare-luisiana
11. https://www.martinezinsurancesolutions.com/service-area/metairie
12. https://www.martinezinsurancesolutions.com/es/area-de-servicio/metairie
13. https://www.martinezinsurancesolutions.com/
14. https://www.martinezinsurancesolutions.com/es
15. https://www.martinezinsurancesolutions.com/contact
16. https://www.martinezinsurancesolutions.com/es/contacto
17. https://www.martinezinsurancesolutions.com/es/area-de-servicio/new-orleans
18. https://www.martinezinsurancesolutions.com/es/area-de-servicio/kenner
19. https://www.martinezinsurancesolutions.com/es/area-de-servicio/gretna
20. https://www.martinezinsurancesolutions.com/es/area-de-servicio/chalmette
21. https://www.martinezinsurancesolutions.com/es/area-de-servicio/slidell
22. https://www.martinezinsurancesolutions.com/es/area-de-servicio/covington
23. https://www.martinezinsurancesolutions.com/annual-enrollment-period
24. https://www.martinezinsurancesolutions.com/es/periodo-de-inscripcion-anual
25. EN city pages: /service-area/new-orleans, /kenner, /gretna, /chalmette, /slidell, /covington, /baton-rouge
26. https://www.martinezinsurancesolutions.com/medicare-supplement
27. https://www.martinezinsurancesolutions.com/guides

Search Console allows roughly 10 requests per day. Do 1–10 today and the rest over the next two days. IndexNow already notified Bing (and Copilot/ChatGPT search, which use Bing's index).

---

## Facts and items left out, and why
- **Address placeholder:** the brief said to change the address to "[CONFIRMED ADDRESS]" without filling it in. I used the address the brief quotes from the GBP: `110 Veterans Blvd, Suite A, Metairie, LA 70005`. Change `site.address` if the confirmed address differs.
- **sameAs profiles:** Yelp, Bing Places, Facebook and Instagram were placeholders in the brief, so they're left out (add the URLs to `site.sameAs`). The GBP URL is the Maps place-ID link.
- **Parking and entrance info:** a placeholder in the brief, so it's hidden until you add text to `site.parkingInfo`.
- **"40+ reviews" / "5.0":** taken from the brief. I couldn't check the live GBP count from here. Update `site.googleRating` when the count changes.
- **`generate_lead` on production:** not submitted, so the team doesn't get a fake lead. It's covered by local tests; please do one DebugView test lead.
- **Plan N premiums:** I didn't say Plan N "usually costs less" (not stated on medicare.gov). The FAQ compares benefits only.
- **Community demographics:** the Spanish city copy avoids claims about where families come from or how many there are, since those can't be verified on the allowed sources.
- **Network notice timing:** the find-a-doctor guide uses Medicare & You's wording (notice if you've seen a primary care or behavioral health provider in the past 3 years). It doesn't give a number of days, because the 30/45-day CMS rule wasn't confirmed on the allowed pages.
