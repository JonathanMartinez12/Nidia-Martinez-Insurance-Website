import { Mail, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import type { Agent } from '@/config/site';
import { telHref } from '@/lib/phone';
import { card } from '@/components/ui/styles';
import { AgentPortrait } from './AgentPortrait';

/** Bio card used on About (and anywhere the team is introduced). */
export async function AgentCard({
  agent,
  locale,
  headline,
  focus,
  headingLevel = 'h3',
}: {
  agent: Agent;
  locale: AppLocale;
  headline: string;
  focus: string[];
  headingLevel?: 'h2' | 'h3';
}) {
  const t = await getTranslations({ locale, namespace: 'Common' });
  const ta = await getTranslations({ locale, namespace: 'About' });
  const H = headingLevel;
  return (
    <article className={`${card} flex flex-col overflow-hidden sm:flex-row lg:flex-col xl:flex-row`}>
      <AgentPortrait
        agent={agent}
        alt={t('headshotAlt', { name: agent.name })}
        sizes="(min-width: 1280px) 16rem, (min-width: 1024px) 40vw, (min-width: 640px) 14rem, 100vw"
        className="m-3 shrink-0 sm:w-56 lg:w-auto xl:w-56"
      />
      <div className="flex flex-1 flex-col p-6 pt-3 sm:pt-6 lg:pt-3 xl:pt-6">
        <H className="text-2xl font-semibold sm:text-3xl">{agent.name}</H>
        <p className="mt-1 font-semibold text-red-700">{headline}</p>
        {agent.yearsExperience !== null ? (
          <p className="mt-2 inline-flex w-fit rounded-full bg-sand px-3 py-1 text-sm font-bold text-navy-900">
            {t('yearsExperience', { years: agent.yearsExperience })}
          </p>
        ) : null}
        <p className="mt-4 text-sm font-bold tracking-wide text-muted uppercase">{ta('specialties')}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {focus.map((f) => (
            <li key={f} className="rounded-lg bg-navy-50 px-2.5 py-1 text-[0.95rem] font-semibold text-navy-800">
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[0.95rem]">
          <span className="font-bold">{t('languagesSpoken')}:</span> {t('english')}, {t('spanish')}
        </p>
        <div className="mt-4 space-y-1">
          <p className="text-sm font-bold tracking-wide text-muted uppercase">{ta('directContact')}</p>
          <a href={telHref(agent.phone.e164)} className="flex min-h-12 items-center gap-2 font-bold no-underline hover:underline">
            <Phone aria-hidden className="h-5 w-5 text-red-600" />
            {agent.phoneLabel === 'cell' ? t('cell') : t('direct')}: {agent.phone.display}
          </a>
          <a
            href={`mailto:${agent.email}`}
            className="flex min-h-12 items-center gap-2 font-semibold break-all no-underline hover:underline"
          >
            <Mail aria-hidden className="h-5 w-5 shrink-0 text-red-600" />
            {agent.email}
          </a>
        </div>
        <Link
          href={{ pathname: '/about/[agent]', params: { agent: agent.slug } }}
          className="mt-4 inline-flex min-h-12 items-center font-bold text-navy-700 underline underline-offset-4"
        >
          {ta('viewProfile', { name: agent.givenName })}
        </Link>
      </div>
    </article>
  );
}
