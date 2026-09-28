'use client';

import { Printer } from 'lucide-react';

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex min-h-12 items-center gap-2 rounded-xl border-2 border-navy-700 bg-white px-5 font-bold text-navy-800 hover:bg-navy-50"
    >
      <Printer aria-hidden className="h-5 w-5" />
      {label}
    </button>
  );
}
