import { describe, expect, it } from 'vitest';
import { combinedYears, headlineYears } from '@/lib/experience';
import { organizationsRepresented, tpmoDisclaimer } from '@/lib/disclaimer';
import { agents, confirmedCarriers, site, type Agent } from '@/config/site';
import { openTodos, launchBlockers } from '@/lib/launch';

const agent = (years: number | null): Agent => ({ ...agents[0]!, yearsExperience: years });

describe('experience', () => {
  it('headline years come from the primary agent config', () => {
    expect(headlineYears(agent(22))).toBe(20);
    expect(headlineYears(agent(27))).toBe(20);
    expect(headlineYears(agent(30))).toBe(20); // "Over 30" would be false at exactly 30
    expect(headlineYears(agent(31))).toBe(30);
    expect(headlineYears(agent(8))).toBeNull();
    expect(headlineYears(agent(null))).toBeNull();
  });

  it('combined years stay hidden while any value is TODO', () => {
    expect(combinedYears([agent(27), agent(null)])).toBeNull();
    expect(combinedYears([agent(27), agent(10)])).toBe(37);
    expect(combinedYears([])).toBeNull();
  });
});

describe('TPMO disclaimer', () => {
  it('X is the number of confirmed Medicare Advantage carriers', () => {
    expect(organizationsRepresented()).toBe(confirmedCarriers('medicare-advantage').length);
    expect(organizationsRepresented()).toBe(4);
  });

  it('renders in both languages without placeholders', () => {
    for (const locale of ['en', 'es'] as const) {
      const text = tpmoDisclaimer(locale);
      expect(text).toMatch(/Medicare\.gov, 1-800-MEDICARE/);
      expect(text).not.toMatch(/TODO|\[|\]|null|undefined/);
    }
    expect(tpmoDisclaimer('en')).toMatch(/^We do not offer every plan available in your area\./);
    expect(tpmoDisclaimer('es')).toMatch(/^No ofrecemos todos los planes disponibles en su área\./);
  });

  it('includes both counts once Y is configured', () => {
    const original = site.compliance.plansOffered;
    (site.compliance as { plansOffered: number | null }).plansOffered = 12;
    try {
      expect(tpmoDisclaimer('en')).toContain('Currently we represent 4 organizations which offer 12 products in your area.');
      expect(tpmoDisclaimer('es')).toContain('Actualmente representamos 4 organizaciones que ofrecen 12 productos en su área.');
    } finally {
      (site.compliance as { plansOffered: number | null }).plansOffered = original;
    }
  });

  it('unconfirmed carriers are hidden', () => {
    expect(confirmedCarriers('medicare-supplement').map((c) => c.name)).not.toContain(
      'Blue Cross and Blue Shield of Louisiana',
    );
  });
});

describe('launch TODOs', () => {
  it('lists the TPMO "Y" value first, as a blocker, while it is unset', () => {
    if (site.compliance.plansOffered === null) {
      expect(openTodos()[0]?.id).toBe('compliance.plansOffered');
      expect(launchBlockers().map((b) => b.id)).toContain('compliance.plansOffered');
    } else {
      expect(launchBlockers()).toHaveLength(0);
    }
  });
});
