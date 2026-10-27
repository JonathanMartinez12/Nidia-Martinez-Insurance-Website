/**
 * Call/text consent shown under the submit button (replaces the old checkbox). Bump the version
 * whenever the wording in `ContactForm.consent` changes in either language, so every stored lead
 * can be matched to the exact text the person saw.
 */
export const CONSENT_VERSION = 'call-text-2026-10-27-v1';

export type ConsentRecord = {
  version: string;
  text: string;
  locale: string;
  pageUrl: string | null;
  timestamp: string;
  method: string;
};

export function consentRecord(opts: { text: string; locale: string; pageUrl: string | null; timestamp: string }): ConsentRecord {
  return {
    version: CONSENT_VERSION,
    text: opts.text,
    locale: opts.locale,
    pageUrl: opts.pageUrl,
    timestamp: opts.timestamp,
    method: 'Disclosure shown directly under the "Request a Call" button; the lead tapped the button to submit.',
  };
}
