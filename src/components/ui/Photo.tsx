import Image from 'next/image';
import { photos, type PhotoKey } from '@/config/photos';

/** One of the team's office photos (see src/config/photos.ts), rounded to match the cards. */
export function Photo({ id, alt, sizes, className = '' }: { id: PhotoKey; alt: string; sizes: string; className?: string }) {
  const p = photos[id];
  return (
    <Image
      src={p.src}
      alt={alt}
      width={p.width}
      height={p.height}
      sizes={sizes}
      className={`h-auto w-full rounded-[var(--radius-card)] ${className}`}
    />
  );
}
