/**
 * Medicare Annual Enrollment Period (AEP) logic. The AEP runs October 15 – December 7
 * every year, for coverage that starts January 1 of the following year.
 *
 * Phases (all dates evaluated in America/Chicago):
 *  - "pre-aep":  Sep 1 – Oct 14  → Annual Notice of Change letters arrive; plan ahead
 *  - "aep":      Oct 15 – Dec 7  → enrollment is open
 *  - "off":      the rest of the year → the callout is hidden
 */

export type EnrollmentPhase = 'pre-aep' | 'aep' | 'off';

export type EnrollmentStatus = {
  phase: EnrollmentPhase;
  /** Calendar year of the next (or current) AEP. */
  aepYear: number;
  /** Plan year that the next (or current) AEP enrolls people into. */
  coverageYear: number;
};

function centralDateParts(date: Date): { year: number; month: number; day: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { year: get('year'), month: get('month'), day: get('day') };
}

export function getEnrollmentStatus(now: Date = new Date()): EnrollmentStatus {
  const { year, month, day } = centralDateParts(now);
  const md = month * 100 + day; // e.g. Oct 15 → 1015

  let phase: EnrollmentPhase = 'off';
  if (md >= 901 && md <= 1014) phase = 'pre-aep';
  else if (md >= 1015 && md <= 1207) phase = 'aep';

  // After Dec 7 the next AEP is next year's.
  const aepYear = md > 1207 ? year + 1 : year;
  return { phase, aepYear, coverageYear: aepYear + 1 };
}
