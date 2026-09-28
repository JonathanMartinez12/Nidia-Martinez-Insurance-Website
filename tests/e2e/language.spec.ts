import { expect, test } from '@playwright/test';
import { routes } from './routes';

test.describe('language toggle lands on the equivalent page', () => {
  for (const r of routes) {
    test(`${r.locale} ${r.path} → ${r.otherPath}`, async ({ page }) => {
      await page.goto(r.path);
      await page.getByTestId('language-toggle').first().click();
      await expect(page).toHaveURL((url) => url.pathname === r.otherPath);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('html')).toHaveAttribute('lang', r.locale === 'en' ? 'es-US' : 'en-US');
    });
  }
});
