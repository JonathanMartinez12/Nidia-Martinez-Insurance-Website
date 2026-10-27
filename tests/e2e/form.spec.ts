import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';

const OUTBOX = path.join(process.cwd(), '.e2e-outbox');
const MIN_MS = 1600; // server: FORM_MIN_SUBMIT_MS=1500

type Mail = { to: string[]; subject: string; html: string; text: string; replyTo?: string };

async function outbox(): Promise<Mail[]> {
  try {
    const files = await readdir(OUTBOX);
    return Promise.all(files.map(async (f) => JSON.parse(await readFile(path.join(OUTBOX, f), 'utf8')) as Mail));
  } catch {
    return [];
  }
}

const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;

// Each test gets its own client IP so the rate limiter never interferes.
let ipCounter = 10;
test.beforeEach(async ({ context }) => {
  ipCounter += 1;
  await context.setExtraHTTPHeaders({ 'x-forwarded-for': `10.9.${Math.floor(Math.random() * 250)}.${ipCounter}` });
});

async function fillRequired(page: Page, name: string, prefix = 'contact') {
  await page.locator(`#${prefix}-name`).fill(name);
  await page.locator(`#${prefix}-phone`).fill('(504) 555-0199');
}

const EN_CONSENT =
  "By tapping Request a Call, you agree Martinez Insurance Solutions may call or text you about your request. Consent isn't required to buy anything.";
const ES_CONSENT =
  'Al tocar Solicitar una llamada, acepta que Martinez Insurance Solutions lo llame o le envíe mensajes sobre su solicitud. No es requisito para comprar.';

test.describe('contact form', () => {
  test('only name and phone are required; optional details start collapsed', async ({ page }) => {
    await page.goto('/contact');
    const form = page.getByTestId('contact-form-full');
    await expect(form.locator('#contact-name')).toHaveAttribute('autocomplete', 'name');
    const phone = form.locator('#contact-phone');
    await expect(phone).toHaveAttribute('type', 'tel');
    await expect(phone).toHaveAttribute('inputmode', 'tel');
    await expect(phone).toHaveAttribute('autocomplete', 'tel');
    await expect(form.locator('#contact-email')).toBeHidden();
    await expect(form.locator('#contact-details-toggle')).toHaveAttribute('aria-expanded', 'false');
    await expect(form.locator('input[type=checkbox][name=consent], [name=language], [name=contactMethod], textarea')).toHaveCount(
      0,
    );
    await expect(form.getByTestId('consent-text')).toHaveText(EN_CONSENT);
    await expect(form.getByRole('link', { name: '(504) 313-2317' })).toHaveAttribute('href', 'tel:+15043132317');
  });

  test('shows plain-language inline errors and keeps what was typed', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Request a Call' }).click();
    const summary = page.getByTestId('error-summary');
    await expect(summary).toBeFocused();
    await expect(summary).toContainText('Please enter your name.');
    await expect(summary).toContainText('Please enter a phone number');
    await expect(page.locator('#contact-name')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#contact-name')).toHaveAttribute('aria-describedby', 'contact-name-error');

    await page.locator('#contact-name').fill('Keep Me');
    await page.locator('#contact-phone').fill('12345');
    await page.getByRole('button', { name: 'Request a Call' }).click();
    await expect(page.locator('#contact-phone-error')).toContainText('10-digit');
    await expect(page.locator('#contact-name')).toHaveValue('Keep Me');
    await expect(page.locator('#contact-phone')).toHaveValue('12345');
  });

  test('a full submission emails the team with chips, locale, page and the consent record', async ({ page }) => {
    const name = `Lead Full ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.locator('#contact-details-toggle').click();
    await page.getByText('Final Expense/Life').click();
    await page.getByText('Turning 65').click();
    await page.getByText('Morning').click();
    await page.locator('#contact-email').fill('lead@example.com');
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Request a Call' }).click();

    const success = page.getByTestId('contact-success');
    await expect(success).toContainText('Thank you, Lead! Nidia or John will call you soon.');
    await expect(success.getByRole('link', { name: '(504) 313-2317' })).toBeVisible();

    await expect.poll(async () => (await outbox()).filter((m) => m.subject.includes(name)).length).toBe(1);
    const lead = (await outbox()).find((m) => m.subject.includes(name))!;
    expect(lead.to).toEqual(['nidiamartinez576@outlook.com', 'martj5493@gmail.com']);
    expect(lead.subject).toBe(`New lead: ${name} — Turning 65, Final Expense/Life`);
    expect(lead.replyTo).toBe('lead@example.com');
    expect(lead.text).toContain('Phone: (504) 555-0199');
    expect(lead.text).toContain('Best time to call: Morning');
    expect(lead.text).toContain('Language: English');
    expect(lead.text).toContain(`Disclosure shown: ${EN_CONSENT}`);
    expect(lead.text).toMatch(/Disclosure version: call-text-\S+/);
    expect(lead.text).toMatch(/Timestamp \(UTC\): \d{4}-\d\d-\d\dT/);
    expect(lead.text).toContain('Page URL: http://localhost:3100/contact');
    expect(lead.text).toContain('Locale: en');
  });

  test('service-page form pre-selects the page topic and submits with just name + phone', async ({ page }) => {
    const name = `Lead MA ${unique()}`;
    await page.goto('/medicare-advantage');
    const form = page.getByTestId('contact-form-compact');
    await fillRequired(page, name, 'cta');
    await page.waitForTimeout(MIN_MS);
    await form.getByRole('button', { name: 'Request a Call' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await expect
      .poll(async () => (await outbox()).find((m) => m.subject.includes(name))?.subject)
      .toBe(`New lead: ${name} — Medicare Advantage`);
  });

  test('Spanish: validates in Spanish, infers the language and stores the Spanish consent', async ({ page }) => {
    const name = `Cliente ${unique()}`;
    await page.goto('/es/contacto');
    await page.getByRole('button', { name: 'Solicitar una llamada' }).click();
    await expect(page.getByTestId('error-summary')).toContainText('Por favor, escriba su nombre.');
    await expect(page.getByTestId('consent-text').first()).toHaveText(ES_CONSENT);
    await fillRequired(page, name);
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Solicitar una llamada' }).click();
    await expect(page.getByTestId('contact-success')).toContainText('¡Gracias, Cliente! Nidia o John lo llamarán pronto.');
    await expect
      .poll(async () => (await outbox()).find((m) => m.subject.includes(name))?.subject)
      .toBe(`New lead: ${name} — General`);
    const lead = (await outbox()).find((m) => m.subject.includes(name))!;
    expect(lead.text).toContain('Language: Spanish');
    expect(lead.text).toContain(`Disclosure shown: ${ES_CONSENT}`);
    expect(lead.text).toContain('Locale: es');
  });

  test('honeypot submissions are silently dropped', async ({ page }) => {
    const name = `Bot ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.locator('#contact-website').evaluate((el) => ((el as HTMLInputElement).value = 'http://spam.example'));
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Request a Call' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await page.waitForTimeout(500);
    expect((await outbox()).some((m) => m.subject.includes(name))).toBe(false);
  });

  test('instant (bot-speed) submissions are not emailed', async ({ page }) => {
    const name = `Speedy ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.getByRole('button', { name: 'Request a Call' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await page.waitForTimeout(500);
    expect((await outbox()).some((m) => m.subject.includes(name))).toBe(false);
  });

  test('language toggle keeps you on the contact form', async ({ page }) => {
    await page.goto('/contact');
    await page.getByTestId('language-toggle').first().click();
    await expect(page).toHaveURL(/\/es\/contacto$/);
    await expect(page.getByTestId('contact-form-full')).toBeVisible();
  });

  test('never asks for Medicare number, SSN or date of birth', async ({ page }) => {
    await page.goto('/contact');
    const names = await page
      .locator('form input, form select, form textarea')
      .evaluateAll((els) => els.map((e) => (e as HTMLInputElement).name));
    for (const n of names) expect(n).not.toMatch(/ssn|social|medicare|birth|dob|health/i);
    await expect(page.getByText('We will never ask for your Medicare number')).toBeVisible();
  });

  test('desktop has no mobile bar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('mobile-bar')).toBeHidden();
  });
});

for (const lang of [
  {
    locale: 'en',
    path: '/',
    request: 'Request a Call',
    submit: 'Request a Call',
    sms: "sms:+15043132317?&body=Hi%2C%20I'd%20like%20help%20with%20Medicare.",
    thanks: 'Thank you, Sheet! Nidia or John will call you soon.',
    consent: EN_CONSENT,
  },
  {
    locale: 'es',
    path: '/es',
    request: 'Solicitar llamada',
    submit: 'Solicitar una llamada',
    sms: 'sms:+15043132317?&body=Hola%2C%20quisiera%20ayuda%20con%20Medicare.',
    thanks: '¡Gracias, Sheet! Nidia o John lo llamarán pronto.',
    consent: ES_CONSENT,
  },
] as const) {
  test.describe(`mobile bar + bottom sheet (${lang.locale}, 390×844)`, () => {
    test.use({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

    test('Call and Text links are correct', async ({ page }) => {
      await page.goto(lang.path);
      const bar = page.getByTestId('mobile-bar');
      await expect(bar).toBeVisible();
      await expect(bar.locator('a[href="tel:+15043132317"]')).toBeVisible();
      await expect(page.getByTestId('sms-link')).toHaveAttribute('href', lang.sms);
    });

    test('opens the sheet, focuses Name, fits without scrolling and submits with just name + phone', async ({ page }) => {
      const name = `Sheet ${unique()}`;
      await page.goto(lang.path);
      await page.getByTestId('open-lead-sheet').click();
      const sheet = page.getByRole('dialog', { name: lang.locale === 'en' ? 'Request a call' : 'Solicite una llamada' });
      await expect(sheet).toBeVisible();
      await expect(sheet).toHaveAttribute('aria-modal', 'true');
      await expect(page.locator('#sheet-name')).toBeFocused();
      await expect(sheet.getByTestId('consent-text')).toHaveText(lang.consent);
      // Name, phone, the submit button and the consent line are all visible without scrolling.
      for (const loc of [
        page.locator('#sheet-name'),
        page.locator('#sheet-phone'),
        sheet.getByRole('button', { name: lang.submit }),
        sheet.getByTestId('consent-text'),
      ])
        await expect(loc).toBeInViewport({ ratio: 1 });
      const scrolls = await sheet.evaluate((el) => el.scrollHeight > el.clientHeight + 1);
      expect(scrolls, 'sheet needs no scrolling').toBe(false);

      await page.locator('#sheet-name').fill(name);
      await page.locator('#sheet-phone').fill('504 555 0142');
      await page.waitForTimeout(MIN_MS);
      await sheet.getByRole('button', { name: lang.submit }).click();
      await expect(sheet.getByTestId('contact-success')).toContainText(lang.thanks);
      await expect.poll(async () => (await outbox()).filter((m) => m.subject.includes(name)).length).toBe(1);
    });

    test('keyboard: Tab stays in the sheet, Esc closes it and focus returns to the trigger', async ({ page }) => {
      await page.goto(lang.path);
      const trigger = page.getByTestId('open-lead-sheet');
      await trigger.focus();
      await page.keyboard.press('Enter');
      const sheet = page.getByTestId('lead-sheet');
      await expect(page.locator('#sheet-name')).toBeFocused();
      for (let i = 0; i < 20; i++) {
        await page.keyboard.press('Tab');
        expect(await sheet.evaluate((el) => el.contains(document.activeElement))).toBe(true);
      }
      for (let i = 0; i < 5; i++) {
        await page.keyboard.press('Shift+Tab');
        expect(await sheet.evaluate((el) => el.contains(document.activeElement))).toBe(true);
      }
      await page.keyboard.press('Escape');
      await expect(sheet).toHaveCount(0);
      await expect(trigger).toBeFocused();

      // The visible close button works too.
      await trigger.click();
      await page.getByTestId('close-lead-sheet').click();
      await expect(sheet).toHaveCount(0);
      await expect(trigger).toBeFocused();
    });
  });
}
