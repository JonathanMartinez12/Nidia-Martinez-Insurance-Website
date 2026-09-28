import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@messages', replacement: path.resolve(__dirname, 'messages') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      // next-intl imports Next's CJS entry points without extensions.
      { find: /^next\/(navigation|link|headers|server)$/, replacement: 'next/$1.js' },
    ],
  },
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    server: { deps: { inline: ['next-intl'] } },
  },
});
