'use client';

import { CircleCheck, Phone, ShieldCheck, TriangleAlert } from 'lucide-react';
import Script from 'next/script';
import { startTransition, useActionState, useEffect, useRef, type FormEvent } from 'react';
import { submitContact, type ContactState } from '@/app/actions/contact';
import type { ContactField } from '@/lib/contact/schema';
import { track } from '@/lib/analytics';

export type ContactFormLabels = {
  name: string;
  phone: string;
  phoneHint: string;
  email: string;
  emailHint: string;
  language: string;
  languageEn: string;
  languageEs: string;
  contactMethod: string;
  methodCall: string;
  methodText: string;
  methodEmail: string;
  interests: string;
  interestsHint: string;
  bestTime: string;
  bestTimeNone: string;
  bestTimeMorning: string;
  bestTimeAfternoon: string;
  bestTimeEvening: string;
  bestTimeAny: string;
  message: string;
  messageHint: string;
  consent: string;
  required: string;
  optional: string;
  submit: string;
  submitting: string;
  privacyNote: string;
  honeypot: string;
  errorSummary: string;
  successTitle: string;
  successBody: string;
  failureTitle: string;
};

type Props = {
  locale: 'en' | 'es';
  variant: 'full' | 'compact';
  labels: ContactFormLabels;
  products: Array<{ key: string; label: string }>;
  /** Pre-selected interests (service pages submit these as hidden inputs in compact mode). */
  defaultInterests?: string[];
  phone: { display: string; e164: string };
  /** Server render time — the no-JS fallback for the time-to-submit check. */
  renderedAt: number;
  turnstileSiteKey?: string;
  /** Prefix for element ids so ids stay unique if a page ever has two forms. */
  idPrefix?: string;
};

const initial: ContactState = { status: 'idle' };

const FIELD_ORDER: ContactField[] = [
  'name',
  'phone',
  'email',
  'language',
  'contactMethod',
  'interests',
  'bestTime',
  'message',
  'consent',
];

export function ContactForm({
  locale,
  variant,
  labels,
  products,
  defaultInterests = [],
  phone,
  renderedAt,
  turnstileSiteKey,
  idPrefix = 'cf',
}: Props) {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const startedAt = useRef(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status === 'invalid') summaryRef.current?.focus();
    if (state.status === 'success' || state.status === 'error') resultRef.current?.focus();
    if (state.status === 'success') track('generate_lead', { form_variant: variant, language: locale });
  }, [state, variant, locale]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (startedAt.current > 0) fd.set('startedAt', String(startedAt.current));
    fd.set('pageUrl', window.location.href);
    startTransition(() => formAction(fd));
  };

  const id = (f: string) => `${idPrefix}-${f}`;
  const errors = state.status === 'invalid' ? state.errors : {};
  const err = (f: ContactField) => errors[f];
  const describedBy = (f: ContactField, hint?: boolean) =>
    [hint ? id(`${f}-hint`) : null, err(f) ? id(`${f}-error`) : null].filter(Boolean).join(' ') || undefined;

  const inputCls = (f: ContactField) =>
    `mt-2 block min-h-12 w-full rounded-xl border-2 bg-white px-4 py-3 text-lg text-ink shadow-inner placeholder:text-muted focus:border-navy-700 ${err(f) ? 'border-red-600' : 'border-navy-200'}`;
  const labelCls = 'block text-lg font-bold text-navy-900';
  const req = (
    <span className="text-red-700">
      <span aria-hidden> *</span>
      <span className="sr-only"> ({labels.required})</span>
    </span>
  );
  const opt = <span className="font-normal text-muted"> ({labels.optional})</span>;
  const errorText = (f: ContactField) =>
    err(f) ? (
      <p id={id(`${f}-error`)} className="mt-2 flex items-start gap-2 font-semibold text-red-700">
        <TriangleAlert aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
        {err(f)}
      </p>
    ) : null;

  if (state.status === 'success') {
    return (
      <div
        ref={resultRef}
        tabIndex={-1}
        role="status"
        data-testid="contact-success"
        className="rounded-[var(--radius-card)] border-2 border-navy-200 bg-white p-6 text-ink shadow-[var(--shadow-card)] sm:p-8"
      >
        <p className="flex items-center gap-3 font-serif text-2xl font-semibold text-navy-900">
          <CircleCheck aria-hidden className="h-8 w-8 shrink-0 text-navy-700" />
          {labels.successTitle}
        </p>
        <p className="mt-3 text-lg">{labels.successBody}</p>
        <a
          href={`tel:${phone.e164}`}
          className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-red-600 px-6 font-bold text-white no-underline hover:bg-red-700"
        >
          <Phone aria-hidden className="h-5 w-5" />
          {phone.display}
        </a>
      </div>
    );
  }

  const full = variant === 'full';
  const errorEntries = FIELD_ORDER.filter((f) => err(f));

  return (
    <form
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      data-testid={`contact-form-${variant}`}
      className="relative space-y-6 text-ink"
    >
      {turnstileSiteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" /> : null}

      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          data-testid="error-summary"
          className="rounded-2xl border-2 border-red-600 bg-red-50 p-5"
        >
          <p className="font-bold text-red-800">{labels.errorSummary}</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {errorEntries.map((f) => (
              <li key={f}>
                <a
                  href={`#${id(f === 'language' || f === 'contactMethod' || f === 'interests' ? `${f}-0` : f)}`}
                  className="font-semibold text-red-800 underline"
                >
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
          className="rounded-2xl border-2 border-red-600 bg-red-50 p-5"
        >
          <p className="font-bold text-red-800">{labels.failureTitle}</p>
          <p className="mt-1">{state.message}</p>
          <a href={`tel:${phone.e164}`} className="mt-3 inline-flex min-h-12 items-center gap-2 font-bold text-red-800 underline">
            <Phone aria-hidden className="h-5 w-5" />
            {phone.display}
          </a>
        </div>
      ) : null}

      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="startedAt" defaultValue={String(renderedAt)} />
      {/* Honeypot: invisible to people, irresistible to bots. */}
      <div aria-hidden className="absolute top-0 -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id('website')}>{labels.honeypot}</label>
        <input id={id('website')} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className={full ? 'grid gap-6 sm:grid-cols-2' : 'grid gap-6'}>
        <div>
          <label htmlFor={id('name')} className={labelCls}>
            {labels.name}
            {req}
          </label>
          <input
            id={id('name')}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(err('name'))}
            aria-describedby={describedBy('name')}
            className={inputCls('name')}
          />
          {errorText('name')}
        </div>
        <div>
          <label htmlFor={id('phone')} className={labelCls}>
            {labels.phone}
            {req}
          </label>
          <p id={id('phone-hint')} className="mt-1 text-[0.95rem] text-muted">
            {labels.phoneHint}
          </p>
          <input
            id={id('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required
            aria-required="true"
            aria-invalid={Boolean(err('phone'))}
            aria-describedby={describedBy('phone', true)}
            className={inputCls('phone')}
          />
          {errorText('phone')}
        </div>
        <div className={full ? 'sm:col-span-2' : ''}>
          <label htmlFor={id('email')} className={labelCls}>
            {labels.email}
            {opt}
          </label>
          <p id={id('email-hint')} className="mt-1 text-[0.95rem] text-muted">
            {labels.emailHint}
          </p>
          <input
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(err('email'))}
            aria-describedby={describedBy('email', true)}
            className={inputCls('email')}
          />
          {errorText('email')}
        </div>
      </div>

      <fieldset>
        <legend className={labelCls}>{labels.language}</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {(
            [
              ['en', labels.languageEn],
              ['es', labels.languageEs],
            ] as const
          ).map(([value, text], i) => (
            <label
              key={value}
              htmlFor={id(`language-${i}`)}
              className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-2 border-navy-200 bg-white px-4 has-[:checked]:border-navy-700 has-[:checked]:bg-navy-50"
            >
              <input
                id={id(`language-${i}`)}
                type="radio"
                name="language"
                value={value}
                defaultChecked={value === locale}
                className="h-5 w-5 accent-navy-700"
              />
              <span lang={value} className="font-semibold">
                {text}
              </span>
            </label>
          ))}
        </div>
        {errorText('language')}
      </fieldset>

      {full ? (
        <>
          <fieldset>
            <legend className={labelCls}>{labels.contactMethod}</legend>
            <div className="mt-2 flex flex-wrap gap-3">
              {(
                [
                  ['call', labels.methodCall],
                  ['text', labels.methodText],
                  ['email', labels.methodEmail],
                ] as const
              ).map(([value, text], i) => (
                <label
                  key={value}
                  htmlFor={id(`contactMethod-${i}`)}
                  className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-2 border-navy-200 bg-white px-4 has-[:checked]:border-navy-700 has-[:checked]:bg-navy-50"
                >
                  <input
                    id={id(`contactMethod-${i}`)}
                    type="radio"
                    name="contactMethod"
                    value={value}
                    defaultChecked={value === 'call'}
                    className="h-5 w-5 accent-navy-700"
                  />
                  <span className="font-semibold">{text}</span>
                </label>
              ))}
            </div>
            {errorText('contactMethod')}
          </fieldset>

          <fieldset aria-describedby={id('interests-hint')}>
            <legend className={labelCls}>
              {labels.interests}
              {opt}
            </legend>
            <p id={id('interests-hint')} className="mt-1 text-[0.95rem] text-muted">
              {labels.interestsHint}
            </p>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {products.map((p, i) => (
                <label
                  key={p.key}
                  htmlFor={id(`interests-${i}`)}
                  className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-2 border-navy-200 bg-white px-4 py-2 has-[:checked]:border-navy-700 has-[:checked]:bg-navy-50"
                >
                  <input
                    id={id(`interests-${i}`)}
                    type="checkbox"
                    name="interests"
                    value={p.key}
                    defaultChecked={defaultInterests.includes(p.key)}
                    className="h-5 w-5 shrink-0 accent-navy-700"
                  />
                  <span className="font-semibold">{p.label}</span>
                </label>
              ))}
            </div>
            {errorText('interests')}
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={id('bestTime')} className={labelCls}>
                {labels.bestTime}
                {opt}
              </label>
              <select
                id={id('bestTime')}
                name="bestTime"
                defaultValue=""
                aria-invalid={Boolean(err('bestTime'))}
                aria-describedby={describedBy('bestTime')}
                className={inputCls('bestTime')}
              >
                <option value="">{labels.bestTimeNone}</option>
                <option value="morning">{labels.bestTimeMorning}</option>
                <option value="afternoon">{labels.bestTimeAfternoon}</option>
                <option value="evening">{labels.bestTimeEvening}</option>
                <option value="anytime">{labels.bestTimeAny}</option>
              </select>
              {errorText('bestTime')}
            </div>
          </div>

          <div>
            <label htmlFor={id('message')} className={labelCls}>
              {labels.message}
              {opt}
            </label>
            <p id={id('message-hint')} className="mt-1 text-[0.95rem] text-muted">
              {labels.messageHint}
            </p>
            <textarea
              id={id('message')}
              name="message"
              rows={4}
              aria-invalid={Boolean(err('message'))}
              aria-describedby={describedBy('message', true)}
              className={inputCls('message')}
            />
            {errorText('message')}
          </div>
        </>
      ) : (
        <>
          <input type="hidden" name="contactMethod" value="call" />
          {defaultInterests.map((k) => (
            <input key={k} type="hidden" name="interests" value={k} />
          ))}
        </>
      )}

      <div>
        <div
          className={`flex items-start gap-3 rounded-xl border-2 p-4 ${err('consent') ? 'border-red-600 bg-red-50' : 'border-navy-200 bg-white'}`}
        >
          <input
            id={id('consent')}
            type="checkbox"
            name="consent"
            value="yes"
            required
            aria-required="true"
            aria-invalid={Boolean(err('consent'))}
            aria-describedby={describedBy('consent')}
            className="mt-1 h-6 w-6 shrink-0 accent-navy-700"
          />
          <label htmlFor={id('consent')} className="text-[0.98rem] leading-relaxed">
            {labels.consent}
            {req}
          </label>
        </div>
        {errorText('consent')}
      </div>

      {turnstileSiteKey ? <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-language={locale} /> : null}

      <div className="space-y-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-8 text-lg font-bold text-white shadow-sm hover:bg-red-700 disabled:cursor-wait disabled:opacity-80 sm:w-auto"
        >
          {pending ? labels.submitting : labels.submit}
        </button>
        <p className="flex items-start gap-2 text-[0.95rem] text-muted">
          <ShieldCheck aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-navy-700" />
          {labels.privacyNote}
        </p>
      </div>
    </form>
  );
}
