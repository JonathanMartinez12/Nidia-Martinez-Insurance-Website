import type { AppLocale } from '@/i18n/routing';
import { tpmoDisclaimer } from '@/lib/disclaimer';

/** CMS-required TPMO disclaimer, rendered from config (see src/lib/disclaimer.ts). */
export function TpmoDisclaimer({ locale, className = '' }: { locale: AppLocale; className?: string }) {
  return (
    <p className={className} data-testid="tpmo-disclaimer">
      {tpmoDisclaimer(locale)}
    </p>
  );
}
