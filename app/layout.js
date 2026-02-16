import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/translations';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';

export const metadata = {
  metadataBase: new URL('https://www.nidiamartinezinsurance.com'),
  title: {
    default: 'Nidia Martinez Insurance LLC | Medicare & Insurance Solutions',
    template: '%s | Nidia Martinez Insurance',
  },
  description: 'Trusted Medicare and insurance solutions in Louisiana, Florida, and Mississippi. 25+ years of experience. Bilingual services available. Se Habla Español.',
  keywords: ['Medicare', 'Insurance', 'Louisiana', 'Florida', 'Mississippi', 'Medicare Advantage', 'Medicare Supplements', 'Dental Insurance', 'Vision Insurance', 'Bilingual', 'Spanish'],
  authors: [{ name: 'Nidia Martinez Insurance LLC' }],
  creator: 'Nidia Martinez Insurance LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nidiamartinezinsurance.com',
    siteName: 'Nidia Martinez Insurance LLC',
    title: 'Nidia Martinez Insurance LLC | Medicare & Insurance Solutions',
    description: 'Trusted Medicare and insurance solutions in Louisiana, Florida, and Mississippi. 25+ years of experience. Bilingual services available.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nidia Martinez Insurance LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidia Martinez Insurance LLC | Medicare & Insurance Solutions',
    description: 'Trusted Medicare and insurance solutions in Louisiana, Florida, and Mississippi. 25+ years of experience.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const translations = getTranslation('en');

  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema lang="en" />
      </head>
      <body>
        <Header lang="en" translations={translations} />
        <main>{children}</main>
        <Footer lang="en" translations={translations} />
      </body>
    </html>
  );
}
