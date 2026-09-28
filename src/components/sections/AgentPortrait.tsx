import Image from 'next/image';
import type { Agent } from '@/config/site';

type Props = {
  agent: Agent;
  alt: string;
  /** CSS `sizes` for next/image. */
  sizes: string;
  priority?: boolean;
  className?: string;
};

/**
 * Agent headshot via next/image (AVIF/WebP, sized, no layout shift). Until a headshot
 * is configured it renders a tasteful initials monogram in the same frame.
 */
export function AgentPortrait({ agent, alt, sizes, priority = false, className = '' }: Props) {
  const frame = `relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${className}`;
  if (agent.headshot && agent.headshotSize) {
    return (
      <div className={frame}>
        <Image
          src={agent.headshot}
          alt={alt}
          width={agent.headshotSize.width}
          height={agent.headshotSize.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  const initials = `${agent.givenName[0] ?? ''}${agent.familyName[0] ?? ''}`;
  return (
    <div
      role="img"
      aria-label={agent.name}
      className={`${frame} bg-[radial-gradient(120%_90%_at_30%_15%,#2f4fa0_0%,#233e84_45%,#111f4a_100%)]`}
    >
      <svg
        viewBox="0 0 400 500"
        aria-hidden
        focusable="false"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="200" cy="190" r="120" fill="none" stroke="#fff" strokeOpacity=".14" strokeWidth="2" />
        <circle cx="200" cy="190" r="150" fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="2" />
        <path d="M-10 420C90 360 250 350 410 392V510H-10Z" fill="#111F4A" fillOpacity=".75" />
        <path d="M-10 404C95 344 255 334 410 378" fill="none" stroke="#C8202F" strokeWidth="6" />
      </svg>
      <span
        aria-hidden
        className="absolute inset-x-0 top-[38%] -translate-y-1/2 text-center font-serif text-[clamp(3rem,9vw,5.5rem)] font-semibold tracking-wide text-white"
      >
        {initials}
      </span>
    </div>
  );
}
