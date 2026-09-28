import Image from 'next/image';
import { Link } from '@/i18n/Link';
import { site } from '@/config/site';

type Props = {
  homeLabel: string;
  tagline: string;
  className?: string;
};

/** Header logo: the official seal + the "Martinez / Insurance Agency" wordmark in live text (crisp at small sizes). */
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
      <span aria-hidden className="brand-wordmark flex flex-col leading-none">
        <span className="font-serif text-[1.15rem] font-semibold tracking-tight text-navy-700 sm:text-[1.55rem]">Martinez</span>{' '}
        <span className="mt-1 hidden text-[0.64rem] font-bold tracking-[0.16em] text-navy-900 uppercase sm:block sm:text-[0.66rem]">
          {tagline}
        </span>
      </span>
    </Link>
  );
}
