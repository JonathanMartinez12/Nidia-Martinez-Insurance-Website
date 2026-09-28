import { notFound } from 'next/navigation';
import { pageLocale, type LocaleParams } from '@/lib/page';

// Any unknown path inside a locale renders the localized, bilingual 404.
export default async function CatchAll({ params }: LocaleParams) {
  await pageLocale(params);
  notFound();
}
