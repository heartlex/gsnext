const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors: {
        'screamin-green': {
          DEFAULT: '#38FF6A',
          50: '#D9FFE2',
          100: '#C7FFD5',
          200: '#A3FFBA',
          300: '#80FF9F',
          400: '#5CFF85',
          500: '#38FF6A',
          600: '#05FF44',
          700: '#00D134',
          800: '#009E28',
          900: '#006B1B',
          950: '#005214',
        },
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      spacing: {
        15: '3.75rem',
      },
      width: {
        'max-content': 'max-content',
        100: '100%',
      },
      height: {
        100: '100%',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-drag': {
          '-webkit-user-drag': 'none',
          'user-drag': 'none',
        },
        '.contents': {
          display: 'contents',
        },
      });
    },
  ],
};
