import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { site } from '@/config/site';
import { telHref } from '@/lib/phone';
import { contactFormProps } from '@/components/contact/ContactFormSection';
import { MobileBar } from './MobileBar';

/**
 * `sms:` link that opens a prefilled text on both iOS and Android. The `?&body=` form is the one
 * both platforms accept (iOS ignores a lone `?body=` in some versions, Android ignores `&body=`).
 */
export function smsHref(e164: string, body: string): string {
  return `sms:${e164}?&body=${encodeURIComponent(body)}`;
}

/** Persistent bottom bar on phones: Call, Text, and Request a Call (bottom-sheet form). */
export async function MobileCallBar({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'MobileBar' });
  return (
    <MobileBar
      labels={{
        label: t('label'),
        call: t('call'),
        callLabel: t('callLabel', { phone: site.primaryPhone.display }),
        text: t('text'),
        textLabel: t('textLabel'),
        request: t('request'),
        sheetTitle: t('sheetTitle'),
        sheetIntro: t('sheetIntro'),
        close: t('close'),
      }}
      telHref={telHref(site.primaryPhone.e164)}
      smsHref={smsHref(site.primaryPhone.e164, t('smsBody'))}
      form={await contactFormProps(locale)}
    />
  );
}
