/** Writes every route × locale to .lighthouseci/urls.json for Lighthouse CI. */
import { mkdirSync, writeFileSync } from 'node:fs';
import { routes, BASE } from '../tests/e2e/routes';

mkdirSync('.lighthouseci', { recursive: true });
const urls = routes.map((r) => (r.path === '/' ? `${BASE}/` : `${BASE}${r.path}`));
writeFileSync('.lighthouseci/urls.json', JSON.stringify(urls, null, 2));
console.log(`Wrote ${urls.length} URLs to .lighthouseci/urls.json`);
