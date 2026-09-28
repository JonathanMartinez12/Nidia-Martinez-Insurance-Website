/**
 * Lists every open TODO in src/config/site.ts (launch blockers first).
 * Exits non-zero when NODE_ENV=production and a launch blocker is still open.
 */
import { openTodos } from '../src/lib/launch';

const todos = openTodos();
const blockers = todos.filter((t) => t.blocker);
const production = process.env.NODE_ENV === 'production';

if (todos.length === 0) {
  console.log('✓ No open TODOs in the site config.');
} else {
  console.log('Open TODOs in src/config/site.ts:');
  for (const t of todos) console.log(`  ${t.blocker ? '✗ LAUNCH BLOCKER' : '•'} ${t.message}`);
}

if (blockers.length > 0) {
  if (production) {
    console.error(`\n✗ ${blockers.length} launch blocker(s) open and NODE_ENV=production — refusing to pass.`);
    process.exit(1);
  }
  console.warn(
    `\n⚠ ${blockers.length} launch blocker(s) open. Allowed outside production (NODE_ENV=${process.env.NODE_ENV ?? 'unset'}).`,
  );
}
