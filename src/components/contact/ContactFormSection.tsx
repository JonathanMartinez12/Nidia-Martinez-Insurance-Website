import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { productKeys, type ProductKey } from '@/config/products';
import { site } from '@/config/site';
import { ContactForm, type ContactFormLabels } from './ContactForm';

// Build time for static pages; a harmless fallback for the time-to-submit check without JS.
const renderedAt = Date.now();

/** Server wrapper: resolves translated labels so the client bundle ships no message catalog. */
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
  const t = await getTranslations({ locale, namespace: 'ContactForm' });
  const tp = await getTranslations({ locale, namespace: 'Products' });
  const phone = site.primaryPhone.display;
  const keys = [
    'name',
    'phone',
    'phoneHint',
    'email',
    'emailHint',
    'language',
    'languageEn',
    'languageEs',
    'contactMethod',
    'methodCall',
    'methodText',
    'methodEmail',
    'interests',
    'interestsHint',
    'bestTime',
    'bestTimeNone',
    'bestTimeMorning',
    'bestTimeAfternoon',
    'bestTimeEvening',
    'bestTimeAny',
    'message',
    'messageHint',
    'consent',
    'required',
    'optional',
    'submit',
    'submitting',
    'privacyNote',
    'honeypot',
    'errorSummary',
    'successTitle',
    'failureTitle',
  ] as const;
  const labels = Object.fromEntries(keys.map((k) => [k, t(k)])) as Omit<ContactFormLabels, 'successBody'>;
  return (
    <ContactForm
      locale={locale}
      variant={variant}
      labels={{ ...labels, successBody: t('successBody', { phone }) }}
      products={productKeys.map((k) => ({ key: k, label: tp(`${k}.name`) }))}
      defaultInterests={defaultInterests}
      phone={site.primaryPhone}
      renderedAt={renderedAt}
      turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || undefined}
      idPrefix={idPrefix}
    />
  );
}
