import * as path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@Tests': path.resolve(__dirname, './tests'),
    },
  },
  test: {
    globalSetup: ['./tests/__vitest__/global.ts'],
    setupFiles: ['./tests/__vitest__/unit.ts'],
    coverage: {
      exclude: [
        '**/config/**',
        'src/index.ts',
        '**/tests/**',
        '**/types.ts',
      ],
    },
  },
});
