import { expect, test } from '@playwright/test';
import { routes } from './routes';

// Seniors mostly arrive on phones: no page may scroll sideways at 390px (standard or A+ text).
test.describe('no horizontal overflow on mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const r of routes) {
    test(`${r.locale} ${r.path}`, async ({ page }) => {
      await page.goto(r.path);
      const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(await overflow(), 'standard text').toBeLessThanOrEqual(0);
      await page.evaluate(() => (document.documentElement.dataset.textSize = 'large'));
      expect(await overflow(), 'A+ text').toBeLessThanOrEqual(0);
    });
  }
});
