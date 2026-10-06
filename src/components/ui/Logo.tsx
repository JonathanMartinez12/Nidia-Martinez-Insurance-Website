import Image from 'next/image';
import { Link } from '@/i18n/Link';
import { site } from '@/config/site';

type Props = {
  homeLabel: string;
  tagline: string;
  className?: string;
};

/** Header logo: the official seal + the "Martinez / Insurance Solutions" wordmark in live text (crisp at small sizes). */
export function Logo({ homeLabel, tagline, className = '' }: Props) {
  return (
    <Link href="/" className={`group inline-flex min-h-12 items-center gap-2 no-underline sm:gap-3 ${className}`}>
      <Image
        src={site.brand.seal}
        alt={`${site.name} — ${homeLabel}`}
        width={48}
        height={48}
        priority
        className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
      />
      <span aria-hidden className="brand-wordmark flex min-w-0 flex-col overflow-hidden leading-none">
        <span className="truncate font-serif text-[1.15rem] font-semibold tracking-tight text-navy-700 sm:text-[1.55rem]">
          Martinez
        </span>{' '}
        <span className="mt-1 hidden text-[0.64rem] font-bold tracking-[0.16em] text-navy-900 uppercase sm:block sm:text-[0.66rem]">
          {tagline}
        </span>
      </span>
    </Link>
  );
}

/** Larger white lockup for navy surfaces (footer, contact card): seal + live-text wordmark. */
export function BrandLockup({ alt, tagline, className = '' }: { alt: string; tagline: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-4 ${className}`}>
      <Image
        src={site.brand.sealWhite}
        alt={alt}
        width={72}
        height={72}
        className="h-16 w-16 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]"
      />
      <span aria-hidden className="flex flex-col leading-none text-white">
        <span className="font-serif text-[2.1rem] font-semibold tracking-tight sm:text-[2.4rem]">Martinez</span>
        <span className="mt-2 text-[0.8rem] font-bold tracking-[0.2em] uppercase">{tagline}</span>
      </span>
    </span>
  );
}
