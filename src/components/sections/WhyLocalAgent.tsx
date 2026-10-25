import type { AppLocale } from '@/i18n/routing';
import type { Section } from '@/content/types';
import { Blocks } from '@/components/ui/Blocks';

/** Home: "Why work with a local Medicare agent?" in long-form prose. */
export function WhyLocalAgent({ section, locale }: { section: Section; locale: AppLocale }) {
  return (
    <section aria-labelledby={section.id} className="py-16 sm:py-20 lg:py-24">
      <div className="container-page prose-page max-w-3xl">
        <h2 id={section.id} className="text-4xl font-semibold sm:text-5xl">
          {section.heading}
        </h2>
        <Blocks blocks={section.blocks} locale={locale} />
      </div>
    </section>
  );
}
