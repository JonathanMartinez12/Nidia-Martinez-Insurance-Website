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
          case 'table':
            return (
              <div key={i}>
                <p aria-hidden className="font-serif text-xl font-semibold text-navy-900">
                  {block.caption}
                </p>
                <div
                  role="region"
                  aria-label={block.caption}
                  tabIndex={0}
                  className="mt-3 overflow-x-auto rounded-2xl border border-line bg-white"
                >
                  <table className="w-full min-w-[34rem] border-collapse text-left text-[1.05rem]">
                    <caption className="sr-only">{block.caption}</caption>
                    <thead>
                      <tr className="bg-navy-50">
                        {block.head.map((h, j) => (
                          <th key={j} scope="col" className="border-b-2 border-navy-100 px-4 py-3 font-bold text-navy-900">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className="border-b border-line last:border-b-0">
                          {row.map((cell, c) =>
                            c === 0 ? (
                              <th key={c} scope="row" className="px-4 py-3 align-top font-bold text-navy-900">
                                <RichText text={cell} locale={locale} />
                              </th>
                            ) : (
                              <td key={c} className="px-4 py-3 align-top">
                                <RichText text={cell} locale={locale} />
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
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
