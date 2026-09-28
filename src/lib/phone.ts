/** Returns the 10 US digits of a phone number, or null if it isn't a valid US number. */
export function normalizeUsPhone(input: string): string | null {
  const digits = input.replace(/\D/g, '');
  const ten = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (ten.length !== 10) return null;
  // NANP: area code and exchange can't start with 0 or 1.
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(ten)) return null;
  return ten;
}

export function formatUsPhone(tenDigits: string): string {
  return `(${tenDigits.slice(0, 3)}) ${tenDigits.slice(3, 6)}-${tenDigits.slice(6)}`;
}

export function telHref(e164: string): string {
  return `tel:${e164}`;
}
