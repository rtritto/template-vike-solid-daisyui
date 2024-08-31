import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  cacheDir: '.vite',
  plugins: [
    solidPlugin()
  ],
  server: {
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
  }
})