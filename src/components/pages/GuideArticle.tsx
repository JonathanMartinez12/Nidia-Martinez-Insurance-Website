import { getTranslations } from 'next-intl/server';
import type { AppLocale } from '@/i18n/routing';
import { getContent } from '@/content';
import { getGuide, type GuideKey } from '@/config/guides';
import { getPage } from '@/config/pages';
import { metaValues } from '@/lib/seo';
import { localizedPath } from '@/lib/urls';
import { GuidePage } from './GuidePage';

/** A /guides/* page: GuidePage with the hub breadcrumb, byline and Article schema. */
export async function GuideArticle({ locale, guideKey }: { locale: AppLocale; guideKey: GuideKey }) {
  const t = await getTranslations({ locale, namespace: 'Guides' });
  const tm = await getTranslations({ locale, namespace: 'Meta' });
  const guide = getGuide(guideKey);
  const content = getContent(locale).guides[guideKey];
  const pageId = `guide-${guideKey}`;
  return (
    <GuidePage
      locale={locale}
      pageId={pageId}
      content={content}
      crumbName={content.h1}
      parentCrumb={{ name: t('hub'), path: localizedPath(locale, getPage('guides').href) }}
      article={{
        published: guide.published,
        modified: guide.modified,
        description: tm(`${getPage(pageId).metaKey}.description` as 'home.description', metaValues()),
      }}
      eyebrow={t('eyebrow')}
      faqHeading={t('faqHeading')}
    />
  );
}
