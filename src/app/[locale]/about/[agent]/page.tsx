import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/Link';
import { routing } from '@/i18n/routing';
import { getContent } from '@/content';
import { agents } from '@/config/site';
import { getPage } from '@/config/pages';
import { setRequestLocaleFrom } from '@/lib/page-agent';
import { pageMetadata } from '@/lib/seo';
import { localizedPath, localizedUrl } from '@/lib/urls';
import { telHref } from '@/lib/phone';
import { personSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';
import { RichText } from '@/components/ui/RichText';
import { Sections } from '@/components/ui/Blocks';
import { btn, card } from '@/components/ui/styles';
import { PageHeader } from '@/components/sections/PageHeader';
import { AgentPortrait } from '@/components/sections/AgentPortrait';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';

type Params = { params: Promise<{ locale: string; agent: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => agents.map((a) => ({ locale, agent: a.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, agent } = await setRequestLocaleFrom(params);
  return pageMetadata(locale, `agent-${agent.slug}`);
}

export default async function AgentPage({ params }: Params) {
  const { locale, agent } = await setRequestLocaleFrom(params);
  const t = await getTranslations({ locale, namespace: 'Agent' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const content = getContent(locale).agents[agent.slug];
  if (!content) notFound();
  const others = agents.filter((a) => a.slug !== agent.slug);
  const href = { pathname: '/about/[agent]' as const, params: { agent: agent.slug } };

  return (
    <PageShell locale={locale} pageId={`agent-${agent.slug}`}>
      <PageHeader
        locale={locale}
        crumbs={[
          { name: th('about'), path: localizedPath(locale, getPage('about').href) },
          { name: agent.name, path: localizedPath(locale, href) },
        ]}
        eyebrow={t('role')}
        title={agent.name}
        lede={content.headline}
      />
      <div className="container-page grid gap-12 py-12 lg:grid-cols-[22rem_minmax(0,1fr)] lg:py-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <AgentPortrait
            agent={agent}
            alt={tc('headshotAlt', { name: agent.name })}
            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 24rem, 100vw"
            priority
            className="mx-auto max-w-sm shadow-[var(--shadow-lift)]"
          />
          <div className={`${card} mt-6 p-6`}>
            <h2 className="text-2xl font-semibold">{t('contactHeading', { name: agent.givenName })}</h2>
            <a href={telHref(agent.phone.e164)} className={`${btn.primary} mt-4 w-full`}>
              <Phone aria-hidden className="h-5 w-5" />
              {t('callAgent', { name: agent.givenName })}: {agent.phone.display}
            </a>
            <a href={`mailto:${agent.email}`} className="mt-3 flex min-h-12 items-center gap-2 font-semibold break-all">
              <Mail aria-hidden className="h-5 w-5 shrink-0 text-red-600" />
              {agent.email}
            </a>
            <p className="mt-3 text-[0.95rem]">
              <span className="font-bold">{tc('languagesSpoken')}:</span> {tc('english')}, {tc('spanish')}
            </p>
          </div>
        </div>
        <article className="min-w-0" data-content="agent-body">
          {agent.yearsExperience !== null ? (
            <p className="inline-flex rounded-full bg-sand px-4 py-2 font-bold text-navy-900">
              {tc('yearsExperience', { years: agent.yearsExperience })}
            </p>
          ) : null}
          <div className="prose-page mt-6">
            {content.bio.map((p) => (
              <p key={p}>
                <RichText text={p} locale={locale} />
              </p>
            ))}
            <h2>{t('focusHeading')}</h2>
            <ul>
              {content.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h2>{t('credentials')}</h2>
            <ul>
              <li>{t('licensedIn')}</li>
              {agent.licenseNumber ? <li>{tc('licenseNumber', { number: agent.licenseNumber })}</li> : null}
              {agent.npn ? <li>{tc('npn', { number: agent.npn })}</li> : null}
              {!agent.licenseNumber && !agent.npn ? <li>{t('credentialsPending')}</li> : null}
            </ul>
            <Sections sections={content.sections} locale={locale} />
          </div>
          {others.length > 0 ? (
            <div className={`${card} mt-10 p-6`}>
              <h2 className="text-2xl font-semibold">{t('otherAgent')}</h2>
              <ul className="mt-3 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={{ pathname: '/about/[agent]', params: { agent: o.slug } }}
                      className="inline-flex min-h-12 items-center font-bold underline underline-offset-4"
                    >
                      {getContent(locale).agents[o.slug]?.headline
                        ? `${o.name} — ${getContent(locale).agents[o.slug]!.headline}`
                        : o.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      </div>
      <FinalCta locale={locale} defaultInterests={agent.specialties} />
      <JsonLd
        data={personSchema({
          agent,
          profileUrl: localizedUrl(locale, href),
          jobTitle: t('role'),
          description: content.bio[0] ?? content.headline,
          knowsAbout: content.focus,
        })}
      />
    </PageShell>
  );
}
