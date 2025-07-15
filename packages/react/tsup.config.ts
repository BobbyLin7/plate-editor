import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

const config: Options = {
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true,
  },
  injectStyle: true,
  tsconfig: './tsconfig.build.json',
  clean: true,
  sourcemap: true,
  splitting: false,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss',
  ],
}

export default defineConfig(config) as ReturnType<typeof defineConfig>
