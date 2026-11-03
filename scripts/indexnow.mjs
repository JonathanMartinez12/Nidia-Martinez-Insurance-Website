#!/usr/bin/env node
/**
 * IndexNow (Bing, Copilot, Yandex, Seznam, Naver; ChatGPT search reads Bing's index).
 *
 * Fetches the live sitemap, compares each URL's <lastmod> with the snapshot from the previous
 * run, and submits only new or changed URLs. With no snapshot (first run, or it expired) every
 * URL is submitted. Runs from .github/workflows/indexnow.yml after each production deploy.
 *
 *   node scripts/indexnow.mjs [--dry-run] [--state .indexnow/sitemap.json] [--site https://...]
 *
 * The key is public by design: IndexNow verifies it by fetching /<key>.txt from the site.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

export const INDEXNOW_KEY = '6b219bff16c3e82d761804b14adbbd16';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : fallback;
}

/** `{ url: lastmod }` from sitemap XML. */
export function parseSitemap(xml) {
  const out = {};
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;
    out[loc] = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? '';
  }
  return out;
}

/** URLs that are new or whose lastmod changed since `previous` (all of them when there's no snapshot). */
export function changedUrls(current, previous) {
  if (!previous) return Object.keys(current);
  return Object.keys(current).filter((url) => previous[url] !== current[url]);
}

async function fetchText(url, tries = 4) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'martinez-indexnow/1.0' } });
      if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (i >= tries) throw err;
      await new Promise((r) => setTimeout(r, 2000 * 2 ** (i - 1)));
    }
  }
}

async function main() {
  const site = arg('--site', 'https://www.martinezinsurancesolutions.com').replace(/\/+$/, '');
  const statePath = arg('--state', '.indexnow/sitemap.json');
  const dryRun = process.argv.includes('--dry-run');
  const host = new URL(site).host;
  const keyLocation = `${site}/${INDEXNOW_KEY}.txt`;

  const hostedKey = (await fetchText(keyLocation)).trim();
  if (hostedKey !== INDEXNOW_KEY) throw new Error(`Key file at ${keyLocation} doesn't match the key`);

  const current = parseSitemap(await fetchText(`${site}/sitemap.xml`));
  const previous = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : null;
  const urlList = changedUrls(current, previous).filter((u) => new URL(u).host === host);
  console.log(`${Object.keys(current).length} URLs in sitemap, ${urlList.length} new or changed${previous ? '' : ' (no snapshot: submitting all)'}`);
  for (const u of urlList) console.log(`  ${u}`);

  if (urlList.length && !dryRun) {
    // IndexNow accepts up to 10,000 URLs per request.
    for (let i = 0; i < urlList.length; i += 10000) {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation, urlList: urlList.slice(i, i + 10000) }),
      });
      // 200 OK and 202 Accepted (key validation pending) are both success.
      if (res.status !== 200 && res.status !== 202) throw new Error(`IndexNow → HTTP ${res.status}: ${await res.text()}`);
      console.log(`IndexNow accepted (HTTP ${res.status})`);
    }
  }
  if (!dryRun) {
    mkdirSync(dirname(statePath), { recursive: true });
    writeFileSync(statePath, JSON.stringify(current, null, 2));
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.message ?? err);
    process.exit(1);
  });
}
