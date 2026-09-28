import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing, type AppLocale } from '@/i18n/routing';
import { getAgent, type Agent } from '@/config/site';

export async function setRequestLocaleFrom(
  params: Promise<{ locale: string; agent: string }>,
): Promise<{ locale: AppLocale; agent: Agent }> {
  const { locale, agent: slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const agent = getAgent(slug);
  if (!agent) notFound();
  setRequestLocale(locale);
  return { locale, agent };
}
