import { agents, carriers, site } from '@/config/site';

export type LaunchItem = { id: string; blocker: boolean; message: string };

/** Every open TODO in the config, launch blockers first. */
export function openTodos(): LaunchItem[] {
  const items: LaunchItem[] = [];
  if (site.compliance.plansOffered === null) {
    items.push({
      id: 'compliance.plansOffered',
      blocker: true,
      message: 'TPMO disclaimer "Y" (number of plans/products offered in the service area) — set site.compliance.plansOffered',
    });
  }
  if (!process.env.NEXT_PUBLIC_SITE_URL && !process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    items.push({ id: 'env.NEXT_PUBLIC_SITE_URL', blocker: false, message: 'Production domain — set NEXT_PUBLIC_SITE_URL' });
  }
  for (const a of agents) {
    if (a.yearsExperience === null)
      items.push({ id: `${a.slug}.yearsExperience`, blocker: false, message: `${a.name}: years of experience` });
    if (a.headshot === null) items.push({ id: `${a.slug}.headshot`, blocker: false, message: `${a.name}: headshot photo` });
    if (a.licenseNumber === null)
      items.push({ id: `${a.slug}.licenseNumber`, blocker: false, message: `${a.name}: Louisiana license number` });
    if (a.npn === null) items.push({ id: `${a.slug}.npn`, blocker: false, message: `${a.name}: National Producer Number (NPN)` });
  }
  if (site.address === null)
    items.push({ id: 'site.address', blocker: false, message: 'Street address (or confirm service-area-only business)' });
  if (site.hours === null) items.push({ id: 'site.hours', blocker: false, message: 'Office hours' });
  for (const c of [...carriers.medicareAdvantage, ...carriers.medicareSupplement]) {
    if (!c.confirmed) items.push({ id: `carrier.${c.name}`, blocker: false, message: `Confirm carrier: ${c.name}` });
  }
  if (site.sameAs.length === 0)
    items.push({ id: 'site.sameAs', blocker: false, message: 'Google Business Profile / social profile URLs (schema sameAs)' });
  return items.sort((a, b) => Number(b.blocker) - Number(a.blocker));
}

export function launchBlockers(): LaunchItem[] {
  return openTodos().filter((i) => i.blocker);
}
