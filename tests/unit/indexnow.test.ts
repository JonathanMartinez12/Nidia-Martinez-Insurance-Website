import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
// @ts-expect-error -- plain ESM script without type declarations
import { changedUrls, INDEXNOW_KEY, parseSitemap } from '../../scripts/indexnow.mjs';

const xml = `<?xml version="1.0"?><urlset>
<url><loc>https://www.example.com/</loc><lastmod>2026-10-25T00:00:00.000Z</lastmod></url>
<url><loc>https://www.example.com/a</loc><lastmod>2026-11-03T00:00:00.000Z</lastmod></url>
</urlset>`;

describe('IndexNow', () => {
  it('hosts the key file at the site root', () => {
    expect(INDEXNOW_KEY).toMatch(/^[a-f0-9]{32}$/);
    const file = `public/${INDEXNOW_KEY}.txt`;
    expect(existsSync(file)).toBe(true);
    expect(readFileSync(file, 'utf8').trim()).toBe(INDEXNOW_KEY);
  });

  it('submits only new or changed URLs', () => {
    const current = parseSitemap(xml);
    expect(current).toEqual({
      'https://www.example.com/': '2026-10-25T00:00:00.000Z',
      'https://www.example.com/a': '2026-11-03T00:00:00.000Z',
    });
    expect(changedUrls(current, null)).toHaveLength(2);
    expect(changedUrls(current, { 'https://www.example.com/': '2026-10-25T00:00:00.000Z', 'https://www.example.com/a': '2026-10-01T00:00:00.000Z' })).toEqual(['https://www.example.com/a']);
    expect(changedUrls(current, current)).toEqual([]);
  });
});
