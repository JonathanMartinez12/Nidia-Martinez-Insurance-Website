import { ChevronDown } from 'lucide-react';
import type { AppLocale } from '@/i18n/routing';
import type { Faq } from '@/content/types';
import { RichText } from '@/components/ui/RichText';

/**
 * Accessible, zero-JS accordion (<details>). Answers stay in the DOM, so FAQ schema
 * always mirrors visible content. Use `open` to expand all (e.g. print / FAQ page).
 */
export function FaqList({
  faqs,
  locale,
  headingLevel = 'h3',
  openFirst = false,
}: {
  faqs: Faq[];
  locale: AppLocale;
  headingLevel?: 'h2' | 'h3';
  openFirst?: boolean;
}) {
  const H = headingLevel;
  return (
    <div
      className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]"
      data-faq-list
    >
      {faqs.map((f, i) => (
        <details key={f.q} className="group" open={openFirst && i === 0}>
          <summary className="flex min-h-14 list-none items-center justify-between gap-4 px-5 py-4 hover:bg-navy-50 sm:px-6">
            <H className="font-sans text-lg font-bold text-navy-900 sm:text-xl" data-faq-question>
              {f.q}
            </H>
            <ChevronDown aria-hidden className="h-6 w-6 shrink-0 text-navy-700 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-6 text-[1.05rem] sm:px-6" data-faq-answer>
            <p>
              <RichText text={f.a} locale={locale} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
