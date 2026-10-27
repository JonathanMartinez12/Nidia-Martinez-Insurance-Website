import { z } from 'zod';
import { normalizeUsPhone } from '@/lib/phone';
import { bestTimes, leadTopics } from './options';

export { bestTimes, leadTopics, topicForProduct, type BestTime, type LeadTopic } from './options';

/**
 * Only name and phone are required. Error codes are translated by the server action
 * (`ContactForm.errors.<code>`).
 * NOTE: this form must never collect SSN, Medicare number, date of birth or health details.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(1, 'nameRequired').max(100, 'nameTooLong'),
  phone: z
    .string()
    .trim()
    .min(1, 'phoneRequired')
    .transform((v, ctx) => {
      const ten = normalizeUsPhone(v);
      if (!ten) {
        ctx.addIssue({ code: 'custom', message: 'phoneInvalid' });
        return z.NEVER;
      }
      return ten;
    }),
  email: z
    .string()
    .trim()
    .max(200, 'emailInvalid')
    .optional()
    .transform((v) => (v ? v : undefined))
    .pipe(z.email('emailInvalid').optional()),
  interests: z.array(z.enum(leadTopics, 'interestInvalid')).max(leadTopics.length),
  bestTime: z.enum(bestTimes, 'bestTimeInvalid').optional(),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactLead = z.output<typeof contactSchema>;
export type ContactField = keyof ContactInput;

/** Turn submitted FormData into the raw object the schema expects. */
export function formDataToInput(fd: FormData): Record<string, unknown> {
  const str = (k: string) => {
    const v = fd.get(k);
    return typeof v === 'string' ? v : undefined;
  };
  const bestTime = str('bestTime');
  return {
    name: str('name') ?? '',
    phone: str('phone') ?? '',
    email: str('email'),
    interests: [...new Set(fd.getAll('interests').filter((v): v is string => typeof v === 'string'))],
    bestTime: bestTime ? bestTime : undefined,
  };
}

/** First error code per field. */
export function fieldErrorCodes(error: z.ZodError): Partial<Record<ContactField, string>> {
  const out: Partial<Record<ContactField, string>> = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as ContactField | undefined;
    if (field && !out[field]) out[field] = issue.message;
  }
  return out;
}
