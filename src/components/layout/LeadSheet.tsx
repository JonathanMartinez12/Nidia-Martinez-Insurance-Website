'use client';

import { X } from 'lucide-react';
import { useEffect, useRef, type KeyboardEvent } from 'react';
import { ContactForm, type ContactFormProps } from '@/components/contact/ContactForm';
import type { MobileBarLabels } from './MobileBar';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Bottom sheet with the short lead form. Loaded only when someone taps "Request a Call", so the
 * form code never slows the first page load. Focus is trapped inside, Esc and the visible Close
 * button close it, and the page behind can't scroll.
 */
export default function LeadSheet({
  labels,
  form,
  onClose,
}: {
  labels: MobileBarLabels;
  form: Omit<ContactFormProps, 'variant' | 'idPrefix' | 'autoFocus'>;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prev;
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== 'Tab' || !panelRef.current) return;
    const items = [...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
      (el) => !el.closest('[hidden]') && !el.closest('[aria-hidden="true"]'),
    );
    if (items.length === 0) return;
    const first = items[0]!;
    const last = items[items.length - 1]!;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] md:hidden" onKeyDown={onKeyDown}>
      <div aria-hidden className="sheet-backdrop absolute inset-0 bg-navy-950/60" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-sheet-title"
        aria-describedby="lead-sheet-intro"
        data-testid="lead-sheet"
        className="sheet-panel absolute inset-x-0 bottom-0 max-h-[94dvh] overflow-y-auto rounded-t-[1.75rem] bg-paper px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[var(--shadow-lift)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 id="lead-sheet-title" className="text-2xl font-semibold text-navy-900">
              {labels.sheetTitle}
            </h2>
            <p id="lead-sheet-intro" className="mt-1 text-lg text-ink">
              {labels.sheetIntro}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            data-testid="close-lead-sheet"
            className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center gap-1 rounded-xl border-2 border-navy-700 bg-white px-3 font-bold text-navy-800"
          >
            <X aria-hidden className="h-6 w-6" />
            <span>{labels.close}</span>
          </button>
        </div>
        <div className="mt-4">
          <ContactForm {...form} variant="sheet" idPrefix="sheet" autoFocus />
        </div>
      </div>
    </div>
  );
}
