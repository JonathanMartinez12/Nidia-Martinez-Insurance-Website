import { Award, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import type { AppLocale } from '@/i18n/routing';
import { agents, site } from '@/config/site';
import { headlineYears } from '@/lib/experience';
import { telHref } from '@/lib/phone';
import { btn } from '@/components/ui/styles';
import { Swoosh } from '@/components/ui/Curve';
import { AgentPortrait } from './AgentPortrait';

export async function Hero({ locale }: { locale: AppLocale }) {
  const t = await getTranslations({ locale, namespace: 'Home' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const tag = await getTranslations({ locale, namespace: 'Agent' });
  const years = headlineYears();

  // Both portraits once both headshots exist; until then, a real photo always leads.
  const withPhoto = agents.filter((a) => a.headshot);
  const team = withPhoto.length === 1 ? [withPhoto[0]!, ...agents.filter((a) => !a.headshot)] : agents;

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,#e3e9f6,transparent)] opacity-80"
      />
      <div className="container-page relative grid items-center gap-10 pt-10 pb-16 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pt-16 lg:pb-24">
        <div>
          {years !== null ? (
            <p className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-sand px-4 py-2 text-[0.95rem] font-bold text-navy-900">
              <Award aria-hidden className="h-5 w-5 text-red-600" />
              {tc('yearsHelping', { years })}
            </p>
          ) : null}
          <h1 id="hero-heading" className="mt-5 text-[2.35rem] font-semibold sm:text-5xl lg:text-[3.6rem]">
            {t('h1')}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink sm:text-xl">{t('lede')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(site.primaryPhone.e164)} className={`${btn.primary} text-lg`}>
              <Phone aria-hidden className="h-5 w-5" />
              {tc('callPhone', { phone: site.primaryPhone.display })}
            </a>
            <Link href="/contact" className={`${btn.secondary} text-lg`}>
              {tc('freeConsultation')}
            </Link>
          </div>
          {agents
            .filter((a) => a.phone.e164 !== site.primaryPhone.e164)
            .map((a) => (
              <p key={a.slug} className="mt-3">
                <a
                  href={telHref(a.phone.e164)}
                  className="inline-flex min-h-12 items-center gap-2 text-lg font-bold text-navy-800 underline underline-offset-4 hover:text-navy-900"
                >
                  <Phone aria-hidden className="h-5 w-5 shrink-0 text-red-600" />
                  {t('callAgentDirect', { name: a.givenName, phone: a.phone.display })}
                </a>
              </p>
            ))}
          <p className="mt-3 font-semibold text-muted">{t('reassurance')}</p>
        </div>

        <figure className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-800 p-4 shadow-[var(--shadow-lift)] sm:p-6">
            <Swoosh className="absolute inset-0 h-full w-full" />
            <p className="on-dark relative mb-4 text-sm font-bold tracking-[0.16em] text-navy-100 uppercase">{t('teamLabel')}</p>
            <div className="relative grid grid-cols-2 gap-3 sm:gap-5">
              {team.map((agent, i) => (
                <div key={agent.slug} className={i === 1 ? 'mt-8 sm:mt-12' : ''}>
                  <AgentPortrait
                    agent={agent}
                    alt={tc('headshotAlt', { name: agent.name })}
                    sizes="(min-width: 1024px) 18rem, 45vw"
                    priority={i === 0}
                    className="ring-4 ring-white/90"
                  />
                  <p className="mt-3 font-serif text-lg font-semibold text-white sm:text-xl">{agent.name}</p>
                  <p className="text-sm text-navy-100">{tag('role')}</p>
                </div>
              ))}
            </div>
          </div>
          <figcaption className="sr-only">{t('teamCaption')}</figcaption>
        </figure>
      </div>
    </section>
  );
}
