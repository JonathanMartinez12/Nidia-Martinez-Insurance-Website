'use client';

import { useSyncExternalStore } from 'react';

type Size = 'normal' | 'large';
const KEY = 'p65-text-size';

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-text-size'] });
  return () => observer.disconnect();
}

const getSnapshot = (): Size => (document.documentElement.dataset.textSize === 'large' ? 'large' : 'normal');
const getServerSnapshot = (): Size => 'normal';

function setSize(size: Size) {
  document.documentElement.dataset.textSize = size;
  try {
    localStorage.setItem(KEY, size);
  } catch {
    /* storage unavailable — the choice still applies for this page view */
  }
}

/** Runs before first paint (inlined in <head>) so a saved preference never causes a layout shift. */
export const textSizeBootScript = `try{if(localStorage.getItem('${KEY}')==='large')document.documentElement.dataset.textSize='large'}catch(e){}`;

export function TextSizeToggle({ label, normalLabel, largeLabel }: { label: string; normalLabel: string; largeLabel: string }) {
  const size = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const item =
    'tap inline-flex items-center justify-center rounded-lg px-2 font-bold leading-none transition-colors aria-pressed:bg-white aria-pressed:text-navy-900';
  return (
    <div role="group" aria-label={label} className="flex items-center gap-1">
      <span aria-hidden className="mr-1 hidden text-sm text-navy-100 lg:inline">
        {label}
      </span>
      <button type="button" aria-pressed={size === 'normal'} onClick={() => setSize('normal')} className={`${item} text-base`}>
        <span aria-hidden>A</span>
        <span className="sr-only">{normalLabel}</span>
      </button>
      <button type="button" aria-pressed={size === 'large'} onClick={() => setSize('large')} className={`${item} text-xl`}>
        <span aria-hidden>A+</span>
        <span className="sr-only">{largeLabel}</span>
      </button>
    </div>
  );
}
