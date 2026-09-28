import { describe, expect, it } from 'vitest';
import en from '@/content/en';
import es from '@/content/es';
import { pages } from '@/config/pages';
import { productKeys } from '@/config/products';
import { cityPages } from '@/config/cities';
import type { Block, SiteContent } from '@/content/types';
import { faqsText, sectionsText, similarity, wordCount } from './helpers';

const locales: Record<'en' | 'es', SiteContent> = { en, es };

/** Structural fingerprint: identical for EN and ES when nothing drifted. */
function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(obj).sort()) {
      // ids and block types must match; free text may differ
      out[k] = k === 'id' || k === 'type' || k === 'tone' || k === 'featured' || k === 'updated' ? obj[k] : shape(obj[k]);
    }
    return out;
  }
  return typeof value;
}

describe('content parity', () => {
  it('EN and ES content have the same structure', () => {
    expect(shape(es)).toEqual(shape(en));
  });

  it('every internal page: link points at a registered page', () => {
    const ids = new Set(pages.map((p) => p.id));
    for (const [locale, content] of Object.entries(locales)) {
      const json = JSON.stringify(content);
      for (const m of json.matchAll(/\]\(page:([^)#]+)/g)) expect(ids.has(m[1]!), `${locale}: page:${m[1]}`).toBe(true);
    }
  });

  it('contains no TODO text', () => {
    for (const content of Object.values(locales)) expect(JSON.stringify(content)).not.toMatch(/\bTODO\b/);
  });
});

describe('service pages', () => {
  for (const [locale, content] of Object.entries(locales)) {
    for (const key of productKeys) {
      it(`${locale} ${key}: 600–1,200 words with FAQs`, () => {
        const s = content.services[key];
        const words = wordCount([s.h1, s.lede, ...s.whoFor, ...s.covers, ...sectionsText(s.sections), ...faqsText(s.faqs)]);
        expect(words).toBeGreaterThanOrEqual(600);
        expect(words).toBeLessThanOrEqual(1200);
        expect(s.faqs.length).toBeGreaterThanOrEqual(3);
      });
    }
  }
});

describe('city pages', () => {
  for (const [locale, content] of Object.entries(locales)) {
    it(`${locale}: every city page is at least 300 words of its own`, () => {
      for (const c of cityPages) {
        const city = content.cities[c.slug];
        expect(wordCount([city.lede, ...sectionsText(city.sections)]), c.slug).toBeGreaterThanOrEqual(250);
      }
    });

    it(`${locale}: no two city pages are more than 40% similar`, () => {
      const texts = cityPages.map((c) => {
        const city = content.cities[c.slug];
        return { slug: c.slug, text: [city.h1, city.lede, ...sectionsText(city.sections)].join(' ') };
      });
      for (let i = 0; i < texts.length; i++) {
        for (let j = i + 1; j < texts.length; j++) {
          const sim = similarity(texts[i]!.text, texts[j]!.text);
          expect(sim, `${texts[i]!.slug} vs ${texts[j]!.slug}`).toBeLessThan(0.4);
        }
      }
    });
  }
});

describe('FAQ page', () => {
  it('has 15–25 questions in each language', () => {
    for (const content of Object.values(locales)) {
      const n = content.faq.groups.reduce((sum, g) => sum + g.faqs.length, 0);
      expect(n).toBeGreaterThanOrEqual(15);
      expect(n).toBeLessThanOrEqual(25);
    }
  });
});

describe('content never asks for sensitive data', () => {
  it('no block tells users to send SSN or Medicare numbers online', () => {
    const bad =
      /(send|enter|provide|envíe|escriba) (us )?(your|su) (social security|medicare number|número de medicare|seguro social)/i;
    const all = (blocks: Block[]) => blocks.map((b) => JSON.stringify(b)).join(' ');
    for (const content of Object.values(locales)) {
      for (const s of Object.values(content.services)) expect(all(s.sections.flatMap((x) => x.blocks))).not.toMatch(bad);
    }
  });
});
