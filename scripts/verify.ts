/**
 * npm run verify — the full quality gate. Runs, in order:
 *   1. launch-blocker check (fails when NODE_ENV=production and a blocker is open)
 *   2. tsc --noEmit
 *   3. ESLint with zero warnings
 *   4. Vitest unit tests (utilities, translation completeness, content QA, schema)
 *   5. next build (fails on any warning)
 *   6. Playwright: SEO, links/sitemap, axe a11y, keyboard, contact form, language toggle, content QA
 *   7. Lighthouse CI on every route × locale (mobile): Perf ≥ 95, A11y/BP/SEO = 100
 * and prints a score table. Options: --skip-lhci, --skip-e2e.
 */
import { spawn, spawnSync, type ChildProcess } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';

const PORT = Number(process.env.PORT ?? 3100);
const BASE = `http://localhost:${PORT}`;
const args = new Set(process.argv.slice(2));

const serverEnv = {
  ...process.env,
  PORT: String(PORT),
  NEXT_PUBLIC_SITE_URL: BASE,
  EMAIL_TRANSPORT: 'mock',
  EMAIL_OUTBOX_DIR: '.e2e-outbox',
  CONTACT_TO_EMAILS: 'nidiamartinez576@outlook.com,martj5493@gmail.com',
  FORM_MIN_SUBMIT_MS: '1500',
  FORM_RATE_LIMIT: '50',
  NEXT_TELEMETRY_DISABLED: '1',
};

type Step = { name: string; ok: boolean; seconds: number; note?: string };
const results: Step[] = [];

function run(name: string, cmd: string, cmdArgs: string[], opts: { env?: NodeJS.ProcessEnv; failOn?: RegExp } = {}): boolean {
  console.log(`\n━━━ ${name} ━━━\n$ ${cmd} ${cmdArgs.join(' ')}`);
  const started = Date.now();
  const res = spawnSync(cmd, cmdArgs, { env: opts.env ?? process.env, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  const output = `${res.stdout ?? ''}${res.stderr ?? ''}`;
  process.stdout.write(output.length > 20000 ? `…${output.slice(-20000)}` : output);
  let ok = res.status === 0;
  let note: string | undefined;
  if (ok && opts.failOn) {
    const hit = output.split('\n').find((line) => opts.failOn!.test(line));
    if (hit) {
      ok = false;
      note = `warning: ${hit.trim()}`;
    }
  }
  results.push({ name, ok, seconds: (Date.now() - started) / 1000, note });
  console.log(ok ? `✓ ${name}` : `✗ ${name}${note ? ` (${note})` : ''}`);
  return ok;
}

async function waitFor(url: string, timeoutMs = 60_000) {
  const until = Date.now() + timeoutMs;
  while (Date.now() < until) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not start at ${url}`);
}

function lighthouseTable(): { table: string; ok: boolean } {
  const dir = '.lighthouseci';
  if (!existsSync(dir)) return { table: '(no Lighthouse results)', ok: false };
  const rows: Array<{ url: string; perf: number; a11y: number; bp: number; seo: number }> = [];
  for (const f of readdirSync(dir).filter((x) => x.startsWith('lhr-') && x.endsWith('.json'))) {
    const lhr = JSON.parse(readFileSync(path.join(dir, f), 'utf8'));
    const c = lhr.categories;
    rows.push({
      url: (lhr.requestedUrl as string).replace(BASE, '') || '/',
      perf: Math.round(c.performance.score * 100),
      a11y: Math.round(c.accessibility.score * 100),
      bp: Math.round(c['best-practices'].score * 100),
      seo: Math.round(c.seo.score * 100),
    });
  }
  rows.sort((a, b) => a.url.localeCompare(b.url));
  const min = (k: 'perf' | 'a11y' | 'bp' | 'seo') => Math.min(...rows.map((r) => r[k]));
  const avg = (k: 'perf' | 'a11y' | 'bp' | 'seo') => Math.round(rows.reduce((s, r) => s + r[k], 0) / rows.length);
  const lines = [
    `| Route | Performance | Accessibility | Best Practices | SEO |`,
    `|---|---:|---:|---:|---:|`,
    ...rows.map((r) => `| ${r.url} | ${r.perf} | ${r.a11y} | ${r.bp} | ${r.seo} |`),
    `| **Minimum (${rows.length} URLs)** | **${min('perf')}** | **${min('a11y')}** | **${min('bp')}** | **${min('seo')}** |`,
    `| **Average** | ${avg('perf')} | ${avg('a11y')} | ${avg('bp')} | ${avg('seo')} |`,
  ];
  const ok = rows.length > 0 && min('perf') >= 95 && min('a11y') === 100 && min('bp') === 100 && min('seo') === 100;
  return { table: lines.join('\n'), ok };
}

async function main() {
  const npx = 'npx';
  let server: ChildProcess | undefined;
  const stopServer = () => {
    if (server && !server.killed) server.kill('SIGTERM');
  };
  process.on('exit', stopServer);

  run('Launch blockers', npx, ['tsx', 'scripts/check-launch-blockers.ts']);
  run('TypeScript', npx, ['tsc', '--noEmit']);
  run('ESLint (zero warnings)', npx, ['eslint', '.', '--max-warnings=0']);
  run('Unit tests (Vitest)', npx, ['vitest', 'run']);
  const built = run('next build', npx, ['next', 'build'], { env: serverEnv, failOn: /⚠|\bwarn(ing)?\b/i });

  if (built && !(args.has('--skip-e2e') && args.has('--skip-lhci'))) {
    rmSync('.e2e-outbox', { recursive: true, force: true });
    console.log(`\n━━━ Starting production server on ${BASE} ━━━`);
    server = spawn(npx, ['next', 'start', '-p', String(PORT)], { env: serverEnv, stdio: ['ignore', 'pipe', 'pipe'] });
    server.stdout?.on('data', () => {});
    server.stderr?.on('data', (d) => process.stderr.write(d));
    await waitFor(`${BASE}/robots.txt`);

    if (!args.has('--skip-e2e')) {
      run('Playwright (SEO, links, a11y, keyboard, form, language, content QA)', npx, ['playwright', 'test', '--reporter=dot'], {
        env: { ...serverEnv, BASE_URL: BASE },
      });
    }

    if (!args.has('--skip-lhci')) {
      rmSync('.lighthouseci', { recursive: true, force: true });
      run('Lighthouse URL list', npx, ['tsx', 'scripts/lhci-urls.ts'], { env: { ...serverEnv, BASE_URL: BASE } });
      const lhciOk = run('Lighthouse CI (mobile, every route × locale)', npx, ['lhci', 'autorun'], {
        env: { ...serverEnv, CHROME_PATH: process.env.CHROME_PATH ?? chromium.executablePath() },
      });
      const { table, ok } = lighthouseTable();
      writeFileSync('lighthouse-scores.md', `# Lighthouse scores (mobile)\n\n${table}\n`);
      console.log(`\n${table}\n`);
      if (lhciOk && !ok) results.push({ name: 'Lighthouse thresholds', ok: false, seconds: 0 });
    }
    stopServer();
  }

  console.log('\n━━━ verify summary ━━━');
  for (const r of results)
    console.log(`${r.ok ? '✓' : '✗'} ${r.name.padEnd(70)} ${r.seconds.toFixed(1)}s${r.note ? `  ${r.note}` : ''}`);
  const failed = results.filter((r) => !r.ok);
  if (failed.length > 0) {
    console.error(`\n✗ verify failed (${failed.length} step${failed.length > 1 ? 's' : ''})`);
    process.exit(1);
  }
  console.log('\n✓ verify passed');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
