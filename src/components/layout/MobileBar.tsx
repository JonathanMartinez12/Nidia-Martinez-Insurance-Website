'use client';

import { MessageSquareText, PhoneCall, Phone } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useCallback, useRef, useState } from 'react';
import type { ContactFormProps } from '@/components/contact/ContactForm';
import { track } from '@/lib/analytics';

const LeadSheet = dynamic(() => import('./LeadSheet'), { ssr: false });

export type MobileBarLabels = {
  label: string;
  call: string;
  callLabel: string;
  text: string;
  textLabel: string;
  request: string;
  sheetTitle: string;
  sheetIntro: string;
  close: string;
};

/**
 * Phones only: a sticky bar with Call / Text / Request a Call. "Request a Call" opens the short
 * lead form in an accessible bottom sheet; focus returns to the button when it closes.
 */
export function MobileBar({
  labels,
  telHref,
  smsHref,
  form,
}: {
  labels: MobileBarLabels;
  telHref: string;
  smsHref: string;
  form: Omit<ContactFormProps, 'variant' | 'idPrefix' | 'autoFocus'>;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Start fetching the sheet code as soon as someone reaches for the button.
  const preload = () => void import('./LeadSheet');

  const btn =
    'inline-flex min-h-14 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 text-center text-[0.95rem] leading-tight font-bold no-underline';

  return (
    <>
      <aside
        aria-label={labels.label}
        data-testid="mobile-bar"
        className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(17_31_74/0.35)] backdrop-blur md:hidden"
      >
        <div className="flex gap-2">
          <a
            href={telHref}
            aria-label={labels.callLabel}
            onClick={() => track('click_to_call', { location: 'mobile_bar' })}
            className={`${btn} bg-red-600 text-white active:bg-red-700`}
          >
            <Phone aria-hidden className="h-6 w-6 shrink-0" />
            <span aria-hidden>{labels.call}</span>
          </a>
          <a
            href={smsHref}
            aria-label={labels.textLabel}
            data-testid="sms-link"
            onClick={() => track('sms_click', { location: 'mobile_bar' })}
            className={`${btn} border-2 border-navy-700 bg-white text-navy-800`}
          >
            <MessageSquareText aria-hidden className="h-6 w-6 shrink-0" />
            <span aria-hidden>{labels.text}</span>
          </a>
          <button
            ref={triggerRef}
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            data-testid="open-lead-sheet"
            onPointerDown={preload}
            onFocus={preload}
            onClick={() => {
              setOpen(true);
              track('form_open', { location: 'mobile_bar' });
            }}
            className={`${btn} flex-[1.3] bg-navy-800 text-white active:bg-navy-900`}
          >
            <PhoneCall aria-hidden className="h-6 w-6 shrink-0" />
            <span>{labels.request}</span>
          </button>
        </div>
      </aside>
      {open ? <LeadSheet labels={labels} form={form} onClose={close} /> : null}
    </>
  );
}
