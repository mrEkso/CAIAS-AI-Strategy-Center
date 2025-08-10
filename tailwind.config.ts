import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', 'Arial'],
      },
    },
  },
  plugins: [],
}

export default config