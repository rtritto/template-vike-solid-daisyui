import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  daisyui: {
    themes: ['dark']
  },
  plugins: [daisyui]
} as Config