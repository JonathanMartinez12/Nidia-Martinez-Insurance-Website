import type { Metadata, Viewport } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import localFont from 'next/font/local';
import { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { agents, getSiteUrl, site } from '@/config/site';
import { Footer } from '@/components/layout/Footer';
import { MobileCallBar } from '@/components/layout/MobileCallBar';
import { textSizeBootScript } from '@/components/layout/TextSizeToggle';
import { Analytics } from '@/components/Analytics';
import { JsonLd } from '@/components/ui/JsonLd';
import { agencySchema } from '@/lib/schema';
import { hreflangCode, localizedUrl } from '@/lib/urls';
import { metaValues } from '@/lib/seo';
import { pageLocale } from '@/lib/page';

const display = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600'],
  // "optional": if the font isn't ready by first paint, keep the metric-matched fallback
  // for this view instead of re-painting — protects LCP/CLS on slow connections.
  display: 'optional',
  variable: '--font-display',
});

// Atkinson Hyperlegible Next — designed by the Braille Institute for low-vision readers.
// Self-hosted from the repo so next/font can compute a metric-matched fallback (no CLS).
const body = localFont({
  src: [
    { path: '../../../assets/fonts/atkinson-hyperlegible-next-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../../assets/fonts/atkinson-hyperlegible-next-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  display: 'optional',
  variable: '--font-body',
  adjustFontFallback: 'Arial',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: site.brand.navy,
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: site.name,
    formatDetection: { telephone: false, email: false, address: false },
    appleWebApp: { title: site.shortName, capable: false },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const locale = await pageLocale(params);
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const ta = await getTranslations({ locale, namespace: 'Agent' });
  const tm = await getTranslations({ locale, namespace: 'Meta' });
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const agentProfileUrls = Object.fromEntries(
    agents.map((a) => [a.slug, localizedUrl(locale, { pathname: '/about/[agent]', params: { agent: a.slug } })]),
  );

  return (
    <html lang={hreflangCode[locale]} className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: textSizeBootScript }} />
      </head>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-[60] rounded-xl bg-navy-900 px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {tc('skipToContent')}
        </a>
        {children}
        <Footer locale={locale} />
        <MobileCallBar locale={locale} />
        <JsonLd
          data={agencySchema({
            locale,
            description: tm('home.description', metaValues()),
            agentProfileUrls,
            jobTitle: ta('role'),
          })}
        />
        {gaId ? <Analytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
