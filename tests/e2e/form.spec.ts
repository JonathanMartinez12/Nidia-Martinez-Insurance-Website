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

async function fillRequired(page: Page, name: string) {
  await page.locator('#contact-name').fill(name);
  await page.locator('#contact-phone').fill('(504) 555-0199');
}

test.describe('contact form', () => {
  test('shows accessible inline errors when submitted empty', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Send my request' }).click();
    const summary = page.getByTestId('error-summary');
    await expect(summary).toBeVisible();
    await expect(summary).toBeFocused();
    await expect(summary).toContainText('Please enter your name.');
    await expect(summary).toContainText('Please enter a phone number');
    await expect(summary).toContainText('Please check the box');
    await expect(page.locator('#contact-name')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#contact-name')).toHaveAttribute('aria-describedby', /contact-name-error/);
    await expect(page.locator('#contact-name-error')).toHaveText('Please enter your name.');
  });

  test('validates phone format and keeps what the user typed', async ({ page }) => {
    await page.goto('/contact');
    await page.locator('#contact-name').fill('Keep Me');
    await page.locator('#contact-phone').fill('12345');
    await page.getByRole('button', { name: 'Send my request' }).click();
    await expect(page.locator('#contact-phone-error')).toContainText('10-digit');
    await expect(page.locator('#contact-name')).toHaveValue('Keep Me');
  });

  test('consent is required and unchecked by default', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('#contact-consent')).not.toBeChecked();
    await fillRequired(page, `No Consent ${unique()}`);
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Send my request' }).click();
    await expect(page.locator('#contact-consent-error')).toBeVisible();
    await expect(page.getByTestId('contact-success')).toHaveCount(0);
  });

  test('successful submission emails both agents, routes "For: John" and confirms in Spanish', async ({ page }) => {
    const name = `Lead John ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.locator('#contact-email').fill('lead@example.com');
    await page.getByLabel('Español').check();
    await page.getByLabel('Final Expense').check();
    await page.getByLabel('Low-Cost Life Insurance').check();
    await page.locator('#contact-bestTime').selectOption('morning');
    await page.locator('#contact-consent').check();
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Send my request' }).click();

    const success = page.getByTestId('contact-success');
    await expect(success).toBeVisible();
    await expect(success).toContainText('(504) 913-2398');

    await expect.poll(async () => (await outbox()).filter((m) => m.subject.includes(name)).length).toBe(1);
    const lead = (await outbox()).find((m) => m.subject.includes(name))!;
    expect(lead.to).toEqual(['nidiamartinez576@outlook.com', 'martj5493@gmail.com']);
    expect(lead.subject).toBe(`[For: John] New lead: ${name} — Final Expense, Low-Cost Life Insurance`);
    expect(lead.replyTo).toBe('lead@example.com');
    expect(lead.text).toContain('Consent given: Yes');
    expect(lead.text).toContain('Preferred language: Spanish');

    const confirmation = (await outbox()).find((m) => m.to.includes('lead@example.com'));
    expect(confirmation?.subject).toContain('Recibimos su solicitud');
  });

  test('Medicare Advantage leads are "For: Nidia" (compact form on the service page)', async ({ page }) => {
    const name = `Lead Nidia ${unique()}`;
    await page.goto('/medicare-advantage');
    const form = page.getByTestId('contact-form-compact');
    await form.locator('#cta-name').fill(name);
    await form.locator('#cta-phone').fill('504-555-0100');
    await form.locator('#cta-consent').check();
    await page.waitForTimeout(MIN_MS);
    await form.getByRole('button', { name: 'Send my request' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await expect
      .poll(async () => (await outbox()).find((m) => m.subject.includes(name))?.subject)
      .toBe(`[For: Nidia] New lead: ${name} — Medicare Advantage`);
  });

  test('honeypot submissions are silently dropped', async ({ page }) => {
    const name = `Bot ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.locator('#contact-consent').check();
    await page.locator('#contact-website').evaluate((el) => ((el as HTMLInputElement).value = 'http://spam.example'));
    await page.waitForTimeout(MIN_MS);
    await page.getByRole('button', { name: 'Send my request' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await page.waitForTimeout(500);
    expect((await outbox()).some((m) => m.subject.includes(name))).toBe(false);
  });

  test('instant (bot-speed) submissions are silently dropped', async ({ page }) => {
    const name = `Speedy ${unique()}`;
    await page.goto('/contact');
    await fillRequired(page, name);
    await page.locator('#contact-consent').check();
    await page.getByRole('button', { name: 'Send my request' }).click();
    await expect(page.getByTestId('contact-success')).toBeVisible();
    await page.waitForTimeout(500);
    expect((await outbox()).some((m) => m.subject.includes(name))).toBe(false);
  });

  test('the Spanish form validates in Spanish', async ({ page }) => {
    await page.goto('/es/contacto');
    await page.getByRole('button', { name: 'Enviar mi solicitud' }).click();
    await expect(page.getByTestId('error-summary')).toContainText('Por favor, escriba su nombre.');
  });

  test('language toggle keeps you on the contact form', async ({ page }) => {
    await page.goto('/contact');
    await page.getByTestId('language-toggle').first().click();
    await expect(page).toHaveURL(/\/es\/contacto$/);
    await expect(page.getByTestId('contact-form-full')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Enviar mi solicitud' })).toBeVisible();
  });

  test('never asks for Medicare number, SSN or date of birth', async ({ page }) => {
    await page.goto('/contact');
    const names = await page
      .locator('form input, form select, form textarea')
      .evaluateAll((els) => els.map((e) => (e as HTMLInputElement).name));
    for (const n of names) expect(n).not.toMatch(/ssn|social|medicare|birth|dob|health/i);
    await expect(page.getByText('We will never ask for your Medicare number')).toBeVisible();
  });
});
