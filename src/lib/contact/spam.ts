/** Minimum time (ms) a human needs to fill the form. Bots submit instantly. */
export function minSubmitMs(): number {
  const fromEnv = Number(process.env.FORM_MIN_SUBMIT_MS);
  return Number.isFinite(fromEnv) && fromEnv >= 0 ? fromEnv : 3000;
}

/** The honeypot field is visually hidden; any value means a bot filled it. */
export function isHoneypotTripped(value: FormDataEntryValue | null): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

/** True when the submission came too fast (or the render timestamp is missing/forged). */
export function isTooFast(startedAt: FormDataEntryValue | null, now: number = Date.now()): boolean {
  const started = Number(startedAt);
  if (!Number.isFinite(started) || started <= 0) return true;
  const elapsed = now - started;
  if (elapsed < 0) return true;
  return elapsed < minSubmitMs();
}

/** Cloudflare Turnstile is enabled only when both keys are configured. */
export function turnstileEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY);
}

export async function verifyTurnstile(token: FormDataEntryValue | null, ip: string): Promise<boolean> {
  if (!turnstileEnabled()) return true;
  if (typeof token !== 'string' || !token) return false;
  try {
    const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY ?? '', response: token, remoteip: ip });
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch (err) {
    console.error('[contact] Turnstile verification failed', err);
    return false;
  }
}
