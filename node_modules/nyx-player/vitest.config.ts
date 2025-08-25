import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        functions: 90,
        lines: 90,
        branches: 80,
        statements: 90,
      },
    },
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
  },
})
