/** @type {import('tailwindcss').Config} */

const spaceObject = {
  1: '0.25rem',
  2: '0.50rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.50rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.50rem',
  11: '2.75rem',
  12: '3rem',
};

module.exports = {
  content: [
    './src/presentation/pages/**/*.{js,ts,jsx,tsx}',
    './src/presentation/components/**/*.{js,ts,jsx,tsx}',
    './src/presentation/hooks/**/*.{js,ts,jsx,tsx}',
    './src/presentation/styles/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    screens: {
      sm: { max: '767px' },
      md: { max: '1365px' },
      lg: { max: '1439px' },
      xl: { min: '1440px' },
    },
    extend: {
      fontSize: spaceObject,
      space: spaceObject,
      paddind: spaceObject,
      border: spaceObject,
      borderRadius: {
        1: '2px',
        2: '4px',
        full: '100%',
      },
      colors: {
        black1000: '#000',

        blue700: '#3599F5',

        gray600: '#454D4A',
        gray500: '#B0B0B0',
        gray400: '#454D4A15',

        green700: '#03C68B',

        red800: '#e61a4d',

        white1000: '#FFFFFF',
        white900: '#F1F0F0',
        white300: '#F1F0F050',
      },

      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwind-scrollbar-hide'),
  ],
};
