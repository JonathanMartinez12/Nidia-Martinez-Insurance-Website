import { agents as allAgents, primaryAgent, type Agent } from '@/config/site';

/** Years for the hero badge — always the primary agent's configured value, never hard-coded. */
export function headlineYears(agent: Agent = primaryAgent): number | null {
  return agent.yearsExperience;
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
