import { confirmedCarriers, type CarrierLine } from '@/config/site';

/**
 * Names of the confirmed carriers for a product line, as a natural-language list
 * ("A, B, and C" / "A, B y C"). Used in page copy and FAQ answers so they always match
 * `carriers` in src/config/site.ts (and the FAQPage JSON-LD built from the same text).
 */
export function carrierNames(line: CarrierLine, locale: 'en' | 'es'): string {
  return new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(confirmedCarriers(line).map((c) => c.name));
}
