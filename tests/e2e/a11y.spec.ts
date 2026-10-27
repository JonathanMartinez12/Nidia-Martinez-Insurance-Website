import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { routes } from './routes';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'];

for (const viewport of [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1280, height: 900 },
]) {
  test.describe(`axe (${viewport.name})`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });
    for (const r of routes) {
      test(`${r.locale} ${r.path}`, async ({ page }) => {
        await page.goto(r.path);
        const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
        const summary = results.violations.map(
          (v) =>
            `${v.id}: ${v.nodes
              .map((n) => n.target.join(' '))
              .slice(0, 3)
              .join(' | ')}`,
        );
        expect(summary).toEqual([]);
      });
    }
  });
}

test.describe('axe: mobile lead sheet open', () => {
  test.use({ viewport: { width: 390, height: 844 } });
  for (const path of ['/', '/es']) {
    test(path, async ({ page }) => {
      await page.goto(path);
      await page.getByTestId('open-lead-sheet').click();
      await page.getByTestId('lead-sheet').locator('[aria-expanded]').first().click();
      const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
      expect(
        results.violations.map(
          (v) =>
            `${v.id}: ${v.nodes
              .map((n) => n.target.join(' '))
              .slice(0, 3)
              .join(' | ')}`,
        ),
      ).toEqual([]);
    });
  }
});

test.describe('keyboard', () => {
  test('skip link, header controls and language toggle work with the keyboard', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.locator(':focus');
    await expect(skip).toHaveAttribute('href', '#main');
    await expect(skip).toBeVisible();

    // Walk the header and record what receives focus.
    const seen: string[] = [];
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      const info = await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        if (!el) return '';
        const style = getComputedStyle(el);
        return `${el.tagName}|${el.getAttribute('aria-label') ?? ''}|${el.textContent?.trim().slice(0, 40)}|${style.outlineStyle}`;
      });
      seen.push(info);
    }
    const joined = seen.join('\n');
    expect(joined).toContain('Standard text size');
    expect(joined).toContain('Larger text size');
    expect(joined).toMatch(/Leer esta página en español/);
    expect(joined).toContain('(504) 313-2317');
    // Focus is always visible.
    for (const s of seen) expect(s.split('|')[3]).not.toBe('none');

    // Text size toggle via keyboard.
    await page.getByRole('button', { name: 'Larger text size' }).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('html')).toHaveAttribute('data-text-size', 'large');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    await expect(page.locator('html')).toHaveAttribute('data-text-size', 'normal');

    // Language toggle via keyboard.
    await page.getByTestId('language-toggle').first().focus();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/es$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es-US');
  });

  test('every contact form control is reachable by Tab, in order', async ({ page }) => {
    await page.goto('/contact');
    await page.locator('#contact-name').focus();
    const order: string[] = [];
    for (let i = 0; i < 25; i++) {
      order.push(
        await page.evaluate(() => (document.activeElement as HTMLElement).id || (document.activeElement as HTMLElement).tagName),
      );
      await page.keyboard.press('Tab');
    }
    // Open the optional section so its controls are in the Tab order too.
    const ids = [
      'contact-name',
      'contact-phone',
      'contact-details-toggle',
      'contact-interests-0',
      'contact-bestTime-0',
      'contact-email',
      'BUTTON',
    ];
    await page.locator('#contact-details-toggle').click();
    await page.locator('#contact-name').focus();
    order.length = 0;
    for (let i = 0; i < 25; i++) {
      order.push(
        await page.evaluate(() => (document.activeElement as HTMLElement).id || (document.activeElement as HTMLElement).tagName),
      );
      await page.keyboard.press('Tab');
    }
    let last = -1;
    for (const id of ids) {
      const idx = order.indexOf(id);
      expect(idx, `${id} reachable (order: ${order.join(', ')})`).toBeGreaterThan(last);
      last = idx;
    }
    // The honeypot is never focusable.
    expect(order).not.toContain('contact-website');
  });
});
