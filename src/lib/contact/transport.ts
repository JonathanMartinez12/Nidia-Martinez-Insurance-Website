import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { EmailMessage } from './email';

export type SendResult = { ok: true; id: string } | { ok: false; error: string };

/**
 * EMAIL_TRANSPORT:
 *  - "resend" (default when RESEND_API_KEY is set) — sends through Resend
 *  - "mock"   — writes each message as JSON to EMAIL_OUTBOX_DIR (used by e2e tests)
 */
function transportMode(): 'resend' | 'mock' | 'none' {
  const mode = process.env.EMAIL_TRANSPORT;
  if (mode === 'mock') return 'mock';
  if (mode === 'resend' || process.env.RESEND_API_KEY) return 'resend';
  return 'none';
}

export async function sendEmail(message: EmailMessage): Promise<SendResult> {
  const mode = transportMode();

  if (mode === 'mock') {
    if (process.env.EMAIL_MOCK_FAIL === '1') return { ok: false, error: 'mock failure' };
    const dir = process.env.EMAIL_OUTBOX_DIR ?? path.join(process.cwd(), '.e2e-outbox');
    await mkdir(dir, { recursive: true });
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    await writeFile(path.join(dir, `${id}.json`), JSON.stringify({ id, ...message }, null, 2));
    return { ok: true, id };
  }

  if (mode === 'none') {
    return { ok: false, error: 'No email transport configured (set RESEND_API_KEY).' };
  }

  const from = process.env.CONTACT_FROM_EMAIL;
  if (!from) return { ok: false, error: 'CONTACT_FROM_EMAIL is not set.' };

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from,
      to: message.to,
      subject: message.subject,
      html: message.html,
      text: message.text,
      ...(message.replyTo ? { replyTo: message.replyTo } : {}),
    });
    if (error || !data) return { ok: false, error: error?.message ?? 'Unknown Resend error' };
    return { ok: true, id: data.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
