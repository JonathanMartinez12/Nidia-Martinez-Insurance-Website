import landscape from '@/data/ma-landscape-la.json';
import type { Section } from './types';

/**
 * "How many Medicare Advantage (Part C) plans are in your parish?" built from CMS's official
 * Landscape file (src/data/ma-landscape-la.json; refresh with `node scripts/refresh-ma-landscape.mjs`).
 * Counts only, never plan names, premiums or benefits.
 * Source: https://www.cms.gov/medicare/coverage/prescription-drug-coverage (CY Landscape zip).
 */
export function maParishSection(locale: 'en' | 'es'): Section {
  const { year, source, parishes } = landscape;
  const updated = new Intl.DateTimeFormat(locale === 'es' ? 'es-US' : 'en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(
    new Date(`${source.dataLastUpdated}T00:00:00Z`),
  );
  const rows = parishes.map((p) => [p.parish, String(p.hmo), String(p.ppo), String(p.snp), `**${p.total}**`]);
  if (locale === 'es') {
    return {
      id: 'plans-by-parish',
      heading: '¿Cuántos planes Medicare Advantage (Parte C) hay en su parroquia?',
      blocks: [
        {
          type: 'p',
          text: `Esta es la cantidad de planes Medicare Advantage que CMS (los Centros de Servicios de Medicare y Medicaid) publica para ${year} en cada parroquia donde trabajamos, por tipo de plan. Más opciones no significa un plan mejor para usted: lo que importa es que cubra a sus médicos, sus medicamentos y su presupuesto, y eso lo revisamos juntos.`,
        },
        {
          type: 'table',
          caption: `Planes Medicare Advantage (Parte C) disponibles en ${year}, por parroquia`,
          head: ['Parroquia', 'HMO', 'PPO', 'Planes para necesidades especiales (SNP)', 'Total'],
          rows,
        },
        {
          type: 'p',
          text: `HMO incluye los planes HMO-POS; PPO incluye los PPO regionales. Los planes para necesidades especiales son solo para quienes califican, por ejemplo personas con Medicare y Medicaid o con ciertas afecciones crónicas. No se incluyen los planes de empleadores. Fuente: CMS, [archivo Landscape CY${year}](${source.url}) (${source.file}, datos actualizados el ${updated}).`,
        },
      ],
    };
  }
  return {
    id: 'plans-by-parish',
    heading: 'How many Medicare Advantage (Part C) plans are in your parish?',
    blocks: [
      {
        type: 'p',
        text: `Here is how many Medicare Advantage plans CMS (the Centers for Medicare & Medicaid Services) lists for ${year} in each parish we serve, by plan type. More choices doesn't mean a better plan for you: what matters is whether a plan covers your doctors, your prescriptions and your budget, and we check that with you.`,
      },
      {
        type: 'table',
        caption: `Medicare Advantage (Part C) plans available in ${year}, by parish`,
        head: ['Parish', 'HMO', 'PPO', 'Special Needs Plans (SNP)', 'Total'],
        rows,
      },
      {
        type: 'p',
        text: `HMO includes HMO-POS plans; PPO includes regional PPOs. Special Needs Plans are only for people who qualify, such as people with both Medicare and Medicaid or certain chronic conditions. Employer plans aren't included. Source: CMS, [CY${year} Landscape file](${source.url}) (${source.file}, data last updated ${updated}).`,
      },
    ],
  };
}
