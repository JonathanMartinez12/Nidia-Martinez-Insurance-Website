import { expect, test } from '@playwright/test';
import { routes, similarity, wordCount } from './routes';

test.describe('content QA', () => {
  for (const r of routes) {
    test(`${r.locale} ${r.path}`, async ({ page }) => {
      await page.goto(r.path);
      // FAQ answers live in collapsed <details>: they're on the page (and indexed), one tap away.
      await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
      const main = await page.locator('main').innerText();
      if (r.kind !== 'legal') expect(wordCount(main), 'visible words in <main>').toBeGreaterThanOrEqual(400);
      const body = await page.locator('body').innerText();
      expect(body).not.toMatch(/\bTODO\b/);
      expect(body).not.toMatch(/\bundefined\b|\bnull\b|NaN|\[object Object\]/);
      expect(body).not.toMatch(/\*\*|\]\(page:/); // unrendered rich text
      expect(body).not.toMatch(/\{[a-zA-Z]+\}/); // unformatted ICU placeholders
    });
  }

  for (const locale of ['en', 'es'] as const) {
    test(`${locale}: city pages are genuinely distinct (< 40% similar)`, async ({ page }) => {
      const cityRoutes = routes.filter((r) => r.kind === 'city' && r.locale === locale);
      const texts: Array<{ path: string; text: string }> = [];
      for (const r of cityRoutes) {
        await page.goto(r.path);
        texts.push({
          path: r.path,
          text: `${await page.locator('h1').innerText()} ${await page.locator('[data-content="city-body"]').innerText()}`,
        });
      }
      for (let i = 0; i < texts.length; i++) {
        for (let j = i + 1; j < texts.length; j++) {
          expect(similarity(texts[i]!.text, texts[j]!.text), `${texts[i]!.path} vs ${texts[j]!.path}`).toBeLessThan(0.4);
        }
      }
    });
  }

  test('Spanish pages have no leftover English UI strings', async ({ page }) => {
    const english = [
      'Free consultation',
      'Call us',
      'Skip to main content',
      'Service Area',
      'Last reviewed',
      'Read about',
      'Explore ',
      'Send my request',
    ];
    for (const r of routes.filter((x) => x.locale === 'es')) {
      await page.goto(r.path);
      const text = await page.locator('body').innerText();
      for (const s of english) expect(text, `${r.path} contains "${s}"`).not.toContain(s);
    }
  });

  test('home shows the experience badge computed from config', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('27 Years Helping Louisiana Seniors')).toBeVisible();
    await page.goto('/es');
    await expect(page.getByText('27 años ayudando a los adultos mayores de Luisiana')).toBeVisible();
  });

  test('TPMO disclaimer and non-affiliation statement appear in the footer and on contact', async ({ page }) => {
    for (const p of ['/', '/contact', '/es/contacto']) {
      await page.goto(p);
      await expect(page.getByTestId('tpmo-disclaimer').first()).toContainText(/Medicare\.gov, 1-800-MEDICARE/);
    }
    await page.goto('/medicare-advantage');
    await expect(page.getByRole('heading', { name: 'Carriers we work with' })).toBeVisible();
    for (const c of ['Humana', 'Peoples Health', 'UnitedHealthcare', 'Devoted Health']) {
      await expect(page.locator('#carriers-heading').locator('..').getByText(c, { exact: true })).toBeVisible();
    }
    await page.goto('/medicare-supplement');
    await expect(page.getByText('Blue Cross and Blue Shield of Louisiana')).toHaveCount(0);
  });
});

test.describe('404', () => {
  test('English 404 is helpful and bilingual', async ({ page }) => {
    const res = await page.goto('/this-page-does-not-exist');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText("We couldn't find that page");
    await expect(page.locator('main a[href^="tel:"]').first()).toBeVisible();
    await expect(page.getByText('¿Busca información en español?')).toBeVisible();
  });

  test('Spanish 404', async ({ page }) => {
    const res = await page.goto('/es/pagina-que-no-existe');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('No encontramos esa página');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es-US');
  });
});
