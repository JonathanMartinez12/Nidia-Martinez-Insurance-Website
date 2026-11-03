/** Writes every route × locale (plus the ad landing pages) to .lighthouseci/urls.json for Lighthouse CI. */
import { mkdirSync, writeFileSync } from 'node:fs';
import { routes, BASE, landingPaths } from '../tests/e2e/routes';

mkdirSync('.lighthouseci', { recursive: true });
const urls = [
  ...routes.map((r) => (r.path === '/' ? `${BASE}/` : `${BASE}${r.path}`)),
  // Ad landing pages (noindex, not in the page registry).
  ...landingPaths.map((p) => `${BASE}${p}`),
];
writeFileSync('.lighthouseci/urls.json', JSON.stringify(urls, null, 2));
console.log(`Wrote ${urls.length} URLs to .lighthouseci/urls.json`);
