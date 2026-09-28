import type { ReactNode } from 'react';
import type { AppLocale } from '@/i18n/routing';
import { Breadcrumbs, type Crumb } from '@/components/layout/Breadcrumbs';
import { Curve } from '@/components/ui/Curve';

/** Inner-page masthead: breadcrumbs, the page's single H1, lede and optional extras. */
export function PageHeader({
  locale,
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  locale: AppLocale;
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-navy-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full border-[28px] border-white/60"
      />
      <div className="container-page relative pt-6 pb-16 sm:pt-8 sm:pb-20">
        <Breadcrumbs locale={locale} items={crumbs} />
        {eyebrow ? <p className="eyebrow mt-8">{eyebrow}</p> : null}
        <h1 className={`${eyebrow ? 'mt-2' : 'mt-8'} max-w-4xl text-[2.25rem] font-semibold sm:text-5xl lg:text-[3.4rem]`}>
          {title}
        </h1>
        {lede ? <p className="mt-5 max-w-3xl text-lg sm:text-xl">{lede}</p> : null}
        {children}
      </div>
      <Curve className="absolute inset-x-0 -bottom-px h-8 w-full rotate-180 text-paper sm:h-12" />
    </div>
  );
}
