import type { ReactNode } from 'react';
import type { AppLocale } from '@/i18n/routing';
import { getPage } from '@/config/pages';
import { localizedPath } from '@/lib/urls';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function resolveHref(target: string, locale: AppLocale): string {
  if (target.startsWith('page:')) {
    const [id, hash] = target.slice(5).split('#');
    const path = localizedPath(locale, getPage(id!).href);
    return hash ? `${path}#${hash}` : path;
  }
  return target;
}

/** Renders **bold** and [links](target) inside a content string. */
export function RichText({ text, locale }: { text: string; locale: AppLocale }): ReactNode {
  const parts = text.split(TOKEN).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const href = resolveHref(link[2]!, locale);
      const external = /^https?:\/\//.test(href);
      return (
        <a key={i} href={href} {...(external ? { rel: 'noopener' } : {})}>
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

/** Plain text version (for schema and word counts). */
export function stripRichText(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}
