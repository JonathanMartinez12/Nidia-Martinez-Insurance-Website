'use client';

import { MapPin } from 'lucide-react';
import { useState } from 'react';
import { track } from '@/lib/analytics';

/**
 * Click-to-load Google map: a fixed-ratio placeholder until tapped, so no map scripts, cookies or
 * layout shift on page load.
 */
export function MapFacade({ query, title, label }: { query: string; title: string; label: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-navy-50">
      {loaded ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setLoaded(true);
            track('map_open', {});
          }}
          className="absolute inset-0 grid place-items-center text-lg font-bold text-navy-900 hover:bg-navy-100"
        >
          <span className="inline-flex min-h-14 items-center gap-2 rounded-full bg-white px-6 shadow-[var(--shadow-card)]">
            <MapPin aria-hidden className="h-6 w-6 text-red-600" />
            {label}
          </span>
        </button>
      )}
    </div>
  );
}
