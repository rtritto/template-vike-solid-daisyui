import vikeSolid from 'vike-solid/vite'
import vike from 'vike/plugin'
import type { UserConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'

export default {
  cacheDir: '.vite',
  plugins: [
    vike(),
    vikeSolid()
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  build: {
    target: 'esnext',
    outDir: '.vite/dist'
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src')
    }
  }
} satisfies UserConfig