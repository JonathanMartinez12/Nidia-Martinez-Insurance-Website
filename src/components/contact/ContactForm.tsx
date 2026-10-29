'use client';

import { ChevronDown, CircleCheck, Phone, ShieldCheck, TriangleAlert } from 'lucide-react';
import Script from 'next/script';
import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent } from 'react';
import { submitContact, type ContactState } from '@/app/actions/contact';
import type { ContactField } from '@/lib/contact/schema';
import { bestTimes, leadTopics, type LeadTopic } from '@/lib/contact/options';
import { track } from '@/lib/analytics';

export type ContactFormLabels = {
  name: string;
  phone: string;
  email: string;
  details: string;
  interests: string;
  topics: Record<LeadTopic, string>;
  bestTime: string;
  bestTimes: Record<(typeof bestTimes)[number], string>;
  required: string;
  optional: string;
  submit: string;
  submitting: string;
  consent: string;
  callback: string;
  privacyNote: string;
  honeypot: string;
  errorSummary: string;
  /** Contains `{name}`; filled in on the client after a successful submit. */
  successTitle: string;
  successBackup: string;
  failureTitle: string;
};

export type ContactFormProps = {
  locale: 'en' | 'es';
  /** `full` = /contact (adds the privacy note), `compact` = page footer CTA, `sheet` = mobile bottom sheet. */
  variant: 'full' | 'compact' | 'sheet';
  labels: ContactFormLabels;
  /** Chips pre-selected from the page (service and agent pages). */
  defaultInterests?: LeadTopic[];
  phone: { display: string; e164: string };
  /** Server render time — the no-JS fallback for the time-to-submit check. */
  renderedAt: number;
  turnstileSiteKey?: string;
  /** Prefix for element ids so ids stay unique when a page has two forms. */
  idPrefix?: string;
  /** Focus the name field on mount (bottom sheet). */
  autoFocus?: boolean;
};

const initial: ContactState = { status: 'idle' };
const FORM_LOCATION = { full: 'contact_page', compact: 'inline', sheet: 'sticky_sheet' } as const;
const CALLBACK_LOCATION = { full: 'contact_page', compact: 'inline', sheet: 'sticky_bar' } as const;
const FIELD_ORDER: ContactField[] = ['name', 'phone', 'interests', 'bestTime', 'email'];

const chip =
  'flex min-h-[52px] cursor-pointer items-center justify-center rounded-full border-2 border-navy-500 bg-white px-5 text-center text-lg font-semibold text-navy-900 select-none has-[:checked]:border-navy-800 has-[:checked]:bg-navy-800 has-[:checked]:text-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-red-600';

export function ContactForm({
  locale,
  variant,
  labels,
  defaultInterests = [],
  phone,
  renderedAt,
  turnstileSiteKey,
  idPrefix = 'cf',
  autoFocus = false,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const startedAt = useRef(0);
  const started = useRef(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const bestTimeRef = useRef<string | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [interests, setInterests] = useState<LeadTopic[]>(defaultInterests);

  useEffect(() => {
    startedAt.current = Date.now();
    if (autoFocus) nameRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (state.status === 'invalid') {
      summaryRef.current?.focus();
    }
    if (state.status === 'success' || state.status === 'error') resultRef.current?.focus();
  }, [state]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (startedAt.current > 0) fd.set('startedAt', String(startedAt.current));
    fd.set('pageUrl', window.location.href);
    startTransition(() => formAction(fd));
  };

  const formLocation = FORM_LOCATION[variant];

  // Analytics: never sends what was typed — only which chips were picked and where the form is.
  useEffect(() => {
    if (state.status === 'success' && state.blocked)
      track('form_error', { form_location: formLocation, error_type: 'spam_blocked' });
    else if (state.status === 'success')
      track('generate_lead', {
        form_location: formLocation,
        interests: interests.length > 0 ? [...interests].sort().join(',') : 'none',
        best_time: bestTimeRef.current ?? undefined,
        lead_language: locale,
      });
    if (state.status === 'invalid') track('form_error', { form_location: formLocation, error_type: 'validation' });
    if (state.status === 'error') track('form_error', { form_location: formLocation, error_type: state.kind });
    // Only when a new result arrives.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onFirstFocus = () => {
    if (started.current) return;
    started.current = true;
    track('form_start', { form_location: formLocation });
  };

  const id = (f: string) => `${idPrefix}-${f}`;
  const errors = state.status === 'invalid' ? state.errors : {};
  const err = (f: ContactField) => errors[f];
  const inputCls = (f: ContactField) =>
    `mt-2 block min-h-[52px] w-full rounded-xl border-2 bg-white px-4 py-3 text-lg text-ink focus:border-navy-800 ${err(f) ? 'border-red-700' : 'border-navy-500'}`;
  const labelCls = 'block text-lg font-bold text-navy-900';
  const req = (
    <span className="text-red-700">
      <span aria-hidden> *</span>
      <span className="sr-only"> ({labels.required})</span>
    </span>
  );
  const errorText = (f: ContactField) =>
    err(f) ? (
      <p id={id(`${f}-error`)} className="mt-2 flex items-start gap-2 text-lg font-semibold text-red-700">
        <TriangleAlert aria-hidden className="mt-1 h-5 w-5 shrink-0" />
        {err(f)}
      </p>
    ) : null;
  const tel = (
    <a
      href={`tel:${phone.e164}`}
      data-call-location={CALLBACK_LOCATION[variant]}
      className="inline-flex min-h-12 items-center gap-2 font-bold whitespace-nowrap text-navy-800 underline underline-offset-4"
    >
      <Phone aria-hidden className="h-5 w-5" />
      {phone.display}
    </a>
  );

  if (state.status === 'success') {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        data-testid="contact-success"
        className="rounded-[var(--radius-card)] border-2 border-navy-200 bg-white p-6 text-center text-ink shadow-[var(--shadow-card)] sm:p-8"
      >
        <CircleCheck aria-hidden className="mx-auto h-20 w-20 text-green-700" strokeWidth={2.2} />
        <p className="mt-4 font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
          {labels.successTitle.replace('{name}', state.name.split(/\s+/)[0] || state.name)}
        </p>
        <p className="mt-4 text-lg">{labels.successBackup}</p>
        <a
          href={`tel:${phone.e164}`}
          data-call-location="form_success"
          className="mt-3 inline-flex min-h-14 items-center gap-2 rounded-xl bg-red-600 px-6 text-lg font-bold text-white no-underline hover:bg-red-700"
        >
          <Phone aria-hidden className="h-5 w-5" />
          {phone.display}
        </a>
      </div>
    );
  }

  const errorEntries = FIELD_ORDER.filter((f) => err(f));
  // Errors inside the optional section keep it open so the message is visible.
  const showDetails = detailsOpen || Boolean(err('email') || err('interests') || err('bestTime'));

  return (
    <form
      action={formAction}
      onSubmit={onSubmit}
      onFocus={onFirstFocus}
      noValidate
      aria-busy={pending}
      data-testid={`contact-form-${variant}`}
      className="relative space-y-5 text-ink"
    >
      {turnstileSiteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" /> : null}

      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          data-testid="error-summary"
          className="rounded-2xl border-2 border-red-700 bg-red-50 p-4"
        >
          <p className="text-lg font-bold text-red-800">{labels.errorSummary}</p>
          <ul className="mt-1 list-disc space-y-1 pl-6 text-lg">
            {errorEntries.map((f) => (
              <li key={f}>
                <a href={`#${id(f)}`} className="font-semibold text-red-800 underline">
                  {err(f)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {state.status === 'error' ? (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          data-testid="contact-failure"
          className="rounded-2xl border-2 border-red-700 bg-red-50 p-4"
        >
          <p className="text-lg font-bold text-red-800">{labels.failureTitle}</p>
          <p className="mt-1 text-lg">{state.message}</p>
          {tel}
        </div>
      ) : null}

      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="startedAt" defaultValue={String(renderedAt)} />
      {/* Honeypot: invisible to people, irresistible to bots. */}
      <div aria-hidden className="absolute top-0 -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('website')}>{labels.honeypot}</label>
        <input id={id('website')} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div>
        <label htmlFor={id('name')} className={labelCls}>
          {labels.name}
          {req}
        </label>
        <input
          ref={nameRef}
          id={id('name')}
          name="name"
          type="text"
          autoComplete="name"
          autoCapitalize="words"
          enterKeyHint="next"
          required
          aria-required="true"
          aria-invalid={Boolean(err('name'))}
          aria-describedby={err('name') ? id('name-error') : undefined}
          className={inputCls('name')}
        />
        {errorText('name')}
      </div>

      <div>
        <label htmlFor={id('phone')} className={labelCls}>
          {labels.phone}
          {req}
        </label>
        <input
          id={id('phone')}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          enterKeyHint="send"
          required
          aria-required="true"
          aria-invalid={Boolean(err('phone'))}
          aria-describedby={err('phone') ? id('phone-error') : undefined}
          className={inputCls('phone')}
        />
        {errorText('phone')}
      </div>

      <div className="rounded-xl border-2 border-navy-200 bg-white">
        <button
          type="button"
          id={id('details-toggle')}
          aria-expanded={showDetails}
          aria-controls={id('details')}
          onClick={() => {
            if (!showDetails) track('form_details_expand', { form_location: formLocation });
            setDetailsOpen(!showDetails);
          }}
          className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl px-4 text-left text-lg font-bold text-navy-800"
        >
          {labels.details}
          <ChevronDown
            aria-hidden
            className={`h-6 w-6 shrink-0 transition-transform motion-reduce:transition-none ${showDetails ? 'rotate-180' : ''}`}
          />
        </button>
        <div id={id('details')} hidden={!showDetails} className="space-y-5 border-t-2 border-navy-100 px-4 pt-4 pb-5">
          <fieldset>
            <legend className={labelCls}>{labels.interests}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {leadTopics.map((topic, i) => (
                <label key={topic} htmlFor={id(`interests-${i}`)} className={chip}>
                  <input
                    id={id(`interests-${i}`)}
                    type="checkbox"
                    name="interests"
                    value={topic}
                    checked={interests.includes(topic)}
                    onChange={(e) => setInterests((cur) => (e.target.checked ? [...cur, topic] : cur.filter((t) => t !== topic)))}
                    className="sr-only"
                  />
                  {labels.topics[topic]}
                </label>
              ))}
            </div>
            {errorText('interests')}
          </fieldset>

          <fieldset>
            <legend className={labelCls}>{labels.bestTime}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {bestTimes.map((time, i) => (
                <label key={time} htmlFor={id(`bestTime-${i}`)} className={chip}>
                  <input
                    id={id(`bestTime-${i}`)}
                    type="radio"
                    name="bestTime"
                    value={time}
                    onChange={() => (bestTimeRef.current = time)}
                    className="sr-only"
                  />
                  {labels.bestTimes[time]}
                </label>
              ))}
            </div>
            {errorText('bestTime')}
          </fieldset>

          <div>
            <label htmlFor={id('email')} className={labelCls}>
              {labels.email}
              <span className="font-normal text-ink"> ({labels.optional})</span>
            </label>
            <input
              id={id('email')}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              aria-invalid={Boolean(err('email'))}
              aria-describedby={err('email') ? id('email-error') : undefined}
              className={inputCls('email')}
            />
            {errorText('email')}
          </div>
        </div>
      </div>

      {turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-language={locale} /> : null}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-8 text-xl font-bold text-white shadow-sm hover:bg-red-700 disabled:cursor-wait disabled:opacity-80"
        >
          {pending ? labels.submitting : labels.submit}
        </button>
        <p data-testid="consent-text" className="mt-3 text-[0.8125rem] leading-snug text-ink">
          {labels.consent}
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-x-2 text-lg text-ink">
          <span>{labels.callback}</span>
          {tel}
        </p>
        {variant === 'full' ? (
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] text-ink">
            <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
            {labels.privacyNote}
          </p>
        ) : null}
      </div>
    </form>
  );
}
