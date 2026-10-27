/**
 * Lead-form choices, kept free of dependencies so the client form can import them without
 * pulling the validation library into the browser bundle.
 */
import type { ProductKey } from '@/config/products';

/** "What can we help with?" chips. Kept short on purpose: one tap each, no scrolling. */
export const leadTopics = ['medicare-advantage', 'medicare-supplement', 'turning-65', 'final-expense-life', 'other'] as const;
export type LeadTopic = (typeof leadTopics)[number];

export const bestTimes = ['morning', 'afternoon', 'evening'] as const;
export type BestTime = (typeof bestTimes)[number];

/** Pre-selects a chip from a page's product (service and agent pages). */
export function topicForProduct(product: ProductKey): LeadTopic | null {
  if (product === 'medicare-advantage' || product === 'medicare-supplement') return product;
  if (product === 'final-expense-insurance' || product === 'life-insurance') return 'final-expense-life';
  return null;
}
