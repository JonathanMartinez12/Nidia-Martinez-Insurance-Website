import { agents } from '@/config/site';
import type { ProductKey } from '@/config/products';

export type LeadOwner = 'John' | 'Nidia' | 'Both';

/**
 * Who a lead is "For:" in the email subject.
 *  - every selected product is one of John's specialties  → John
 *  - every selected product is one of Nidia's specialties → Nidia (Medicare Advantage / Supplement)
 *  - anything else (mixed, Part D, C-SNP, nothing selected) → Both
 */
export function leadOwner(interests: readonly ProductKey[]): LeadOwner {
  if (interests.length === 0) return 'Both';
  const owners = new Set<string>();
  for (const interest of interests) {
    const owner = agents.find((a) => a.specialties.includes(interest));
    owners.add(owner ? owner.givenName : 'Both');
  }
  if (owners.size !== 1) return 'Both';
  const only = [...owners][0];
  return only === 'John' || only === 'Nidia' ? only : 'Both';
}

/** Recipients from CONTACT_TO_EMAILS (comma-separated). */
export function recipients(env: string | undefined = process.env.CONTACT_TO_EMAILS): string[] {
  return (env ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s));
}
