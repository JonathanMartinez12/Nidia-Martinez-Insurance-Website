import NextLink from 'next/link';
import type { AppLocale } from '@/i18n/routing';

/**
 * EN | ES switch. `alternatePath` is the equivalent page in the other language
 * (translated slug + params), resolved on the server — no client JS needed.
 */
export function LanguageToggle({
  locale,
  alternatePath,
  label,
  switchLabel,
  currentLabel,
}: {
  locale: AppLocale;
  alternatePath: string;
  label: string;
  switchLabel: string;
  currentLabel: string;
}) {
  const other: AppLocale = locale === 'en' ? 'es' : 'en';
  const base = 'tap inline-flex items-center justify-center rounded-lg px-3 text-sm font-bold';
  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {(['en', 'es'] as const).map((code) =>
        code === locale ? (
          <span key={code} className={`${base} bg-white text-navy-900`}>
            <span aria-hidden>{code.toUpperCase()}</span>
            <span className="sr-only">{currentLabel}</span>
          </span>
        ) : (
          <NextLink
            key={code}
            href={alternatePath}
            hrefLang={other === 'es' ? 'es-US' : 'en-US'}
            lang={other}
            data-testid="language-toggle"
            className={`${base} text-white no-underline hover:bg-white/15`}
          >
            <span aria-hidden>{code.toUpperCase()}</span>
            <span className="sr-only">{switchLabel}</span>
          </NextLink>
        ),
      )}
    </nav>
  );
}
