import { Link } from '@/i18n/Link';
import { LogoMark } from './LogoMark';

type Props = {
  tone?: 'light' | 'dark';
  homeLabel: string;
  tagline: string;
  className?: string;
};

/** Wordmark rendered in live text (crisp at any size, no image request). */
export function Logo({ tone = 'light', homeLabel, tagline, className = '' }: Props) {
  const onDark = tone === 'dark';
  return (
    <Link href="/" className={`group inline-flex min-h-12 items-center gap-2.5 no-underline sm:gap-3 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
      <span aria-hidden className="p65-wordmark flex flex-col leading-none">
        <span
          className={`font-serif text-[1.3rem] font-semibold tracking-tight sm:text-[1.55rem] ${onDark ? 'text-white' : 'text-navy-900'}`}
        >
          PLUS <span className={onDark ? 'text-white' : 'text-red-600'}>65</span>
        </span>{' '}
        <span
          className={`mt-1 hidden text-[0.62rem] font-bold tracking-[0.2em] uppercase min-[400px]:block sm:text-[0.66rem] ${onDark ? 'text-navy-100' : 'text-navy-700'}`}
        >
          {tagline}
        </span>
      </span>
      {/* The accessible name never depends on which parts of the wordmark are visible. */}
      <span className="sr-only">Plus 65 Medicare Advisors — {homeLabel}</span>
    </Link>
  );
}
