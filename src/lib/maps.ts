import { site } from '@/config/site';

/** One-line street address, or null while the address is a TODO. */
export function addressLine(): string | null {
  const a = site.address;
  return a ? `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}` : null;
}

/** Google Maps directions to the office, pinned to our Business Profile by place ID. */
export function directionsUrl(): string | null {
  const line = addressLine();
  if (!line) return null;
  const params = new URLSearchParams({ api: '1', destination: `${site.name}, ${line}`, destination_place_id: site.googlePlaceId });
  return `https://www.google.com/maps/dir/?${params}`;
}
