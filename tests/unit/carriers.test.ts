import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { carriers, confirmedCarriers } from '@/config/site';

describe('carriers config', () => {
  it('names are unique and every carrier has a product line', () => {
    expect(new Set(carriers.map((c) => c.name)).size).toBe(carriers.length);
    for (const c of carriers) expect(c.lines.length, c.name).toBeGreaterThan(0);
  });

  it('logo paths live under /carriers/ and are SVG or PNG', () => {
    for (const c of carriers) if (c.logo) expect(c.logo.src, c.name).toMatch(/^\/carriers\/[a-z0-9-]+\.(svg|png)$/);
  });

  it('every approved logo exists, is listed in SOURCES.md and matches its configured aspect ratio', () => {
    const sources = readFileSync(path.join(process.cwd(), 'public', 'carriers', 'SOURCES.md'), 'utf8');
    for (const c of carriers.filter((x) => x.approved)) {
      expect(c.logo, `${c.name} is approved but has no logo`).not.toBeNull();
      const file = path.join(process.cwd(), 'public', c.logo!.src);
      expect(existsSync(file), `${c.logo!.src} missing`).toBe(true);
      expect(sources, `${c.logo!.src} has no source in SOURCES.md`).toContain(`\`${path.basename(file)}\``);
      const [w, h] = intrinsicSize(file);
      expect(Math.abs(w / h - c.logo!.width / c.logo!.height) / (w / h), `${c.name} aspect ratio`).toBeLessThan(0.02);
    }
  });

  it('filters by product line and hides unconfirmed carriers', () => {
    expect(confirmedCarriers('medicare-advantage').every((c) => c.confirmed && c.lines.includes('medicare-advantage'))).toBe(true);
    expect(confirmedCarriers().some((c) => !c.confirmed)).toBe(false);
  });
});

/** Intrinsic size of a PNG (IHDR) or SVG (viewBox). */
function intrinsicSize(file: string): [number, number] {
  const buf = readFileSync(file);
  if (file.endsWith('.png')) return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  const vb = /viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)\s*"/.exec(buf.toString('utf8'));
  if (!vb) throw new Error(`${file}: no viewBox`);
  return [Number(vb[1]), Number(vb[2])];
}
