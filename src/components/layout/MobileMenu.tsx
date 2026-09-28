'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export function MobileMenu({
  openLabel,
  closeLabel,
  menuLabel,
  navLabel,
  children,
}: {
  openLabel: string;
  closeLabel: string;
  menuLabel: string;
  navLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((o) => !o)}
        className="tap inline-flex flex-col items-center justify-center rounded-xl border border-line bg-white px-2 text-navy-900 hover:bg-navy-50"
      >
        {open ? <X aria-hidden className="h-6 w-6" /> : <Menu aria-hidden className="h-6 w-6" />}
        <span aria-hidden className="text-[0.65rem] font-bold tracking-wide uppercase">
          {menuLabel}
        </span>
      </button>
      <nav
        id={id}
        aria-label={navLabel}
        hidden={!open}
        className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white shadow-[var(--shadow-lift)]"
      >
        {children}
      </nav>
    </>
  );
}
