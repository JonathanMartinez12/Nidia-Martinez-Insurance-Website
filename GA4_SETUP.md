# GA4 setup checklist: Martinez Insurance Solutions

Measurement ID: **G-WZ214QR591** (GA4 property for www.martinezinsurancesolutions.com)

The website code is done. It sends every event below as soon as the ID is set in Vercel. These are the one-time steps in Vercel and Google Analytics.

---

## 1. Turn GA on in Vercel (5 minutes)

1. Go to **vercel.com**, open this website's project, then **Settings → Environment Variables**.
2. Click **Add New**:
   - **Key:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-WZ214QR591`
   - **Environments:** check **Production** only
   - Click **Save**.
3. Go to **Deployments**. Open the **⋯** menu on the latest Production deployment and choose **Redeploy**.
   - **Uncheck "Use existing Build Cache"**. The ID is baked in at build time, so a cached build won't pick it up.
   - Click **Redeploy**.
4. When it's done, open the site and check that GA loaded:
   - In Chrome, open DevTools → **Network**, filter `gtag`, and reload. There should be **exactly one** `gtag/js?id=G-WZ214QR591` request.
   - Or open the Console and type `dataLayer`. You should see `config`, `G-WZ214QR591`.

> Browsers that send **Global Privacy Control** (Brave, DuckDuckGo, Firefox with GPC turned on) never load GA. That's on purpose. Test in regular Chrome or Safari.

---

## 2. Test every button with DebugView (on your phone)

1. On your phone, open **https://www.martinezinsurancesolutions.com/?debug_mode=1&internal=1**
   - `debug_mode=1` shows your taps live in DebugView, and stays on while you browse in that tab.
   - `internal=1` marks this phone as internal traffic, so your tests (and your parents' visits) can be filtered out of reports. See step 6.
2. On a computer, open **analytics.google.com → Admin (gear) → Data display → DebugView**. Pick your phone in the "Debug devices" menu at the top.
3. Tap each button and watch the event appear (usually within 10 seconds):

| Tap this | Event | Check these parameters |
|---|---|---|
| Sticky bar **Call** | `click_to_call` | button_location = sticky_bar, phone_owner = primary |
| Sticky bar **Text** | `sms_click` | button_location = sticky_bar |
| Sticky bar **Request a Call** | `form_open` | button_location = sticky_bar |
| Tap into the Name field | `form_start` | form_location = sticky_sheet |
| **Add details (optional)** | `form_details_expand` | |
| Submit empty | `form_error` | error_type = validation |
| Submit name + phone (use a test name) | `generate_lead` | form_location, interests, lead_language |
| Phone number in the header | `click_to_call` | button_location = header |
| Nidia's number (home page, under the buttons) | `click_to_call` | phone_owner = nidia |
| Email link in the footer | `email_click` | button_location = footer |
| **Get directions** (home page, office section) | `directions_click` | |
| **ES** language switch | `language_switch` | from = en, to = es |
| **A+** text size | `text_size_toggle` | size = large |
| Open any FAQ | `faq_open` | faq_question |
| Scroll a guide to the bottom | `guide_scroll` | percent_scrolled = 25 / 50 / 75 / 90 |
| A Medicare.gov / SSA.gov link in a guide | `outbound_click` | link_domain |
| Any page | `page_view` | page_type, content_group, locale (and service / city where relevant) |

4. Repeat a few taps on a Spanish page (`/es`). Events should show **locale = es**.
5. When done, open **https://www.martinezinsurancesolutions.com/?debug_mode=0** to stop debug mode. Leave `internal` on for your own phone.

> Test leads still email the team. Use an obvious name like "TEST – please ignore".

---

## 3. Mark key events (conversions)

Events only appear in Admin after they've fired at least once. Do step 2 first, then wait up to 24 hours.

1. **Admin → Data display → Events**
2. Turn on the **Mark as key event** star for:
   - [ ] `generate_lead`
   - [ ] `click_to_call`
   - [ ] `sms_click`
   - [ ] `email_click`
   - [ ] `directions_click`

---

## 4. Register custom dimensions

**Admin → Data display → Custom definitions → Create custom dimension.** For each row below:
- **Dimension name:** as shown
- **Scope:** as shown
- **Event parameter / User property:** exactly as shown (case-sensitive)

| Dimension name | Scope | Event parameter |
|---|---|---|
| Button location | Event | `button_location` |
| Phone owner | Event | `phone_owner` |
| Page type | Event | `page_type` |
| Service | Event | `service` |
| City | Event | `city` |
| Locale | Event | `locale` |
| Form location | Event | `form_location` |
| Interests | Event | `interests` |
| Error type | Event | `error_type` |
| FAQ question | Event | `faq_question` |
| Percent scrolled | Event | `percent_scrolled` |
| Link domain | Event | `link_domain` |
| Metric name | Event | `metric_name` |
| Preferred language | **User** | `preferred_language` (user property) |

Optional extras worth adding: `lead_language`, `best_time`, `destination`, `link_text`, `rating` (web vitals), `requested_path` (404s).

`content_group` needs no setup. It fills GA4's built-in **Content group** dimension automatically (home, service, city, guide, etc.).

---

## 5. Data retention → 14 months

**Admin → Data collection and modification → Data retention:**
- **Event data retention:** 14 months
- **Reset user data on new activity:** ON
- **Save**

---

## 6. Internal traffic (you and your family)

The site tags any browser that visited `?internal=1` with `traffic_type = internal`. That tag lasts 2 years on that browser; `?internal=0` removes it.

1. **Send this link** to everyone whose visits shouldn't count (Nidia, John, family), and have them open it **once on each phone and computer** they use:
   **https://www.martinezinsurancesolutions.com/?internal=1**
2. **Define the rule:** **Admin → Data streams → (your web stream) → Configure tag settings → Show more → Define internal traffic → Create**
   - Rule name: `Internal (cookie)`
   - traffic_type value: `internal`
   - Match type: *IP address equals*, plus your office IP if you know it (whatismyip.com from the office Wi-Fi). The site's cookie already sets traffic_type, so the IP rule is just a backup.
   - **Create**
3. **Activate the filter:** **Admin → Data collection and modification → Data filters → "Internal Traffic"**. Change **Filter state** from *Testing* to **Active**, then **Save**.
   - Leave it on *Testing* for a day first. In reports, add the "Test data filter name" dimension to confirm only your own visits are matched.

> Once the filter is Active, your own taps no longer appear in standard reports. They still show in DebugView.

---

## 7. Enhanced measurement (avoid double counting)

**Admin → Data streams → (web stream) → Enhanced measurement (gear icon):**
- **Page views → Advanced → "Page changes based on browser history events": OFF.** The site sends its own page_view with page_type, so leaving this on would double-count.
- **Scrolls: OFF.** The site sends `guide_scroll` at 25/50/75/90% on guides, service and city pages instead.
- **Outbound clicks: OFF** (optional). The site sends `outbound_click` with `link_domain`.
- Leave **Site search**, **Form interactions** (or turn off; the site sends its own form events), **Video engagement** and **File downloads** as you like.

---

## 8. Link Search Console

**Admin → Product links → Search Console links → Link:**
1. **Choose accounts** → select `https://www.martinezinsurancesolutions.com/` (or the domain property) → **Confirm**.
2. **Next** → choose the web stream → **Next** → **Submit**.
3. In **Reports → Library**, publish the **Search Console** collection so the "Queries" and "Google organic search traffic" reports show up in the left menu.

---

## 9. Tag your traffic sources (so GA knows where people came from)

Google search, Bing and most social sites are detected automatically. For links you control, add UTM tags:

| Where | Use this link |
|---|---|
| Google Business Profile → Website | `https://www.martinezinsurancesolutions.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Facebook page / posts | `…/?utm_source=facebook&utm_medium=social` |
| QR code (cards, flyers, office door) | `…/?utm_source=qr&utm_medium=print&utm_campaign=office-card` (change the campaign per printed piece) |
| Paid ads | `…/?utm_source=google&utm_medium=cpc&utm_campaign=…` (Google Ads auto-tags if you link it) |
| Spanish materials | point to `/es` with the same tags, e.g. `…/es?utm_source=qr&utm_medium=print&utm_campaign=tarjeta` |

---

## 10. Suggested Explorations

**Explore → Blank** for each. Import the dimensions and metrics listed, then drag them into place.

**a) Leads by source / medium**
- Dimensions: Session source / medium, Event name
- Metric: Event count (or Key events)
- Filter: Event name matches regex `generate_lead|click_to_call|sms_click|email_click|directions_click`
- Rows: Session source / medium. Columns: Event name.

**b) Calls by button location**
- Dimensions: Button location, Phone owner, Locale
- Metric: Event count
- Filter: Event name = `click_to_call`
- Rows: Button location. Columns: Phone owner. Add Locale as a second row to compare EN vs ES.

**c) Leads by page type and city**
- Dimensions: Page type, City, Service, Event name
- Metric: Event count
- Filter: Event name matches regex `generate_lead|click_to_call|sms_click`
- Rows: Page type → City (and Service). Values: Event count.

**d) Guide scroll depth**
- Technique: **Funnel exploration** (open funnel)
- Steps:
  1. `page_view` where page_type = guide
  2. `guide_scroll` percent_scrolled = 25
  3. … = 50
  4. … = 75
  5. … = 90
- Breakdown: Page path and screen class (or Page title)

**e) EN vs ES lead rates**
- Free form
- Dimensions: Locale (or Preferred language)
- Metrics: Active users, Sessions, Key events, Session key event rate
- Rows: Locale

**f) QR code visits → leads**
- Segment: Sessions where Session source = `qr`
- Dimensions: Session campaign, Landing page
- Metrics: Sessions, Key events, Session key event rate
- Funnel option: `session_start` (source = qr) → `form_open` or `click_to_call` → `generate_lead`

Also useful:
- **Web vitals:** event `web_vitals`, dimension Metric name, average of `value` by Page type. CLS is reported ×1000.
- **404s:** event `not_found` by `requested_path`. Fix or redirect anything that shows up repeatedly.

---

## What the site sends (reference)

- **Every event:**
  - `page_type` (home, service, city, service_area, guide, guides_hub, about, agent, contact, faq, aep, scam, legal, not_found)
  - `locale`
  - `page_path`
  - `service` and `city` where relevant
- **page_view:** the above plus `content_group`. User property `preferred_language`.
- **Lead events:**
  - `click_to_call` (button_location, phone_owner)
  - `sms_click`
  - `email_click`
  - `directions_click`
  - `form_open`
  - `form_start`
  - `form_details_expand`
  - `form_error` (error_type: validation | server | spam_blocked)
  - `generate_lead` (interests, best_time, form_location, lead_language)
- **Engagement events:**
  - `cta_click`
  - `language_switch`
  - `text_size_toggle`
  - `faq_open`
  - `guide_scroll`
  - `toc_click`
  - `internal_link_click`
  - `carrier_section_view`
  - `video_play` / `video_complete`
  - `outbound_click`
  - `not_found`
- **Site health:** `web_vitals` (metric_name, value, rating)
- **Privacy:**
  - No names, typed phone numbers, emails or message text are ever sent. Every event is filtered before it leaves the browser, and tests enforce it.
  - GA doesn't load at all when the browser sends Global Privacy Control.
