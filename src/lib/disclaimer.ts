import { carriers, confirmedCarriers, site } from '@/config/site';
import type { AppLocale } from '@/i18n/routing';

/** "X" in the CMS TPMO disclaimer: confirmed Medicare Advantage organizations we represent. */
export function organizationsRepresented(): number {
  return confirmedCarriers(carriers.medicareAdvantage).length;
}

/** "Y" in the CMS TPMO disclaimer. `null` until the owner sets it (launch blocker). */
export function plansOffered(): number | null {
  return site.compliance.plansOffered;
}

/**
 * The CMS-required Third-Party Marketing Organization (TPMO) disclaimer.
 *
 * With Y configured, this is the current CMS wording. While Y is still a TODO it falls
 * back to the earlier CMS wording (which needs no counts) so the page never shows a
 * placeholder — `npm run check:launch` keeps flagging Y until it is set.
 */
export function tpmoDisclaimer(locale: AppLocale): string {
  const x = organizationsRepresented();
  const y = plansOffered();
  if (locale === 'es') {
    return y === null
      ? 'No ofrecemos todos los planes disponibles en su área. Cualquier información que le brindemos se limita a los planes que sí ofrecemos en su área. Comuníquese con Medicare.gov, 1-800-MEDICARE, o con su Programa Estatal de Asistencia sobre Seguros de Salud (SHIP) local para obtener información sobre todas sus opciones.'
      : `No ofrecemos todos los planes disponibles en su área. Actualmente representamos ${x} organizaciones que ofrecen ${y} productos en su área. Comuníquese con Medicare.gov, 1-800-MEDICARE, o con su Programa Estatal de Asistencia sobre Seguros de Salud (SHIP) local para obtener información sobre todas sus opciones.`;
  }
  return y === null
    ? 'We do not offer every plan available in your area. Any information we provide is limited to those plans we do offer in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.'
    : `We do not offer every plan available in your area. Currently we represent ${x} organizations which offer ${y} products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.`;
}
