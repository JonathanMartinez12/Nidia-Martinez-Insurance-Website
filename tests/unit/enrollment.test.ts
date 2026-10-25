import { describe, expect, it } from 'vitest';
import { getEnrollmentStatus, planYear } from '@/lib/enrollment';

// Noon Central Time on a given date.
const ct = (iso: string) => new Date(`${iso}T12:00:00-05:00`);

describe('getEnrollmentStatus', () => {
  it('is off in spring and summer', () => {
    expect(getEnrollmentStatus(ct('2026-03-15')).phase).toBe('off');
    expect(getEnrollmentStatus(ct('2026-08-31')).phase).toBe('off');
  });

  it('shows the pre-AEP message from Sep 1 to Oct 14', () => {
    expect(getEnrollmentStatus(ct('2026-09-01')).phase).toBe('pre-aep');
    expect(getEnrollmentStatus(ct('2026-10-14')).phase).toBe('pre-aep');
  });

  it('is open Oct 15 through Dec 7 inclusive', () => {
    expect(getEnrollmentStatus(ct('2026-10-15')).phase).toBe('aep');
    expect(getEnrollmentStatus(ct('2026-12-07')).phase).toBe('aep');
    expect(getEnrollmentStatus(ct('2026-12-08')).phase).toBe('off');
  });

  it('uses Central Time at the boundaries', () => {
    // 2026-10-15 03:00 UTC is still Oct 14 in New Orleans.
    expect(getEnrollmentStatus(new Date('2026-10-15T03:00:00Z')).phase).toBe('pre-aep');
  });

  it('computes the coverage year', () => {
    expect(getEnrollmentStatus(ct('2026-11-01'))).toMatchObject({ aepYear: 2026, coverageYear: 2027 });
    expect(getEnrollmentStatus(ct('2026-12-20'))).toMatchObject({ aepYear: 2027, coverageYear: 2028 });
    expect(getEnrollmentStatus(ct('2027-02-01'))).toMatchObject({ aepYear: 2027, coverageYear: 2028 });
  });

  it('rolls the shopping plan year over on October 1', () => {
    expect(planYear(ct('2026-09-30'))).toBe(2026);
    expect(planYear(ct('2026-10-01'))).toBe(2027);
    expect(planYear(ct('2026-12-31'))).toBe(2027);
    expect(planYear(ct('2027-01-01'))).toBe(2027);
  });
});
