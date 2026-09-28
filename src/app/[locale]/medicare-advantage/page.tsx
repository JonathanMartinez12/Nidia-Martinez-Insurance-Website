import type { Metadata } from 'next';
import { ServicePage } from '@/components/pages/ServicePage';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'service-medicare-advantage');
}

export default async function Page({ params }: LocaleParams) {
  return <ServicePage locale={await pageLocale(params)} product="medicare-advantage" />;
}
