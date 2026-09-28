import { useId } from 'react';

/** The PLUS 65 mark: a white plus on navy with the red curve from the business card. */
export function LogoMark({ className, title }: { className?: string; title?: string }) {
  const clipId = `p65-${useId().replace(/:/g, '')}`;
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="64" height="64" rx="15" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="64" height="64" fill="#233E84" />
        <path d="M-4 49C14 38 44 37 68 47V70H-4Z" fill="#1A2F66" />
        <path d="M-4 52.5C15 42 43 41.5 68 50.5" fill="none" stroke="#C8202F" strokeWidth="4.5" />
        <path d="M32 13.5V38.5M19.5 26H44.5" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      </g>
    </svg>
  );
}
