import type { LeadTopic } from './schema';

export type LeadOwner = 'John' | 'Nidia' | 'Both';

const OWNER: Record<LeadTopic, LeadOwner> = {
  'medicare-advantage': 'Nidia',
  'medicare-supplement': 'Nidia',
  'turning-65': 'Nidia',
  'final-expense-life': 'John',
  other: 'Both',
};

/**
 * Who the lead is "For" (shown in the email body).
 *  - only Medicare Advantage / Supplement / Turning 65 → Nidia
 *  - only Final Expense / Life → John
 *  - anything else (mixed, Other, nothing selected) → Both
 */
export function leadOwner(interests: readonly LeadTopic[]): LeadOwner {
  const owners = new Set(interests.map((i) => OWNER[i]));
  return owners.size === 1 ? [...owners][0]! : 'Both';
}

/** Recipients from CONTACT_TO_EMAILS (comma-separated). */
export function recipients(env: string | undefined = process.env.CONTACT_TO_EMAILS): string[] {
  return (env ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s));
}
