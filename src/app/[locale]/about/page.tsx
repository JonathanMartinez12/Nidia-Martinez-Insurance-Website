import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getContent } from '@/content';
import { agents } from '@/config/site';
import { getPage } from '@/config/pages';
import { pageLocale, type LocaleParams } from '@/lib/page';
import { pageMetadata } from '@/lib/seo';
import { localizedPath, localizedUrl } from '@/lib/urls';
import { combinedYears, headlineYears } from '@/lib/experience';
import { personSchema } from '@/lib/schema';
import { JsonLd } from '@/components/ui/JsonLd';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { AgentCard } from '@/components/sections/AgentCard';
import { FinalCta } from '@/components/sections/FinalCta';
import { PageShell } from '@/components/layout/PageShell';
import { CarrierStrip } from '@/components/sections/CarrierStrip';

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return pageMetadata(await pageLocale(params), 'about');
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: 'About' });
  const th = await getTranslations({ locale, namespace: 'Header' });
  const tc = await getTranslations({ locale, namespace: 'Common' });
  const ta = await getTranslations({ locale, namespace: 'Agent' });
  const content = getContent(locale);
  const years = headlineYears();
  const combined = combinedYears();

  return (
    <PageShell locale={locale} pageId="about">
      <PageHeader
        locale={locale}
        crumbs={[{ name: th('about'), path: localizedPath(locale, getPage('about').href) }]}
        eyebrow={tc('siteName')}
        title={content.about.h1}
        lede={content.about.lede}
      >
        <ul className="mt-8 flex flex-wrap gap-3">
          {years !== null ? (
            <li className="rounded-full bg-white px-4 py-2 font-bold text-navy-900 shadow-sm">{tc('yearsHelping', { years })}</li>
          ) : null}
          {combined !== null ? (
            <li className="rounded-full bg-white px-4 py-2 font-bold text-navy-900 shadow-sm">
              {tc('combinedYears', { years: combined })}
            </li>
          ) : null}
          <li className="rounded-full bg-white px-4 py-2 font-bold text-navy-900 shadow-sm" lang="es">
            {tc('hablamos')}
          </li>
        </ul>
      </PageHeader>

      <section aria-labelledby="team-heading" className="container-page py-12 lg:py-16">
        <h2 id="team-heading" className="text-4xl font-semibold sm:text-5xl">
          {t('teamHeading')}
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {agents.map((a) => {
            const ac = content.agents[a.slug]!;
            return <AgentCard key={a.slug} agent={a} locale={locale} headline={ac.headline} focus={ac.focus} />;
          })}
        </div>
      </section>

      <div className="container-page pb-16" data-content="about-body">
        <div className="prose-page">
          <Sections sections={content.about.sections} locale={locale} />
        </div>
      </div>

      <CarrierStrip locale={locale} variant="band" />
      <FinalCta locale={locale} />

      {agents.map((a) => {
        const ac = content.agents[a.slug]!;
        return (
          <JsonLd
            key={a.slug}
            data={personSchema({
              agent: a,
              profileUrl: localizedUrl(locale, { pathname: '/about/[agent]', params: { agent: a.slug } }),
              jobTitle: ta('role'),
              description: ac.bio[0] ?? ac.headline,
              knowsAbout: ac.focus,
            })}
          />
        );
      })}
    </PageShell>
  );
}
