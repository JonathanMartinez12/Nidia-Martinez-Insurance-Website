/**
 * Simple in-memory sliding-window rate limit per IP. It is per server instance (good
 * enough to blunt form spam on a small site); swap in a shared store such as Upstash
 * Redis if abuse ever becomes a problem.
 */
const WINDOW_MS = 10 * 60 * 1000;

function maxPerWindow(): number {
  const fromEnv = Number(process.env.FORM_RATE_LIMIT);
  return Number.isFinite(fromEnv) && fromEnv > 0 ? fromEnv : 5;
}

const hits = new Map<string, number[]>();

export function rateLimit(key: string, now: number = Date.now()): { ok: boolean; remaining: number } {
  const limit = maxPerWindow();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false, remaining: 0 };
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep the map from growing without bound.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return { ok: true, remaining: limit - recent.length };
}

export function resetRateLimit() {
  hits.clear();
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return headers.get('x-real-ip') ?? 'unknown';
}
