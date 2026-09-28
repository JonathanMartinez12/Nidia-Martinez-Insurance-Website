import { Info, TriangleAlert } from 'lucide-react';
import type { AppLocale } from '@/i18n/routing';
import type { Block, Section } from '@/content/types';
import { RichText } from './RichText';

export function Blocks({ blocks, locale }: { blocks: Block[]; locale: AppLocale }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i}>
                <RichText text={block.text} locale={locale} />
              </p>
            );
          case 'h3':
            return <h3 key={i}>{block.text}</h3>;
          case 'ul':
          case 'ol': {
            const List = block.type;
            return (
              <List key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} locale={locale} />
                  </li>
                ))}
              </List>
            );
          }
          case 'callout': {
            const warn = block.tone === 'warning';
            const Icon = warn ? TriangleAlert : Info;
            return (
              <div
                key={i}
                role="note"
                className={`rounded-2xl border-l-[6px] p-5 sm:p-6 ${warn ? 'border-red-600 bg-red-50' : 'border-navy-700 bg-navy-50'}`}
              >
                <p className="flex items-center gap-2 font-serif text-xl font-semibold text-navy-900">
                  <Icon aria-hidden className={`h-6 w-6 shrink-0 ${warn ? 'text-red-700' : 'text-navy-700'}`} />
                  {block.title}
                </p>
                <p className="mt-2">
                  <RichText text={block.text} locale={locale} />
                </p>
              </div>
            );
          }
        }
      })}
    </>
  );
}

export function Sections({ sections, locale }: { sections: Section[]; locale: AppLocale }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.id} aria-labelledby={s.id}>
          <h2 id={s.id}>{s.heading}</h2>
          <Blocks blocks={s.blocks} locale={locale} />
        </section>
      ))}
    </>
  );
}
