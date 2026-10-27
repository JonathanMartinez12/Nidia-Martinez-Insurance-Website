import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import type { ProductKey } from '@/config/products';
import { site } from '@/config/site';
import { bestTimes, leadTopics, topicForProduct, type LeadTopic } from '@/lib/contact/schema';
import { ContactForm, type ContactFormLabels, type ContactFormProps } from './ContactForm';

// Build time for static pages; a harmless fallback for the time-to-submit check without JS.
const renderedAt = Date.now();

/** Translated labels for the lead form (resolved on the server so the client ships no catalog). */
export async function contactFormLabels(locale: AppLocale): Promise<ContactFormLabels> {
  const t = await getTranslations({ locale, namespace: 'ContactForm' });
  const keys = [
    'name',
    'phone',
    'email',
    'details',
    'interests',
    'bestTime',
    'required',
    'optional',
    'submit',
    'submitting',
    'consent',
    'callback',
    'privacyNote',
    'honeypot',
    'errorSummary',
    'successBackup',
    'failureTitle',
  ] as const;
  return {
    ...(Object.fromEntries(keys.map((k) => [k, t(k)])) as Pick<ContactFormLabels, (typeof keys)[number]>),
    // `{name}` is filled in on the client once we know it.
    successTitle: t('successTitle', { name: '{name}' }),
    topics: Object.fromEntries(leadTopics.map((k) => [k, t(`topics.${k}`)])) as ContactFormLabels['topics'],
    bestTimes: Object.fromEntries(bestTimes.map((k) => [k, t(`bestTimes.${k}`)])) as ContactFormLabels['bestTimes'],
  };
}

/** Everything the client form needs except the variant/id. */
export async function contactFormProps(
  locale: AppLocale,
  products: ProductKey[] = [],
): Promise<Omit<ContactFormProps, 'variant' | 'idPrefix'>> {
  const defaultInterests = [...new Set(products.map(topicForProduct).filter((t): t is LeadTopic => t !== null))];
  return {
    locale,
    labels: await contactFormLabels(locale),
    defaultInterests,
    phone: site.primaryPhone,
    renderedAt,
    turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || undefined,
  };
}

/** Server wrapper for the inline form (/contact and the page-footer CTA). */
export async function ContactFormSection({
  locale,
  variant,
  defaultInterests = [],
  idPrefix,
}: {
  locale: AppLocale;
  variant: 'full' | 'compact';
  defaultInterests?: ProductKey[];
  idPrefix?: string;
}) {
  return <ContactForm {...await contactFormProps(locale, defaultInterests)} variant={variant} idPrefix={idPrefix} />;
}
