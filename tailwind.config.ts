import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config