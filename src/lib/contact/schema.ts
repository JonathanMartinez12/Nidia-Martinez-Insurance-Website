import { z } from 'zod';
import { productKeys } from '@/config/products';
import { normalizeUsPhone } from '@/lib/phone';

export const contactMethods = ['call', 'text', 'email'] as const;
export const bestTimes = ['morning', 'afternoon', 'evening', 'anytime'] as const;
export const leadLanguages = ['en', 'es'] as const;

/**
 * Error codes are translated by the server action (`ContactForm.errors.<code>`).
 * NOTE: this form must never collect SSN, Medicare number, date of birth or health details.
 */
export const contactSchema = z
  .object({
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
    language: z.enum(leadLanguages, 'languageInvalid'),
    contactMethod: z.enum(contactMethods, 'contactMethodInvalid'),
    interests: z.array(z.enum(productKeys, 'interestInvalid')).max(productKeys.length),
    bestTime: z.enum(bestTimes, 'bestTimeInvalid').optional(),
    message: z
      .string()
      .trim()
      .max(2000, 'messageTooLong')
      .optional()
      .transform((v) => (v ? v : undefined)),
    consent: z.literal(true, 'consentRequired'),
  })
  .superRefine((data, ctx) => {
    if (data.contactMethod === 'email' && !data.email) {
      ctx.addIssue({ code: 'custom', path: ['email'], message: 'emailRequiredForMethod' });
    }
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
    language: str('language'),
    contactMethod: str('contactMethod'),
    interests: fd.getAll('interests').filter((v): v is string => typeof v === 'string'),
    bestTime: bestTime ? bestTime : undefined,
    message: str('message'),
    consent: fd.get('consent') === 'yes',
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
