import { expect, test } from '@playwright/test';

const READ_REVIEWS = 'https://search.google.com/local/reviews?placeid=ChIJV7bqD4evIIYRPMyFYHBSMyk';

test.describe('Google reviews badge', () => {
  for (const [path, text] of [
    ['/', '5.0 on Google · 40+ reviews'],
    ['/es', '5.0 en Google · más de 40 reseñas'],
    ['/contact', '5.0 on Google · 40+ reviews'],
    ['/es/contacto', '5.0 en Google · más de 40 reseñas'],
  ] as const) {
    test(`${path}: badge links to our Google reviews, no rating schema`, async ({ page }) => {
      await page.goto(path);
      const badge = page.getByTestId('review-badge');
      await expect(badge).toHaveText(text);
      await expect(badge).toHaveAttribute('href', READ_REVIEWS);
      const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join('\n');
      expect(ld).not.toMatch(/AggregateRating|"Review"|aggregateRating/);
    });
  }
});

test.describe('Visit our office', () => {
  for (const path of ['/contact', '/es/contacto', '/service-area/metairie', '/es/area-de-servicio/metairie']) {
    test(`${path}: address, hours, directions by place ID, click-to-load map`, async ({ page }) => {
      await page.goto(path);
      const office = page.getByTestId('office-visit');
      await expect(office).toContainText('110 Veterans Blvd, Suite A');
      await expect(office).toContainText(path.startsWith('/es') ? 'Lunes a viernes' : 'Monday – Friday');
      await expect(office).toContainText(path.startsWith('/es') ? 'Citas los fines de semana' : 'Weekend appointments available');
      const directions = office.locator('a[href*="google.com/maps/dir/"]');
      await expect(directions).toHaveAttribute('href', /destination_place_id=ChIJV7bqD4evIIYRPMyFYHBSMyk/);
      await expect(office.locator('iframe')).toHaveCount(0);
      await page.route('https://maps.google.com/**', (r) => r.fulfill({ status: 200, body: '<html></html>', contentType: 'text/html' }));
      await office.getByRole('button', { name: path.startsWith('/es') ? 'Ver mapa' : 'Show map' }).click();
      await expect(office.locator('iframe')).toHaveCount(1);
    });
  }

  test('footer has a directions link and the hours', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.locator('a[href*="google.com/maps/dir/"]')).toBeVisible();
    await expect(footer).toContainText('Monday – Friday: 8:00 AM – 6:30 PM');
    await expect(footer).toContainText('Saturday & Sunday: 10:00 AM – 4:00 PM');
  });
});

test.describe('Seasonal banner', () => {
  const banner = '[data-season-banner]';

  test('AEP countdown (Nov 18), dismiss is remembered for the session', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-11-18T17:00:00Z'));
    await page.goto('/');
    await expect(page.locator(banner)).toBeVisible();
    await expect(page.locator(`${banner} [data-variant="aep"]`)).toContainText('ends December 7: 19 days left');
    await expect(page.locator(`${banner} [data-variant="oep"]`)).toBeHidden();
    await page.getByRole('button', { name: 'Dismiss announcement' }).click();
    await expect(page.locator(banner)).toBeHidden();
    await page.goto('/faq');
    await expect(page.locator(banner)).toBeHidden();
  });

  test('Spanish countdown', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-12-06T17:00:00Z'));
    await page.goto('/es');
    await expect(page.locator(`${banner} [data-variant="aep"]`)).toContainText('1 día restante');
  });

  test('Dec 8 – 31: year-round help; Jan – Mar: MA Open Enrollment; April: no banner', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2026-12-15T17:00:00Z'));
    await page.goto('/');
    await expect(page.locator(`${banner} [data-variant="post"]`)).toContainText('We help year-round');
    await page.clock.setFixedTime(new Date('2027-02-10T17:00:00Z'));
    await page.goto('/es');
    const oep = page.locator(`${banner} [data-variant="oep"]`);
    await expect(oep).toContainText('hasta el 31 de marzo');
    await expect(oep.locator('a')).toHaveAttribute('href', '/es/guias/inscripcion-abierta-medicare-advantage');
    await page.clock.setFixedTime(new Date('2027-04-10T17:00:00Z'));
    await page.goto('/');
    await expect(page.locator(banner)).toBeHidden();
  });
});
