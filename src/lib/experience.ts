import { agents as allAgents, primaryAgent, type Agent } from '@/config/site';

/**
 * N in the "Over N years" headline: the primary agent's configured years rounded down to a
 * multiple of 10 and kept strictly below the real figure, so "Over N" is always true
 * (22 → 20, 30 → 20, 31 → 30). `null` (headline hidden) while unset or under 11 years.
 */
export function headlineYears(agent: Agent = primaryAgent): number | null {
  const years = agent.yearsExperience;
  if (years === null) return null;
  const rounded = Math.floor((years - 1) / 10) * 10;
  return rounded > 0 ? rounded : null;
}

/**
 * Combined years across the team. Returns `null` (so the line stays hidden) while any
 * agent's value is still a TODO.
 */
export function combinedYears(list: Agent[] = allAgents): number | null {
  if (list.length === 0) return null;
  let total = 0;
  for (const a of list) {
    if (a.yearsExperience === null) return null;
    total += a.yearsExperience;
  }
  return total;
}
