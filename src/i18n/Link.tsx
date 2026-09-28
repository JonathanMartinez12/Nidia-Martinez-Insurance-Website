import NextLink from 'next/link';
import type { ComponentProps } from 'react';
import { getLocale } from 'next-intl/server';
import type { AppHref, StaticPathname } from '@/config/pages';
import type { AppLocale } from '@/i18n/routing';
import { localizedPath } from '@/lib/urls';

type Props = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: StaticPathname | AppHref;
  /** Defaults to the request locale. */
  locale?: AppLocale;
};

/**
 * Server-only localized link: resolves the translated slug on the server and renders a
 * plain next/link, so no i18n runtime ships to the browser.
 */
export async function Link({ href, locale, ...props }: Props) {
  const loc = locale ?? ((await getLocale()) as AppLocale);
  const target = typeof href === 'string' ? ({ pathname: href } as AppHref) : href;
  return <NextLink href={localizedPath(loc, target)} {...props} />;
}
