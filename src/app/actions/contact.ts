'use server';

import { headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing, type AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { contactSchema, fieldErrorCodes, formDataToInput, type ContactField } from '@/lib/contact/schema';
import { leadOwner, recipients } from '@/lib/contact/routing';
import { isHoneypotTripped, isTooFast, verifyTurnstile } from '@/lib/contact/spam';
import { clientIp, rateLimit } from '@/lib/contact/rate-limit';
import { confirmationEmail, leadEmail } from '@/lib/contact/email';
import { sendEmail } from '@/lib/contact/transport';

export type ContactState =
  | { status: 'idle' }
  | { status: 'invalid'; errors: Partial<Record<ContactField, string>> }
  | { status: 'success' }
  | { status: 'error'; message: string };

const log = (event: string, data: Record<string, unknown> = {}) =>
  console.info(JSON.stringify({ scope: 'contact-form', event, ...data }));

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const rawLocale = formData.get('locale');
  const locale: AppLocale = hasLocale(routing.locales, rawLocale) ? rawLocale : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: 'ContactForm' });
  const tp = await getTranslations({ locale: 'en', namespace: 'Products' });
  const phone = site.primaryPhone.display;

  const h = await headers();
  const ip = clientIp(h);

  // 1. Honeypot: people never see this field. Pretend success so bots learn nothing.
  if (isHoneypotTripped(formData.get('website'))) {
    log('rejected_honeypot', { ip });
    return { status: 'success' };
  }

  // 2. Validate first, so a person who submits too quickly still sees helpful errors.
  const parsed = contactSchema.safeParse(formDataToInput(formData));
  if (!parsed.success) {
    const codes = fieldErrorCodes(parsed.error);
    const errors: Partial<Record<ContactField, string>> = {};
    for (const [field, code] of Object.entries(codes) as Array<[ContactField, string]>) {
      errors[field] = t.has(`errors.${code}` as 'errors.nameRequired')
        ? t(`errors.${code}` as 'errors.nameRequired')
        : t('errors.nameRequired');
    }
    return { status: 'invalid', errors };
  }
  const lead = parsed.data;

  // 3. A complete, valid form submitted faster than a person can type is a bot.
  if (isTooFast(formData.get('startedAt'))) {
    log('rejected_too_fast', { ip });
    return { status: 'success' };
  }

  // 4. Rate limit per IP, then optional Cloudflare Turnstile.
  if (!rateLimit(ip).ok) {
    log('rate_limited', { ip });
    return { status: 'error', message: t('rateLimited', { phone }) };
  }
  if (!(await verifyTurnstile(formData.get('cf-turnstile-response'), ip))) {
    log('rejected_turnstile', { ip });
    return { status: 'error', message: t('failureBody', { phone }) };
  }

  // 5. Email the team (every address in CONTACT_TO_EMAILS).
  const to = recipients();
  if (to.length === 0) {
    console.error('[contact] CONTACT_TO_EMAILS is empty — lead could not be delivered', { name: lead.name });
    return { status: 'error', message: t('failureBody', { phone }) };
  }
  const owner = leadOwner(lead.interests);
  const pageUrl = formData.get('pageUrl');
  const message = leadEmail({
    lead,
    owner,
    to,
    labels: {
      interests: lead.interests.map((k) => tp(`${k}.name`)),
      language: lead.language === 'es' ? 'Spanish (Español)' : 'English',
      contactMethod: { call: 'Phone call', text: 'Text message', email: 'Email' }[lead.contactMethod],
      bestTime: lead.bestTime
        ? { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening', anytime: 'Anytime' }[lead.bestTime]
        : null,
      // Store the exact consent wording the lead saw, in their language.
      consentText: t('consent'),
    },
    meta: {
      submittedAt: new Date().toISOString(),
      pageUrl: typeof pageUrl === 'string' ? pageUrl.slice(0, 500) : null,
      ip,
      userAgent: h.get('user-agent'),
    },
  });

  const sent = await sendEmail(message);
  if (!sent.ok) {
    console.error('[contact] Lead email failed', { error: sent.error, owner });
    return { status: 'error', message: t('failureBody', { phone }) };
  }
  log('lead_sent', { owner, interests: lead.interests, language: lead.language });

  // 6. Auto-confirmation to the lead, in the language they chose (non-fatal if it fails).
  if (lead.email) {
    const tl = await getTranslations({ locale: lead.language, namespace: 'ContactForm.email_confirm' });
    const confirmation = confirmationEmail({
      to: lead.email,
      copy: {
        subject: tl('subject'),
        greeting: tl('greeting', { name: lead.name }),
        body: tl('body'),
        callUs: tl('callUs'),
        scamNote: tl('scamNote'),
        signoff: tl('signoff'),
      },
    });
    const confirmed = await sendEmail(confirmation);
    if (!confirmed.ok) console.error('[contact] Confirmation email failed', { error: confirmed.error });
  }

  return { status: 'success' };
}
