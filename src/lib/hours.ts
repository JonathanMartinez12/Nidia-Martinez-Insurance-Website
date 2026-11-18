import type { AppLocale } from '@/i18n/routing';
import { site, type OpeningHours } from '@/config/site';

type Day = OpeningHours['days'][number];
const WEEK: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayNames: Record<AppLocale, Record<Day, string>> = {
  en: { Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday' },
  es: { Monday: 'lunes', Tuesday: 'martes', Wednesday: 'miércoles', Thursday: 'jueves', Friday: 'viernes', Saturday: 'sábado', Sunday: 'domingo' },
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "8:00 AM" / "8:00 a. m." from 24h "HH:MM". */
export function formatTime(locale: AppLocale, hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const fmt = new Intl.DateTimeFormat(locale === 'es' ? 'es-US' : 'en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'UTC' });
  return fmt.format(new Date(Date.UTC(2026, 0, 5, h, m)));
}

/** "Monday – Friday" / "Lunes a viernes" for consecutive days, else a list. */
export function formatDays(locale: AppLocale, days: Day[]): string {
  const idx = days.map((d) => WEEK.indexOf(d)).sort((a, b) => a - b);
  const consecutive = idx.every((v, i) => i === 0 || v === idx[i - 1]! + 1);
  const names = idx.map((i) => dayNames[locale][WEEK[i]!]);
  if (names.length === 1) return capitalize(names[0]!);
  if (consecutive) {
    const [first, last] = [names[0]!, names.at(-1)!];
    if (names.length === 2) return capitalize(locale === 'es' ? `${first} y ${last}` : `${first} & ${last}`);
    return capitalize(locale === 'es' ? `${first} a ${last}` : `${first} – ${last}`);
  }
  return capitalize(names.join(', '));
}

/** Office hours as display rows, e.g. { days: "Monday – Friday", time: "8:00 AM – 6:30 PM" }. Empty while hours are TODO. */
export function officeHours(locale: AppLocale): Array<{ days: string; time: string }> {
  return (site.hours ?? []).map((h) => ({
    days: formatDays(locale, h.days),
    time: `${formatTime(locale, h.opens)} – ${formatTime(locale, h.closes)}`,
  }));
}
