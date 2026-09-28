import type { ReactNode } from 'react';
import './globals.css';

// The real root layout (with <html>) is app/[locale]/layout.tsx. This pass-through
// exists so app/not-found.tsx can render for requests outside the locale routes.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
