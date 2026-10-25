import type { Metadata } from 'next';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { GuideArticle } from '@/components/pages/GuideArticle';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'guide-turning-65');
}

export default async function Page({ params }: LocaleParams) {
  return <GuideArticle locale={await pageLocale(params)} guideKey="turning-65" />;
}
