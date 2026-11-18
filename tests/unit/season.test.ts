import { afterEach, describe, expect, it, vi } from 'vitest';
import { daysUntilAepEnds, seasonBootScript, seasonDaysScript, seasonFor } from '@/lib/season';

function runBoot(iso: string, dismissed?: string) {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(iso));
  const dataset: Record<string, string> = {};
  const store: Record<string, string> = dismissed ? { mis_banner_dismissed: dismissed } : {};
  vi.stubGlobal('document', { documentElement: { dataset } });
  vi.stubGlobal('sessionStorage', { getItem: (k: string) => store[k] ?? null });
  new Function(seasonBootScript)();
  return dataset;
}

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('seasonal banner', () => {
  it('picks the phase from the date', () => {
    expect(seasonFor(10, 14)).toBeNull();
    expect(seasonFor(10, 15)).toBe('aep');
    expect(seasonFor(12, 7)).toBe('aep');
    expect(seasonFor(12, 8)).toBe('post');
    expect(seasonFor(12, 31)).toBe('post');
    expect(seasonFor(1, 1)).toBe('oep');
    expect(seasonFor(3, 31)).toBe('oep');
    expect(seasonFor(4, 1)).toBeNull();
    expect(seasonFor(7, 4)).toBeNull();
    expect(daysUntilAepEnds(2026, 11, 18)).toBe(19);
    expect(daysUntilAepEnds(2026, 12, 7)).toBe(0);
  });

  it('boot script matches, in Central time, and remembers a dismissal for that season', () => {
    // 2026-11-19 03:00 UTC is still Nov 18 in Louisiana.
    expect(runBoot('2026-11-19T03:00:00Z')).toEqual({ season: 'aep', seasonDays: '19' });
    expect(runBoot('2026-12-07T17:00:00Z')).toEqual({ season: 'aep', seasonDays: '0' });
    expect(runBoot('2026-12-20T17:00:00Z').season).toBe('post');
    expect(runBoot('2027-02-01T17:00:00Z').season).toBe('oep');
    expect(runBoot('2027-06-01T17:00:00Z')).toEqual({});
    expect(runBoot('2026-11-18T17:00:00Z', 'aep').bannerDismissed).toBe('1');
    expect(runBoot('2027-01-05T17:00:00Z', 'aep').bannerDismissed).toBeUndefined();
  });

  it('countdown script writes the right template', () => {
    for (const [days, expected] of [
      ['19', '19 days left'],
      ['1', '1 day left'],
      ['0', 'ends today'],
    ] as const) {
      const el = { dataset: { tplZero: 'ends today', tplOne: '1 day left', tplOther: '{n} days left' }, textContent: '' };
      vi.stubGlobal('document', { documentElement: { dataset: { seasonDays: days } }, querySelector: () => el });
      new Function(seasonDaysScript)();
      expect(el.textContent).toBe(expected);
    }
  });
});
