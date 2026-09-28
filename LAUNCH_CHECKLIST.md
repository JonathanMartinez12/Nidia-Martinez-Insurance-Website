# Launch checklist — Martinez Insurance Agency

Work top to bottom. Items marked **BLOCKER** must be done before the site goes live.

---

## 0. Fill in the config (`src/config/site.ts`)

Run `npm run check:launch` to see what's still open.

- [ ] **BLOCKER — TPMO disclaimer "Y":** set `site.compliance.plansOffered` to the number of
      plans/products the organizations you represent offer in your service area (confirm the
      figure you use for compliance). `NODE_ENV=production npm run verify` fails until it's set.
- [ ] Confirm Nidia's phone number: the site uses **(504) 913-2398** (from the brief), but her
      business card shows **504-913-7153**. Update `primaryPhone` and Nidia's `phone` if needed.
- [ ] Confirm whether **110 Veterans Blvd. Suite 100 A, Metairie, LA 70005** (from Nidia's Plus 65
      business card) is the agency's public office address before adding it as `site.address`.
- [ ] John's years of experience (`yearsExperience`) — turns on his badge and the combined-years line.
- [ ] Louisiana license numbers and NPNs for both agents (`licenseNumber`, `npn`).
- [ ] Street address (or confirm you're a service-area business with no public address).
- [ ] Office hours (`site.hours`).
- [ ] Confirm Blue Cross and Blue Shield of Louisiana for Medicare Supplement → `confirmed: true`.
- [ ] Replace the interim "M" logo in `public/brand/` with official Martinez Insurance Agency
      artwork if there is one (then run `npm run icons` to regenerate favicons).
- [ ] Review every page's copy with both agents (facts, tone, Spanish wording).
- [ ] Set `site.contentLastReviewed` to the date of that review.

## 1. Domain + Vercel

- [ ] Buy/choose the domain (short, memorable; e.g. brand name + "medicare"). Decide on `www` vs apex
      and redirect the other one to it in Vercel → Domains.
- [ ] Import the GitHub repo into Vercel (framework preset: Next.js).
- [ ] Environment variables (Production): `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`,
      `CONTACT_TO_EMAILS`, `CONTACT_FROM_EMAIL`, optionally `NEXT_PUBLIC_GA_ID`, Turnstile keys.
- [ ] Add the custom domain, wait for HTTPS, redeploy.
- [ ] Spot-check: `https://your-domain/robots.txt`, `/sitemap.xml`, `/es`, a 404 page, the
      language toggle, the phone links on a real phone.
- [ ] Submit a real test lead in English and in Spanish; confirm both inboxes receive it with the
      right "For:" tag, and that the confirmation email arrives in the chosen language.

## 2. Resend (email delivery)

- [ ] Create a Resend account → **Domains → Add domain** (use a subdomain such as
      `mail.your-domain.com` or the root domain).
- [ ] Add the DNS records Resend shows: **SPF** (TXT), **DKIM** (TXT/CNAME) and the return-path
      MX; wait for "Verified".
- [ ] Add a **DMARC** record, e.g. `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:you@your-domain.com`
      (tighten to `quarantine` after a few clean weeks).
- [ ] Create an API key (sending access only) → `RESEND_API_KEY`.
- [ ] `CONTACT_FROM_EMAIL` = an address on the verified domain, e.g.
      `Martinez Insurance Agency <leads@your-domain.com>`.
- [ ] Add the from-address to both inboxes' contacts/safe senders (Outlook and Gmail) so leads
      never land in spam.

## 3. Google Search Console

- [ ] Add a **Domain property** (DNS TXT verification covers http/https/www/apex).
- [ ] Submit `https://your-domain/sitemap.xml` (it lists every English and Spanish URL with
      hreflang alternates — one sitemap covers both locales).
- [ ] URL Inspection → request indexing for `/`, `/es`, `/medicare-advantage`,
      `/es/medicare-advantage`, `/contact`, `/es/contacto`.
- [ ] After a week: check Pages (indexing), Enhancements (Breadcrumbs, FAQ if shown),
      and the International Targeting/hreflang report for errors.
- [ ] Run a few URLs through the [Rich Results Test](https://search.google.com/test/rich-results).

## 4. Bing Webmaster Tools

- [ ] Sign in and **import from Google Search Console** (fastest), or verify via DNS.
- [ ] Submit the sitemap. (Bing also powers several AI/voice assistants — worth the 5 minutes.)

## 5. Google Business Profile (the #1 source of local calls)

- [ ] Create/claim the profile at business.google.com with the exact business name
      **Martinez Insurance Agency** (no keywords stuffed into the name).
- [ ] **Primary category:** Insurance agency. **Additional:** Health insurance agency,
      Life insurance agency, Insurance broker. In the category picker also search "Medicare" — if a
      Medicare-specific category is offered in your region, add it.
- [ ] **Service-area business:** if you don't receive clients at a public office, hide the address
      and list service areas (up to 20): New Orleans, Metairie, Kenner, Harahan, River Ridge,
      Chalmette, Gretna, Marrero, Slidell, Mandeville, Covington, LaPlace, Baton Rouge, plus the
      parishes (Orleans, Jefferson, St. Bernard, St. Tammany, St. John the Baptist).
- [ ] Phone: **(504) 913-2398** (identical to the website). Website: the home page URL, optionally
      with `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- [ ] Hours (same as `site.hours`), "Identifies as" attributes you're comfortable sharing, and
      **Languages spoken: Spanish** / "Se habla español".
- [ ] Description (max 750 characters) — paste one of these and edit to taste:

  > **EN:** Martinez Insurance Agency is a local, licensed husband-and-wife team — Nidia and John
  > Martinez — helping Greater New Orleans and all of Louisiana with Medicare Advantage, Medicare
  > Supplement, Part D, Special Needs Plans, dental and vision, final expense, life, hospital
  > indemnity and under-65 health insurance. We meet in person, explain your options in plain
  > English or Spanish, and our help costs you nothing. Hablamos español. We do not offer every
  > plan available in your area.

  > **ES:** Martinez Insurance Agency es un matrimonio de agentes locales con licencia —Nidia y John
  > Martinez— que ayuda a residentes del área de Nueva Orleans y de toda Luisiana con Medicare
  > Advantage, Medicare Suplementario, Parte D, planes para necesidades especiales, dental y visión,
  > gastos finales, vida, indemnización hospitalaria y seguros de salud para menores de 65. Nos
  > reunimos en persona, le explicamos sus opciones en español o inglés y nuestra ayuda no le cuesta
  > nada. No ofrecemos todos los planes disponibles en su área.

- [ ] **Services:** add each of the 9 products with a one-line description (copy from the site).
- [ ] **Photos:** logo, a cover image, both headshots, the two of you together, meeting a client
      (with written permission), your office/area. No stock photos. Add a few new photos monthly.
- [ ] **Appointment link:** `https://your-domain/contact` (Spanish: `/es/contacto`).
- [ ] **Posts:** post weekly during the Annual Enrollment Period (Oct 15 – Dec 7) and monthly
      otherwise. Ideas: "Your Annual Notice of Change arrived — here's what to check", "AEP is open
      through Dec 7", "How to spot a Medicare scam call", "New to Medicare? Your 7-month window",
      "Diagnosed with diabetes? Ask about C-SNPs". Always link back to the matching page. Keep posts
      educational; no gifts, no pressure, include the TPMO disclaimer where appropriate.
- [ ] Turn on messaging only if someone will answer within a few hours.
- [ ] Seed the Q&A section with 3–5 real common questions and answer them yourselves.

## 6. NAP citations (Name, Address, Phone — identical everywhere)

Use exactly: **Martinez Insurance Agency · (504) 913-2398 · your-domain.com** (plus the address
if public). Keep a spreadsheet of logins.

- [ ] Apple Business Connect (Apple Maps)
- [ ] Bing Places for Business
- [ ] Yelp for Business
- [ ] Better Business Bureau (BBB) — Greater New Orleans
- [ ] Facebook business page (and link it from the site config `sameAs`)
- [ ] LinkedIn company page + both agents' profiles pointing to the site
- [ ] Nextdoor business page
- [ ] Yellow Pages (yp.com), Manta, Foursquare
- [ ] Local chambers you join: e.g. Jefferson Chamber of Commerce, New Orleans Chamber of
      Commerce, St. Tammany chambers, Hispanic Chamber of Commerce of Louisiana
- [ ] Carrier "find an agent" directories, where your appointments make you eligible
- [ ] After each profile goes live, add its URL to `site.sameAs` in the config (feeds schema).

## 7. Reviews

- [ ] Get your Google review link (Business Profile → "Ask for reviews") and shorten it.
- [ ] Ask every happy client after you've finished helping them — in person, then a short text or
      email with the link (English and Spanish versions).
- [ ] Never offer anything in exchange for a review, never write or buy reviews, and never ask
      clients to mention health details.
- [ ] Reply to every review within a few days, thankfully and without any health or plan
      specifics (privacy).
- [ ] Only add a review to `site.reviews` if it's real and you have the client's permission.

## 8. GA4 conversions

- [ ] Create a GA4 property + web data stream → copy the Measurement ID to `NEXT_PUBLIC_GA_ID`
      and redeploy (GA loads only when this is set).
- [ ] The site already sends `generate_lead` (successful form) and `click_to_call` (every
      `tel:` link). In GA4 → Admin → Events, mark both as **Key events**.
- [ ] Link GA4 to Search Console (and to Google Ads if you run ads).
- [ ] Optional: add a cookie/consent banner if you later add advertising pixels.

## 9. After launch

- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/) on `/` and `/es` (mobile).
- [ ] Watch Search Console → Pages for "Not found (404)" and "Duplicate" warnings.
- [ ] Every August: update content for the coming Annual Enrollment Period and re-check facts
      (plan names, carriers, dates), then bump `site.contentLastReviewed`.
- [ ] Re-run `npm run verify` before every deploy that changes content or code.
