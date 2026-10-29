import { expect, test, type Page } from '@playwright/test';

/**
 * GA4: the e2e build uses a dummy ID (G-TEST000000, see scripts/verify.ts). The gtag library is
 * stubbed and hits are blocked, so these tests read the events straight from window.dataLayer.
 */
const GA_ID = process.env.E2E_GA_ID ?? 'G-TEST000000';
const PII = /@|(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;

type Ev = { name: string; params: Record<string, unknown> };

async function setup(page: Page) {
  let gtagLoads = 0;
  await page.route('https://www.googletagmanager.com/gtag/js**', (route) => {
    gtagLoads += 1;
    return route.fulfill({ status: 200, contentType: 'text/javascript', body: '/* gtag stub */' });
  });
  await page.route(/google-analytics\.com|analytics\.google\.com/, (route) => route.fulfill({ status: 204, body: '' }));
  // Keep the page in place when a test clicks a link (our listener runs first, in the capture phase).
  await page.addInitScript(() => {
    window.addEventListener('click', (e) => {
      const a = (e.target as Element | null)?.closest?.('a[href]');
      if (a && !(a as HTMLElement).dataset.allowNav) e.preventDefault();
    });
  });
  return { gtagLoads: () => gtagLoads };
}

async function events(page: Page): Promise<Ev[]> {
  return page.evaluate(() =>
    ((window as unknown as { dataLayer?: IArguments[] }).dataLayer ?? [])
      .map((a) => Array.from(a))
      .filter((a) => a[0] === 'event')
      .map((a) => ({ name: a[1] as string, params: (a[2] ?? {}) as Record<string, unknown> })),
  );
}

async function waitForEvent(page: Page, name: string, match: Record<string, unknown> = {}): Promise<Ev> {
  let found: Ev | undefined;
  await expect
    .poll(
      async () => {
        found = (await events(page)).find((e) => e.name === name && Object.entries(match).every(([k, v]) => e.params[k] === v));
        return Boolean(found);
      },
      { message: `${name} ${JSON.stringify(match)}` },
    )
    .toBe(true);
  return found!;
}

async function expectNoPii(page: Page) {
  for (const e of await events(page)) {
    for (const [k, v] of Object.entries(e.params)) {
      expect(['name', 'phone', 'email', 'message']).not.toContain(k);
      if (k === 'page_location' || k === 'page_path' || k === 'destination') continue;
      expect(String(v), `${e.name}.${k}`).not.toMatch(PII);
    }
  }
}

test.describe('GA4 install', () => {
  test('gtag loads exactly once with the configured ID, with page context and preferred_language', async ({ page }) => {
    const ga = await setup(page);
    await page.goto('/es/area-de-servicio/metairie');
    const pv = await waitForEvent(page, 'page_view');
    expect(pv.params).toMatchObject({ page_type: 'city', content_group: 'city', city: 'metairie', locale: 'es' });
    expect(ga.gtagLoads()).toBe(1);
    await expect(page.locator(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)).toHaveCount(1);
    const layer = await page.evaluate(() =>
      (window as unknown as { dataLayer: IArguments[] }).dataLayer.map((a) => Array.from(a)),
    );
    const configs = layer.filter((a) => a[0] === 'config');
    expect(configs).toHaveLength(1);
    expect(configs[0]![1]).toBe(GA_ID);
    expect(configs[0]![2]).toMatchObject({ send_page_view: false });
    expect(layer).toContainEqual(['set', 'user_properties', { preferred_language: 'es' }]);

    // Another page: a new page_view with that page's context.
    await page.goto('/es/seguro-suplementario-medicare');
    await waitForEvent(page, 'page_view', { page_type: 'service', service: 'medicare_supplement' });
  });

  test('does not load GA when Global Privacy Control is on', async ({ page }) => {
    const ga = await setup(page);
    await page.addInitScript(() => Object.defineProperty(navigator, 'globalPrivacyControl', { get: () => true }));
    await page.goto('/');
    await page.waitForTimeout(1500);
    expect(ga.gtagLoads()).toBe(0);
    expect(await page.evaluate(() => typeof (window as unknown as { gtag?: unknown }).gtag)).toBe('undefined');
    await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
  });

  test('?internal=1 tags traffic as internal (cookie), ?internal=0 clears it; ?debug_mode=1 enables DebugView', async ({
    page,
    context,
  }) => {
    await setup(page);
    await page.goto('/?internal=1&debug_mode=1');
    await waitForEvent(page, 'page_view');
    const config = await page.evaluate(() =>
      (window as unknown as { dataLayer: IArguments[] }).dataLayer.map((a) => Array.from(a)).find((a) => a[0] === 'config'),
    );
    expect(config![2]).toMatchObject({ traffic_type: 'internal', debug_mode: true });
    expect((await context.cookies()).find((c) => c.name === 'mis_internal')?.value).toBe('1');

    await page.goto('/faq?internal=0');
    await waitForEvent(page, 'page_view');
    expect((await context.cookies()).find((c) => c.name === 'mis_internal')).toBeUndefined();
    const config2 = await page.evaluate(() =>
      (window as unknown as { dataLayer: IArguments[] }).dataLayer.map((a) => Array.from(a)).find((a) => a[0] === 'config'),
    );
    expect(config2![2]).not.toHaveProperty('traffic_type');
  });

  test('sends Core Web Vitals', async ({ page }) => {
    await setup(page);
    await page.goto('/guides');
    const ev = await waitForEvent(page, 'web_vitals', { metric_name: 'TTFB' });
    expect(ev.params).toMatchObject({ page_type: 'guides_hub' });
    expect(typeof ev.params.value).toBe('number');
  });
});

test.describe('GA4 lead events (desktop)', () => {
  test('tel:, mailto: and directions clicks carry location and owner', async ({ page }) => {
    await setup(page);
    await page.goto('/');
    await waitForEvent(page, 'page_view');
    await page.locator('header a[href^="tel:"]').first().click();
    expect((await waitForEvent(page, 'click_to_call', { button_location: 'header' })).params).toMatchObject({
      phone_owner: 'primary',
      page_type: 'home',
      locale: 'en',
      page_path: '/',
      transport_type: 'beacon',
    });
    await page.locator('[data-call-location="hero"][data-phone-owner="nidia"]').click();
    await waitForEvent(page, 'click_to_call', { button_location: 'hero', phone_owner: 'nidia' });
    await page.locator('footer a[href^="tel:"]').first().click();
    await waitForEvent(page, 'click_to_call', { button_location: 'footer', phone_owner: 'primary' });
    await page.locator('footer a[href^="mailto:"]').click();
    await waitForEvent(page, 'email_click', { button_location: 'footer', transport_type: 'beacon' });
    await page.locator('a[href*="google.com/maps"]').first().click();
    await waitForEvent(page, 'directions_click', { button_location: 'inline', transport_type: 'beacon' });
    await page.locator('header [data-cta="header"]').click();
    await waitForEvent(page, 'cta_click', { button_location: 'header', destination: '/contact' });
    await expectNoPii(page);
  });

  test('city CTA and agent card calls', async ({ page }) => {
    await setup(page);
    await page.goto('/service-area/kenner');
    await waitForEvent(page, 'page_view');
    await page.locator('[data-call-location="city_cta"]').first().click();
    await waitForEvent(page, 'click_to_call', { button_location: 'city_cta', city: 'kenner' });
    await page.locator('#free-consultation a[href^="tel:"]').first().click();
    await waitForEvent(page, 'click_to_call', { button_location: 'city_cta', page_type: 'city' });

    await page.goto('/about');
    await waitForEvent(page, 'page_view', { page_type: 'about' });
    await page.locator('[data-call-location="agent_card"][data-phone-owner="john"]').first().click();
    await waitForEvent(page, 'click_to_call', { button_location: 'agent_card', phone_owner: 'john' });
  });

  test('contact page form: start, details, validation error, then generate_lead without PII', async ({ page }) => {
    await setup(page);
    await page.goto('/contact');
    await waitForEvent(page, 'page_view', { page_type: 'contact' });
    await page.getByRole('button', { name: 'Request a Call' }).click();
    await waitForEvent(page, 'form_error', { error_type: 'validation', form_location: 'contact_page' });
    await page.locator('#contact-name').fill('Ana Analytics');
    await waitForEvent(page, 'form_start', { form_location: 'contact_page' });
    await page.locator('#contact-phone').fill('(504) 555-0187');
    await page.locator('#contact-details-toggle').click();
    await waitForEvent(page, 'form_details_expand', { form_location: 'contact_page' });
    await page.getByTestId('contact-form-full').getByText('Turning 65').click();
    await page.getByTestId('contact-form-full').getByText('Medicare Supplement', { exact: true }).click();
    await page.getByTestId('contact-form-full').getByText('Evening').click();
    await page.locator('#contact-email').fill('ana@example.com');
    await page.waitForTimeout(1600);
    await page.getByRole('button', { name: 'Request a Call' }).click();
    const lead = await waitForEvent(page, 'generate_lead');
    expect(lead.params).toMatchObject({
      form_location: 'contact_page',
      interests: 'medicare-supplement,turning-65',
      best_time: 'evening',
      lead_language: 'en',
      page_type: 'contact',
    });
    await page.getByTestId('contact-success').locator('a[href^="tel:"]').click();
    await waitForEvent(page, 'click_to_call', { button_location: 'form_success' });
    await expectNoPii(page);
  });

  test('engagement: language, text size, FAQ, TOC, internal and outbound links, scroll, carriers', async ({ page }) => {
    await setup(page);
    await page.goto('/guides/medicare-office-near-me-new-orleans');
    await waitForEvent(page, 'page_view', { page_type: 'guide' });

    await page.locator('[data-toc] a').first().click();
    await waitForEvent(page, 'toc_click', { destination: '/guides/medicare-office-near-me-new-orleans#short-answer' });
    await page.locator('[data-content="guide-body"] a[href="/contact"]').first().click();
    await waitForEvent(page, 'internal_link_click', { destination: '/contact' });
    await page.locator('a[href^="https://www.ssa.gov"]').first().click();
    await waitForEvent(page, 'outbound_click', { link_domain: 'ssa.gov', transport_type: 'beacon' });
    await page.locator('[data-faq-list] summary').first().click();
    const faq = await waitForEvent(page, 'faq_open');
    expect(String(faq.params.faq_question)).toContain('Where do I sign up');

    for (const pct of [25, 50, 75, 90]) {
      await page.evaluate((p) => window.scrollTo(0, ((document.documentElement.scrollHeight - innerHeight) * p) / 100 + 2), pct);
      await waitForEvent(page, 'guide_scroll', { percent_scrolled: pct });
    }

    await page.getByRole('button', { name: 'Larger text size' }).first().click();
    await waitForEvent(page, 'text_size_toggle', { size: 'large' });
    await page.getByRole('button', { name: 'Standard text size' }).first().click();
    await waitForEvent(page, 'text_size_toggle', { size: 'standard' });
    await page.getByTestId('language-toggle').first().click();
    await waitForEvent(page, 'language_switch', { from: 'en', to: 'es' });

    await page.goto('/');
    await waitForEvent(page, 'page_view', { page_type: 'home' });
    await page.locator('[data-carriers]').scrollIntoViewIfNeeded();
    await waitForEvent(page, 'carrier_section_view', { page_type: 'home' });
    await expectNoPii(page);
  });

  test('404 pages report the requested path', async ({ page }) => {
    await setup(page);
    await page.goto('/this-page-does-not-exist');
    await waitForEvent(page, 'not_found', { requested_path: '/this-page-does-not-exist', page_type: 'not_found' });
  });
});

for (const lang of [
  { locale: 'en', path: '/', submit: 'Request a Call' },
  { locale: 'es', path: '/es', submit: 'Solicitar una llamada' },
] as const) {
  test.describe(`GA4 mobile sticky bar (${lang.locale})`, () => {
    test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

    test('call, text, sheet open and lead from the bottom sheet', async ({ page }) => {
      await setup(page);
      await page.goto(lang.path);
      await waitForEvent(page, 'page_view', { locale: lang.locale });
      const bar = page.getByTestId('mobile-bar');
      await bar.locator('a[href^="tel:"]').click();
      expect((await waitForEvent(page, 'click_to_call', { button_location: 'sticky_bar' })).params).toMatchObject({
        phone_owner: 'primary',
        locale: lang.locale,
        transport_type: 'beacon',
      });
      await page.getByTestId('sms-link').click();
      await waitForEvent(page, 'sms_click', { button_location: 'sticky_bar', transport_type: 'beacon' });
      await page.getByTestId('open-lead-sheet').click();
      await waitForEvent(page, 'form_open', { button_location: 'sticky_bar', form_location: 'sticky_sheet' });
      await page.locator('#sheet-name').fill('Pedro Phone');
      await waitForEvent(page, 'form_start', { form_location: 'sticky_sheet' });
      await page.locator('#sheet-phone').fill('504 555 0133');
      await page.waitForTimeout(1600);
      await page.getByTestId('lead-sheet').getByRole('button', { name: lang.submit }).click();
      expect((await waitForEvent(page, 'generate_lead')).params).toMatchObject({
        form_location: 'sticky_sheet',
        interests: 'none',
        lead_language: lang.locale,
        locale: lang.locale,
        page_type: 'home',
      });
      await expectNoPii(page);
    });
  });
}
