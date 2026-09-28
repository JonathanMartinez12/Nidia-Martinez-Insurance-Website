import { expect, test } from '@playwright/test';
import { abs, BASE, routes } from './routes';

test('robots.txt allows crawling and references the sitemap', async ({ request }) => {
  const res = await request.get('/robots.txt');
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain(`Sitemap: ${BASE}/sitemap.xml`);
  expect(body).toMatch(/Allow: \//);
});

test('sitemap lists exactly every page in both locales, with hreflang alternates', async ({ request }) => {
  const res = await request.get('/sitemap.xml');
  expect(res.status()).toBe(200);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(new Set(locs)).toEqual(new Set(routes.map((r) => abs(r.path))));
  expect(locs.length).toBe(routes.length);
  expect(xml).toContain('hreflang="es-US"');
  expect(xml).toContain('hreflang="x-default"');
  for (const loc of locs) {
    const page = await request.get(loc!, { maxRedirects: 0 });
    expect(page.status(), loc).toBe(200);
  }
});

test('no broken internal links anywhere (crawl from every sitemap page)', async ({ page, request }) => {
  test.setTimeout(240_000);
  const sitemapPaths = new Set(routes.map((r) => r.path));
  const found = new Map<string, string>();
  for (const r of routes) {
    await page.goto(r.path);
    const hrefs = await page.locator('a[href]').evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
    for (const href of hrefs) {
      const url = new URL(href);
      if (url.origin !== new URL(BASE).origin) continue;
      const path = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
      if (!found.has(path)) found.set(path, r.path);
    }
  }
  for (const [path, from] of found) {
    const res = await request.get(path, { maxRedirects: 0 });
    expect(res.status(), `${path} (linked from ${from})`).toBe(200);
    expect(sitemapPaths.has(path), `${path} (linked from ${from}) is not in the sitemap`).toBe(true);
  }
  // Every page is reachable through internal links.
  for (const p of sitemapPaths) expect(found.has(p), `${p} is never linked internally`).toBe(true);
});

test('English slug under /es redirects to the localized slug (no duplicate routes)', async ({ request }) => {
  const res = await request.get('/es/final-expense-insurance', { maxRedirects: 0 });
  expect([301, 302, 307, 308]).toContain(res.status());
  expect(res.headers()['location']).toMatch(/\/es\/seguro-de-gastos-finales$/);
  const en = await request.get('/en/about', { maxRedirects: 0 });
  expect([301, 302, 307, 308]).toContain(en.status());
});
