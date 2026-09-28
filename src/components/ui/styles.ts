/** Shared class recipes. Every interactive control is at least 48px tall. */
const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-center text-base font-bold leading-tight no-underline transition-colors duration-150';

export const btn = {
  primary: `${base} bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800`,
  secondary: `${base} border-2 border-navy-700 bg-white text-navy-800 hover:bg-navy-50`,
  navy: `${base} bg-navy-700 text-white hover:bg-navy-800`,
  onDark: `${base} bg-white text-navy-900 hover:bg-navy-50`,
  ghostOnDark: `${base} border-2 border-white/70 text-white hover:bg-white/10`,
};

export const card = 'rounded-[var(--radius-card)] border border-line bg-white shadow-[var(--shadow-card)]';

export const sectionY = 'py-16 sm:py-20 lg:py-24';
