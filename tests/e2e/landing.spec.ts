import { expect, test } from '@playwright/test';
import { landingPaths } from './routes';

test.describe('Ad landing pages', () => {
  for (const path of landingPaths) {
    test(`${path}: focused, noindex, everything an ad visitor needs`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
      await expect(page.locator('h1')).toHaveCount(1);
      // Header: logo + phone only, no site navigation or links home.
      const header = page.locator('body > header').first();
      await expect(header.locator('nav')).toHaveCount(0);
      await expect(header.locator('a')).toHaveCount(1);
      await expect(header.locator('a[href^="tel:"]')).toHaveCount(1);
      await expect(page.locator('[data-footer-nav]')).toBeHidden();
      // Call button, 2-field form, carriers, address, TPMO disclaimer.
      await expect(page.locator('main a[href^="tel:"][data-call-location="hero"]')).toBeVisible();
      await expect(page.locator('main form input[name="name"]')).toBeVisible();
      await expect(page.locator('main form input[name="phone"]')).toBeVisible();
      await expect(page.locator('main [data-carriers]')).toBeVisible();
      await expect(page.locator('main').getByText('110 Veterans Blvd.')).toBeVisible();
      await expect(page.locator('main [data-testid="tpmo-disclaimer"]')).toBeVisible();
      await expect(page.locator('main [lang="es"]').first()).toBeVisible();
    });
  }

  test('not in the sitemap', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const path of landingPaths) expect(xml).not.toContain(path);
  });
});

test.describe('Reviews and review links', () => {
  test('home shows Google reviews (no review schema) and the footer review link', async ({ page }) => {
    await page.goto('/');
    const reviews = page.getByTestId('reviews');
    await expect(reviews).toBeVisible();
    await expect(reviews.locator('li')).not.toHaveCount(0);
    const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(ld.join('\n')).not.toMatch(/"(Review|AggregateRating)"|aggregateRating/);
    await expect(page.locator('footer a[href="https://g.page/r/CTzMhWBwUjMpEAE/review"]')).toBeVisible();
  });
});

test('IndexNow key file is served at the root', async ({ request }) => {
  const res = await request.get('/6b219bff16c3e82d761804b14adbbd16.txt');
  expect(res.status()).toBe(200);
  expect((await res.text()).trim()).toBe('6b219bff16c3e82d761804b14adbbd16');
});
