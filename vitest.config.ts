/* eslint-disable import/no-extraneous-dependencies */
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      include: ['src/lib/utils/**/**.{ts,tsx,js,jsx}'],
    },
  },
  plugins: [tsConfigPaths()],
});
