import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/pages/LegalPage';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'terms');
}

export default async function Page({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'Legal' });
  return <LegalPage locale={locale} pageId="terms" content={getContent(locale).terms} updatedLabel={t('updated')} />;
}
