import { combinedYears, headlineYears } from '@/lib/experience';
import { createTranslator } from 'next-intl';
import { describe, expect, it } from 'vitest';
import en from '@messages/en.json';
import es from '@messages/es.json';
import { pages } from '@/config/pages';
import { flattenKeys } from './helpers';

// Same values the site renders (see metaValues in src/lib/seo.ts).
const values = { years: headlineYears() ?? 0, combinedYears: combinedYears() ?? 0 };
const catalogs = { en, es } as const;

const icuArgs = (s: string) => new Set([...s.matchAll(/\{(\w+)/g)].map((m) => m[1]));

describe('message catalogs', () => {
  const flatEn = flattenKeys(en);
  const flatEs = flattenKeys(es);

  it('EN and ES have identical key sets', () => {
    expect(Object.keys(flatEs).sort()).toEqual(Object.keys(flatEn).sort());
  });

  it('has no empty strings', () => {
    for (const [k, v] of [...Object.entries(flatEn), ...Object.entries(flatEs)]) expect(v.trim(), k).not.toBe('');
  });

  it('uses the same ICU placeholders in both languages', () => {
    for (const key of Object.keys(flatEn)) {
      expect([...icuArgs(flatEs[key]!)].sort(), key).toEqual([...icuArgs(flatEn[key]!)].sort());
    }
  });

  it('never renders TODO', () => {
    for (const [k, v] of [...Object.entries(flatEn), ...Object.entries(flatEs)]) expect(v, k).not.toMatch(/\bTODO\b/);
  });
});

describe('page metadata', () => {
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();

  for (const locale of ['en', 'es'] as const) {
    const t = createTranslator({ locale, messages: catalogs[locale], namespace: 'Meta' });
    for (const page of pages) {
      it(`${locale} ${page.id}: title ≤ 60, description ≤ 155, unique`, () => {
        const title = t(`${page.metaKey}.title` as 'home.title', values);
        const description = t(`${page.metaKey}.description` as 'home.description', values);
        expect(title.length, title).toBeLessThanOrEqual(60);
        expect(title.length).toBeGreaterThan(10);
        expect(description.length, description).toBeLessThanOrEqual(155);
        expect(description.length).toBeGreaterThan(50);
        expect(titles.has(title), `duplicate title "${title}" (also ${titles.get(title)})`).toBe(false);
        expect(descriptions.has(description), `duplicate description (also ${descriptions.get(description)})`).toBe(false);
        titles.set(title, `${locale}:${page.id}`);
        descriptions.set(description, `${locale}:${page.id}`);
      });
    }
  }

  it('mentions the configured years of experience on Home, About, Medicare Advantage and Medicare Supplement', () => {
    for (const locale of ['en', 'es'] as const) {
      const t = createTranslator({ locale, messages: catalogs[locale], namespace: 'Meta' });
      for (const key of ['home', 'about', 'services.medicare-advantage', 'services.medicare-supplement']) {
        expect(t(`${key}.description` as 'home.description', values)).toContain(String(values.years));
      }
    }
  });
});
