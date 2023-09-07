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
        malibu: {
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
        rose: {
          50: '#fef1f9',
          100: '#ffe4f5',
          200: '#ffc9ee',
          300: '#ff9dde',
          400: '#ff60c5',
          500: '#ff32ab',
          600: '#f41a8e',
          DEFAULT: "#f41a8e",
          700: '#d5016c',
          800: '#af0558',
          900: '#92094c',
          950: '#5a002a',
        },
      },
    },
  },
  plugins: [],
}
export default config
