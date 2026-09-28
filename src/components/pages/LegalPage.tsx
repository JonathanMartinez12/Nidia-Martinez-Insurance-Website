import { getFormatter } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import type { LegalContent } from '@/content/types';
import { getPage } from '@/config/pages';
import { localizedPath } from '@/lib/urls';
import { Sections } from '@/components/ui/Blocks';
import { PageHeader } from '@/components/sections/PageHeader';
import { PageShell } from '@/components/layout/PageShell';

export async function LegalPage({
  locale,
  pageId,
  content,
  updatedLabel,
}: {
  locale: AppLocale;
  pageId: string;
  content: LegalContent;
  updatedLabel: string;
}) {
  const format = await getFormatter({ locale });
  const updated = format.dateTime(new Date(`${content.updated}T12:00:00`), { dateStyle: 'long' });
  return (
    <PageShell locale={locale} pageId={pageId}>
      <PageHeader
        locale={locale}
        crumbs={[{ name: content.h1, path: localizedPath(locale, getPage(pageId).href) }]}
        title={content.h1}
      >
        <p className="mt-4 font-semibold text-muted">
          {updatedLabel}: {updated}
        </p>
      </PageHeader>
      <div className="container-page py-12 lg:py-16" data-content="legal-body">
        <div className="prose-page">
          <Sections sections={content.sections} locale={locale} />
        </div>
      </div>
    </PageShell>
  );
}
