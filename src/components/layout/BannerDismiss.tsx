'use client';

import { X } from 'lucide-react';
import { track } from '@/lib/analytics';
import { BANNER_DISMISS_KEY } from '@/lib/season';

/** Hides the seasonal banner for the rest of the browser session. */
export function BannerDismiss({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        const root = document.documentElement;
        const season = root.dataset.season ?? '';
        try {
          sessionStorage.setItem(BANNER_DISMISS_KEY, season);
        } catch {
          /* private mode: hide for this page only */
        }
        root.dataset.bannerDismissed = '1';
        track('banner_dismiss', { season });
      }}
      className="tap grid shrink-0 place-items-center rounded-lg text-white hover:bg-white/15"
    >
      <X aria-hidden className="h-6 w-6" />
    </button>
  );
}
