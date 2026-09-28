/**
 * Full-page screenshots for visual review: mobile (390px) + desktop (1440px), both locales.
 * Usage: BASE_URL=http://localhost:3100 npm run screenshots [-- /path /es/path ...]
 */
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const base = process.env.BASE_URL ?? 'http://localhost:3100';
const defaults = [
  '/',
  '/es',
  '/medicare-advantage',
  '/es/seguro-de-gastos-finales',
  '/contact',
  '/es/sobre-nosotros',
  '/service-area/metairie',
  '/medicare-scam-protection',
];
const paths = process.argv.slice(2).length > 0 ? process.argv.slice(2) : defaults;
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function main() {
  const outDir = path.join(process.cwd(), 'screenshots');
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const p of paths) {
      await page.goto(base + p, { waitUntil: 'networkidle' });
      const file = `${vp.name}${p === '/' ? '-home' : p.replace(/\//g, '-')}.png`;
      await page.screenshot({ path: path.join(outDir, file), fullPage: true });
      console.log('saved', file);
    }
    await context.close();
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
