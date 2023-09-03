import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: {
          black: '#131120',
          white: '#f9f9f9',
          extralightblue: '#beeafa',
          lightblue: '#84dbfb',
          blue: {
            50: '#f0faff',
            100: '#dff3ff',
            200: '#b9e9fe',
            300: '#7bdafe',
            400: '#4acdfc',
            DEFAULT: '#4acdfc',
            500: '#0ab1ed',
            600: '#008ecb',
            700: '#0071a4',
            800: '#056087',
            900: '#0a4e70',
            950: '#07324a',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
