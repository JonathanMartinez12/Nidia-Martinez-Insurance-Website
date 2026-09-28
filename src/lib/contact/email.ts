import { site } from '@/config/site';
import { absoluteUrl } from '@/lib/urls';
import { formatUsPhone } from '@/lib/phone';
import type { ContactLead } from './schema';
import type { LeadOwner } from './routing';

export type EmailMessage = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const navy = site.brand.navy;
const red = site.brand.red;

function shell(title: string, body: string): string {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${esc(title)}</title></head>
<body style="margin:0;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;color:#14213d;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:24px 0;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dde3f0;">
<tr><td style="background:${navy};padding:18px 28px;"><img src="${absoluteUrl(site.brand.logoWhite)}" width="220" height="71" alt="${esc(site.name)}" style="display:block;border:0;width:220px;height:auto;"></td></tr>
<tr><td style="padding:28px;font-size:16px;line-height:1.6;">${body}</td></tr>
<tr><td style="padding:16px 28px;background:#f8f9fc;color:#4a5578;font-size:13px;line-height:1.5;">
${esc(site.name)} · ${esc(site.primaryPhone.display)} · ${esc(site.email)}
</td></tr>
</table></td></tr></table></body></html>`;
}

export type LeadLabels = {
  interests: string[];
  language: string;
  contactMethod: string;
  bestTime: string | null;
  consentText: string;
};

export type LeadMeta = {
  submittedAt: string;
  pageUrl: string | null;
  ip: string;
  userAgent: string | null;
};

export function leadSubject(lead: ContactLead, owner: LeadOwner, labels: Pick<LeadLabels, 'interests'>): string {
  const interests = labels.interests.length > 0 ? labels.interests.join(', ') : 'General question';
  return `[For: ${owner}] New lead: ${lead.name} — ${interests}`;
}

export function leadEmail(opts: {
  lead: ContactLead;
  owner: LeadOwner;
  labels: LeadLabels;
  meta: LeadMeta;
  to: string[];
}): EmailMessage {
  const { lead, owner, labels, meta } = opts;
  const phone = formatUsPhone(lead.phone);
  const rows: Array<[string, string]> = [
    ['For', owner],
    ['Name', lead.name],
    ['Phone', phone],
    ['Email', lead.email ?? '—'],
    ['Preferred language', labels.language],
    ['Preferred contact', labels.contactMethod],
    ['Best time to call', labels.bestTime ?? '—'],
    ['Interested in', labels.interests.join(', ') || '—'],
    ['Message', lead.message ?? '—'],
  ];
  const consentRows: Array<[string, string]> = [
    ['Consent given', 'Yes — checkbox ticked by the lead (unchecked by default)'],
    ['Consent text shown', labels.consentText],
    ['Submitted at', meta.submittedAt],
    ['Page', meta.pageUrl ?? '—'],
    ['IP address', meta.ip],
    ['User agent', meta.userAgent ?? '—'],
  ];
  const table = (r: Array<[string, string]>) =>
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 20px;">${r
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px 8px 0;border-bottom:1px solid #eef1f7;color:#4a5578;width:38%;vertical-align:top;">${esc(k)}</td><td style="padding:8px 0;border-bottom:1px solid #eef1f7;vertical-align:top;white-space:pre-wrap;">${esc(v)}</td></tr>`,
      )
      .join('')}</table>`;

  const body = `
<p style="margin:0 0 6px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:${red};font-weight:bold;">New website lead · For: ${esc(owner)}</p>
<h1 style="margin:0 0 18px;font-size:24px;color:${navy};">${esc(lead.name)}</h1>
<p style="margin:0 0 22px;"><a href="tel:+1${lead.phone}" style="display:inline-block;background:${red};color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;">Call ${esc(phone)}</a></p>
${table(rows)}
<h2 style="margin:8px 0 8px;font-size:16px;color:${navy};">Consent record (TCPA)</h2>
${table(consentRows)}
<p style="margin:0;color:#4a5578;font-size:13px;">Reminder: never request a Medicare number, SSN or health details by email.</p>`;

  const text = [
    `NEW WEBSITE LEAD — For: ${owner}`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'CONSENT RECORD (TCPA)',
    ...consentRows.map(([k, v]) => `${k}: ${v}`),
  ].join('\n');

  return {
    to: opts.to,
    subject: leadSubject(lead, owner, labels),
    html: shell('New lead', body),
    text,
    replyTo: lead.email,
  };
}

export type ConfirmationCopy = {
  subject: string;
  greeting: string;
  body: string;
  callUs: string;
  scamNote: string;
  signoff: string;
};

export function confirmationEmail(opts: { to: string; copy: ConfirmationCopy }): EmailMessage {
  const { copy } = opts;
  const body = `
<p style="margin:0 0 16px;font-size:18px;color:${navy};font-weight:bold;">${esc(copy.greeting)}</p>
<p style="margin:0 0 16px;">${esc(copy.body)}</p>
<p style="margin:0 0 20px;">${esc(copy.callUs)}</p>
<p style="margin:0 0 20px;"><a href="tel:${site.primaryPhone.e164}" style="display:inline-block;background:${red};color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold;">${esc(site.primaryPhone.display)}</a></p>
<p style="margin:0 0 16px;padding:12px 14px;border-left:4px solid ${red};background:#fdf2f3;">${esc(copy.scamNote)}</p>
<p style="margin:0;">${esc(copy.signoff)}</p>`;
  return {
    to: [opts.to],
    subject: copy.subject,
    html: shell(copy.subject, body),
    text: [
      copy.greeting,
      '',
      copy.body,
      '',
      `${copy.callUs} ${site.primaryPhone.display}`,
      '',
      copy.scamNote,
      '',
      copy.signoff,
    ].join('\n'),
    replyTo: site.email,
  };
}
