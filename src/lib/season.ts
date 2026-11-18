/**
 * Seasonal banner phases (dates in America/Chicago, never hardcoded to a year):
 *  - "aep":  Oct 15 – Dec 7   → Annual Enrollment countdown
 *  - "post": Dec 8 – Dec 31   → turning 65 / new to Medicare, year-round help
 *  - "oep":  Jan 1 – Mar 31   → Medicare Advantage Open Enrollment
 * Pages are static, so the phase is picked in the browser by `seasonBootScript` (in <head>, before
 * first paint: no layout shift) and `seasonDaysScript` fills in the live countdown.
 */
export type Season = 'aep' | 'post' | 'oep';

export const BANNER_DISMISS_KEY = 'mis_banner_dismissed';

export function seasonFor(month: number, day: number): Season | null {
  const md = month * 100 + day;
  if (md >= 1015 && md <= 1207) return 'aep';
  if (md >= 1208) return 'post';
  if (md <= 331) return 'oep';
  return null;
}

/** Whole days from the given date to December 7 of the same year (0 on Dec 7). */
export function daysUntilAepEnds(year: number, month: number, day: number): number {
  return Math.round((Date.UTC(year, 11, 7) - Date.UTC(year, month - 1, day)) / 864e5);
}

/** Calendar date in America/Chicago. */
export function centralDate(now: Date = new Date()): { year: number; month: number; day: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(now);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  return { year: get('year'), month: get('month'), day: get('day') };
}

/** Sets <html data-season data-season-days [data-banner-dismissed]>. Mirrors seasonFor/daysUntilAepEnds. */
export const seasonBootScript = `try{var p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date()),g=function(t){for(var i=0;i<p.length;i++)if(p[i].type===t)return +p[i].value},y=g('year'),m=g('month'),d=g('day'),md=m*100+d,s=md>=1015&&md<=1207?'aep':md>=1208?'post':md<=331?'oep':'';if(s){var r=document.documentElement;r.dataset.season=s;r.dataset.seasonDays=String(Math.round((Date.UTC(y,11,7)-Date.UTC(y,m-1,d))/864e5));try{if(sessionStorage.getItem('${BANNER_DISMISS_KEY}')===s)r.dataset.bannerDismissed='1'}catch(e){}}}catch(e){}`;

/** Runs right after the banner markup: writes the countdown text for today from the templates. */
export const seasonDaysScript = `try{var e=document.querySelector('[data-aep-text]'),n=document.documentElement.dataset.seasonDays;if(e&&n!=null){var k=+n;e.textContent=k===0?e.dataset.tplZero:(k===1?e.dataset.tplOne:e.dataset.tplOther).replace('{n}',String(k))}}catch(x){}`;
