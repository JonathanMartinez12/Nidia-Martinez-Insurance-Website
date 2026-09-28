import { defineRouting } from 'next-intl/routing';

/**
 * Locale-prefixed routing: English at `/`, Spanish at `/es/...`.
 * Keys are the internal (English) pathnames = folder names under `src/app/[locale]`.
 * Values are the public, localized slugs.
 *
 * To add a page: create the folder, add its pathname here, add it to
 * `src/config/pages.ts`, and add `Meta.*` strings to both message files.
 */
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // Never auto-redirect by browser language: every URL has one stable language for search engines.
  localeDetection: false,
  localeCookie: false,
  // hreflang is emitted by the Metadata API (with x-default); no duplicate Link headers.
  alternateLinks: false,
  pathnames: {
    '/': '/',
    '/medicare-advantage': { en: '/medicare-advantage', es: '/medicare-advantage' },
    '/medicare-supplement': { en: '/medicare-supplement', es: '/seguro-suplementario-medicare' },
    '/part-d-prescription-drug-plans': {
      en: '/part-d-prescription-drug-plans',
      es: '/planes-de-medicamentos-parte-d',
    },
    '/special-needs-plans': { en: '/special-needs-plans', es: '/planes-para-necesidades-especiales' },
    '/dental-vision-insurance': { en: '/dental-vision-insurance', es: '/seguro-dental-y-de-vision' },
    '/final-expense-insurance': { en: '/final-expense-insurance', es: '/seguro-de-gastos-finales' },
    '/life-insurance': { en: '/life-insurance', es: '/seguro-de-vida' },
    '/hospital-indemnity-insurance': {
      en: '/hospital-indemnity-insurance',
      es: '/seguro-de-indemnizacion-hospitalaria',
    },
    '/health-insurance': { en: '/health-insurance', es: '/seguro-de-salud' },
    '/annual-enrollment-period': { en: '/annual-enrollment-period', es: '/periodo-de-inscripcion-anual' },
    '/medicare-scam-protection': {
      en: '/medicare-scam-protection',
      es: '/proteccion-contra-fraudes-de-medicare',
    },
    '/about': { en: '/about', es: '/sobre-nosotros' },
    '/about/[agent]': { en: '/about/[agent]', es: '/sobre-nosotros/[agent]' },
    '/service-area': { en: '/service-area', es: '/area-de-servicio' },
    '/service-area/[city]': { en: '/service-area/[city]', es: '/area-de-servicio/[city]' },
    '/faq': { en: '/faq', es: '/preguntas-frecuentes' },
    '/contact': { en: '/contact', es: '/contacto' },
    '/privacy-policy': { en: '/privacy-policy', es: '/politica-de-privacidad' },
    '/terms': { en: '/terms', es: '/terminos-de-uso' },
    '/accessibility': { en: '/accessibility', es: '/accesibilidad' },
  },
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
