import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PORT ?? 3100);
export const BASE_URL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

/**
 * E2E + SEO + accessibility suite. Runs against a production build (`next build` with
 * NEXT_PUBLIC_SITE_URL=http://localhost:3100) served by `next start`. `npm run verify`
 * starts that server itself; standalone runs start it here.
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  retries: 0,
  timeout: 60_000,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 900 } } }],
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `${BASE_URL}/robots.txt`,
    reuseExistingServer: true,
    timeout: 120_000,
    env: {
      EMAIL_TRANSPORT: 'mock',
      EMAIL_OUTBOX_DIR: '.e2e-outbox',
      CONTACT_TO_EMAILS: 'nidiamartinez576@outlook.com,martj5493@gmail.com',
      FORM_MIN_SUBMIT_MS: '1500',
      FORM_RATE_LIMIT: '50',
    },
  },
});
