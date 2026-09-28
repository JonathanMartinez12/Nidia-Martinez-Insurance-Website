import { expect, test } from '@playwright/test';
import { validateJsonLd } from '../../src/lib/schema-validate';
import { abs, expectedTypes, routes } from './routes';

test.describe('SEO: every route × locale', () => {
  for (const r of routes) {
    test(`${r.locale} ${r.path}`, async ({ page, request }) => {
      const res = await page.goto(r.path);
      expect(res?.status(), 'HTTP status').toBe(200);

      // Exactly one H1
      await expect(page.locator('h1')).toHaveCount(1);

      // Title & description
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title.length, title).toBeLessThanOrEqual(60);
      const description = (await page.locator('meta[name="description"]').getAttribute('content')) ?? '';
      expect(description.length).toBeGreaterThan(0);
      expect(description.length, description).toBeLessThanOrEqual(155);

      // Canonical: absolute and self-referencing
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(abs(r.path));

      // hreflang: en-US, es-US, x-default, reciprocal
      const alt = async (lang: string) => page.locator(`link[rel="alternate"][hreflang="${lang}"]`).getAttribute('href');
      expect(await alt('en-US')).toBe(abs(r.enPath));
      expect(await alt('es-US')).toBe(abs(r.esPath));
      expect(await alt('x-default')).toBe(abs(r.enPath));

      // <html lang>
      expect(await page.locator('html').getAttribute('lang')).toBe(r.locale === 'en' ? 'en-US' : 'es-US');

      // Open Graph + Twitter
      const og = async (p: string) => page.locator(`meta[property="${p}"]`).getAttribute('content');
      expect(await og('og:title')).toBe(title);
      expect(await og('og:description')).toBe(description);
      expect(await og('og:url')).toBe(abs(r.path));
      const ogImage = await og('og:image');
      expect(ogImage).toBeTruthy();
      expect(await page.locator('meta[name="twitter:card"]').getAttribute('content')).toBe('summary_large_image');
      const img = await request.get(ogImage!);
      expect(img.status()).toBe(200);
      expect(img.headers()['content-type']).toMatch(/^image\//);

      // Images: alt + dimensions
      for (const el of await page.locator('img').all()) {
        expect((await el.getAttribute('alt'))?.trim(), 'img alt').toBeTruthy();
        expect(await el.getAttribute('width'), 'img width').toBeTruthy();
        expect(await el.getAttribute('height'), 'img height').toBeTruthy();
      }

      // JSON-LD: valid JSON, schema.org-valid, expected types, FAQ mirrors visible text
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(blocks.length).toBeGreaterThan(0);
      const types = new Set<string>();
      const faqQuestions: string[] = [];
      for (const raw of blocks) {
        const data = JSON.parse(raw) as Record<string, unknown>;
        expect(validateJsonLd(data), raw.slice(0, 120)).toEqual([]);
        types.add(String(data['@type']));
        if (data['@type'] === 'FAQPage') {
          for (const q of data.mainEntity as Array<{ name: string }>) faqQuestions.push(q.name);
        }
      }
      for (const t of expectedTypes[r.kind]) expect([...types], `JSON-LD @type ${t}`).toContain(t);
      if (faqQuestions.length > 0) {
        const visible = (await page.locator('[data-faq-question]').allInnerTexts()).map((s) => s.trim());
        expect(new Set(faqQuestions)).toEqual(new Set(visible));
      }
    });
  }
});

test('titles and descriptions are unique across the whole site', async ({ request }) => {
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  for (const r of routes) {
    const html = await (await request.get(r.path)).text();
    const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
    const description = /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? '';
    expect(titles.get(title), `duplicate title: ${title}`).toBeUndefined();
    expect(descriptions.get(description), `duplicate description: ${description}`).toBeUndefined();
    titles.set(title, r.path);
    descriptions.set(description, r.path);
  }
});
