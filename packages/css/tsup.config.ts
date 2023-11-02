import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  format: ['cjs', 'esm'],
  bundle: false,
  clean: true,
  dts: false,
  legacyOutput: true,
  minify: true,
});
