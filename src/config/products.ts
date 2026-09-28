/**
 * Product catalogue. Order here is the order used in grids, menus and the
 * contact-form "interest" list. Page content lives in `src/content/services`.
 */

export const productKeys = [
  'medicare-advantage',
  'medicare-supplement',
  'part-d-prescription-drug-plans',
  'special-needs-plans',
  'dental-vision-insurance',
  'final-expense-insurance',
  'life-insurance',
  'hospital-indemnity-insurance',
  'health-insurance',
] as const;

export type ProductKey = (typeof productKeys)[number];

export type ProductCategory = 'medicare' | 'coverage';

export type Product = {
  key: ProductKey;
  category: ProductCategory;
  /** 2–3 closely related products, linked from the bottom of each service page. */
  related: ProductKey[];
  /** schema.org `serviceType` */
  serviceType: string;
};

export const products: Record<ProductKey, Product> = {
  'medicare-advantage': {
    key: 'medicare-advantage',
    category: 'medicare',
    related: ['medicare-supplement', 'special-needs-plans', 'hospital-indemnity-insurance'],
    serviceType: 'Medicare Advantage (Part C) plan enrollment assistance',
  },
  'medicare-supplement': {
    key: 'medicare-supplement',
    category: 'medicare',
    related: ['part-d-prescription-drug-plans', 'medicare-advantage', 'dental-vision-insurance'],
    serviceType: 'Medicare Supplement (Medigap) insurance',
  },
  'part-d-prescription-drug-plans': {
    key: 'part-d-prescription-drug-plans',
    category: 'medicare',
    related: ['medicare-supplement', 'medicare-advantage', 'special-needs-plans'],
    serviceType: 'Medicare Part D prescription drug plan enrollment assistance',
  },
  'special-needs-plans': {
    key: 'special-needs-plans',
    category: 'medicare',
    related: ['medicare-advantage', 'part-d-prescription-drug-plans', 'hospital-indemnity-insurance'],
    serviceType: 'Chronic Condition Special Needs Plan (C-SNP) enrollment assistance',
  },
  'dental-vision-insurance': {
    key: 'dental-vision-insurance',
    category: 'coverage',
    related: ['medicare-supplement', 'hospital-indemnity-insurance', 'medicare-advantage'],
    serviceType: 'Dental and vision insurance',
  },
  'final-expense-insurance': {
    key: 'final-expense-insurance',
    category: 'coverage',
    related: ['life-insurance', 'hospital-indemnity-insurance', 'dental-vision-insurance'],
    serviceType: 'Final expense (burial) life insurance',
  },
  'life-insurance': {
    key: 'life-insurance',
    category: 'coverage',
    related: ['final-expense-insurance', 'health-insurance', 'hospital-indemnity-insurance'],
    serviceType: 'Life insurance',
  },
  'hospital-indemnity-insurance': {
    key: 'hospital-indemnity-insurance',
    category: 'coverage',
    related: ['medicare-advantage', 'final-expense-insurance', 'dental-vision-insurance'],
    serviceType: 'Hospital indemnity insurance',
  },
  'health-insurance': {
    key: 'health-insurance',
    category: 'coverage',
    related: ['dental-vision-insurance', 'life-insurance', 'hospital-indemnity-insurance'],
    serviceType: 'Individual and family health insurance (under 65)',
  },
};

export function isProductKey(value: string): value is ProductKey {
  return (productKeys as readonly string[]).includes(value);
}
