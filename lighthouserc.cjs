/**
 * Lighthouse CI — mobile preset (Lighthouse's default form factor + simulated throttling)
 * on every route in both locales. URLs come from .lighthouseci/urls.json, written by
 * `tsx scripts/lhci-urls.ts` (run automatically by `npm run lhci` and `npm run verify`).
 */
const fs = require('node:fs');

const urls = fs.existsSync('.lighthouseci/urls.json') ? JSON.parse(fs.readFileSync('.lighthouseci/urls.json', 'utf8')) : [];

const LANDING = '(medicare-help-metairie|ayuda-medicare-metairie)';
const quality = {
  'categories:performance': ['error', { minScore: 0.95, aggregationMethod: 'median-run' }],
  'categories:accessibility': ['error', { minScore: 1 }],
  'categories:best-practices': ['error', { minScore: 1 }],
};

module.exports = {
  ci: {
    collect: {
      url: urls,
      numberOfRuns: Number(process.env.LHCI_RUNS || 1),
      chromePath: process.env.CHROME_PATH,
      settings: {
        formFactor: 'mobile',
        chromeFlags: '--no-sandbox --headless=new --disable-dev-shm-usage',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertMatrix: [
        { matchingUrlPattern: `^(?!.*${LANDING}).*$`, assertions: { ...quality, 'categories:seo': ['error', { minScore: 1 }] } },
        // Ad landing pages are noindex on purpose, so Lighthouse's "is crawlable" SEO audit can't pass.
        { matchingUrlPattern: LANDING, assertions: quality },
      ],
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci/reports' },
  },
};
