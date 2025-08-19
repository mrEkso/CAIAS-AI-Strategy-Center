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
      fontSize: {
      '4.5xl': '2.625rem', // між 4xl і 5xl
      '4.75xl': '2.8125rem',
      },
      colors: {
          'gray-750': '#272e3b', // між bg-gray-700 і bg-gray-800
        primary: "#2a3a91",
          "primary-light": "#5676d6", 
          "primary-light2": "#4ea0fc",
          "primary-light3": "#4969c9",
          "primary-light4": "#2e3357", // #2e3357
          "primary-medium": "#152056", // між primary і primary-dark 
          "primary-medium2": "#1e2154", // #181754
          "primary-dark": "#01061a",
        accent: 'var(--accent)',
          'accent-foreground': 'var(--accent-foreground)',
      },
    },
  },
  plugins: [],
}

export default config

// темно-синій
//primary: "#030213",
  // "primary-light": "#2a2752",
  // "primary-dark": "#01000a",

// фіолетовий
// primary: "#3b2e91",
  // "primary-light": "#6e5fd6",
  // "primary-dark": "#030213",
