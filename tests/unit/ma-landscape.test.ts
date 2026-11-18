import { describe, expect, it } from 'vitest';
import landscape from '@/data/ma-landscape-la.json';
import { maParishSection } from '@/content/ma-landscape';
// @ts-expect-error -- plain ESM script without type declarations
import { countPlans, parseCsv } from '../../scripts/refresh-ma-landscape.mjs';

describe('Medicare Advantage plan counts by parish (CMS Landscape)', () => {
  it('stores counts only, from an official cms.gov file, for every parish we list', () => {
    expect(landscape.source.url).toMatch(/^https:\/\/www\.cms\.gov\/files\/zip\/cy\d{4}-landscape-\d{6}\.zip$/);
    expect(landscape.source.dataLastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(landscape.parishes.map((p) => p.parish)).toEqual([
      'Orleans',
      'Jefferson',
      'St. Tammany',
      'St. Bernard',
      'St. Charles',
      'St. John the Baptist',
      'East Baton Rouge',
    ]);
    for (const p of landscape.parishes) {
      expect(Object.keys(p).sort()).toEqual(['hmo', 'other', 'parish', 'ppo', 'snp', 'total']);
      expect(p.hmo + p.ppo + p.snp + p.other).toBe(p.total);
      expect(p.total).toBeGreaterThan(0);
    }
  });

  it('counts each plan segment once by type, skipping PDPs and other states', () => {
    const csv = [
      'State Territory Abbreviation,County Name,Contract Category Type,Contract Plan Segment ID,Plan Type,Special Needs Plan (SNP) Indicator',
      'LA,Orleans,MA-PD,H1_001_0,HMO-POS,No',
      'LA,Orleans,MA-PD,H1_001_0,HMO-POS,No',
      'LA,Orleans,MA-PD,H1_002_0,Regional PPO,No',
      'LA,Orleans,SNP,H1_003_0,"HMO D-SNP",Yes',
      'LA,All Counties,PDP,S1_001_0,PDP,No',
      'MS,Orleans,MA-PD,H9_001_0,HMO,No',
    ].join('\n');
    const [header, ...rows] = parseCsv(csv);
    const records = rows.map((r: string[]) => Object.fromEntries(header.map((h: string, i: number) => [h, r[i]])));
    expect(countPlans(records, ['Orleans'])).toEqual([{ parish: 'Orleans', hmo: 1, ppo: 1, snp: 1, other: 0, total: 3 }]);
  });

  it('renders a cited table in both languages', () => {
    for (const locale of ['en', 'es'] as const) {
      const s = maParishSection(locale);
      const table = s.blocks.find((b) => b.type === 'table');
      expect(table && table.type === 'table' && table.rows).toHaveLength(7);
      expect(JSON.stringify(s)).toContain(landscape.source.url);
      expect(s.heading).toMatch(locale === 'en' ? /Part C/ : /Parte C/);
    }
  });
});
