import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/translations';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';

export const metadata = {
  metadataBase: new URL('https://www.nidiamartinezinsurance.com'),
  title: {
    default: 'Nidia Martinez Insurance LLC | Soluciones de Medicare y Seguros',
    template: '%s | Nidia Martinez Insurance',
  },
  description: 'Soluciones confiables de Medicare y seguros en Louisiana, Florida y Mississippi. Más de 25 años de experiencia. Servicios bilingües disponibles.',
  keywords: ['Medicare', 'Seguros', 'Louisiana', 'Florida', 'Mississippi', 'Medicare Advantage', 'Suplementos de Medicare', 'Seguro Dental', 'Seguro de Visión', 'Bilingüe', 'Español'],
  alternates: {
    canonical: 'https://www.nidiamartinezinsurance.com/es',
    languages: {
      'en-US': 'https://www.nidiamartinezinsurance.com',
      'es-US': 'https://www.nidiamartinezinsurance.com/es',
    },
  },
};

export default function SpanishLayout({ children }) {
  const translations = getTranslation('es');

  return (
    <html lang="es">
      <head>
        <LocalBusinessSchema lang="es" />
      </head>
      <body>
        <Header lang="es" translations={translations} />
        <main>{children}</main>
        <Footer lang="es" translations={translations} />
      </body>
    </html>
  );
}
