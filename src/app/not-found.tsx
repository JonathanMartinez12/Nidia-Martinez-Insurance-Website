import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/config/site';

export const metadata: Metadata = {
  title: `Page not found · Página no encontrada | ${site.name}`,
  robots: { index: false },
};

/** Fallback 404 for requests that never reach a locale (bilingual by design). */
export default function GlobalNotFound() {
  return (
    <html lang="en-US">
      <body style={{ fontFamily: 'system-ui, sans-serif', background: '#fffdf9', color: '#14213d', margin: 0 }}>
        <main style={{ maxWidth: 640, margin: '0 auto', padding: '64px 20px', fontSize: 18, lineHeight: 1.6 }}>
          <h1 style={{ color: '#111f4a' }}>Page not found</h1>
          <p>
            We couldn&apos;t find that page. <Link href="/">Go to the home page</Link> or call{' '}
            <a href={`tel:${site.primaryPhone.e164}`}>{site.primaryPhone.display}</a>.
          </p>
          <p lang="es">
            No encontramos esa página. <Link href="/es">Ir a la página principal en español</Link> o llame al{' '}
            <a href={`tel:${site.primaryPhone.e164}`}>{site.primaryPhone.display}</a>.
          </p>
        </main>
      </body>
    </html>
  );
}
