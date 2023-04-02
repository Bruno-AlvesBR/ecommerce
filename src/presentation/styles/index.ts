import { createStitches } from '@stitches/react';

const spaceObject = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
};

export const { styled, getCssText } = createStitches({
  media: {
    sm: '(max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 1365px)',
    lg: '(min-width: 1366px) and (max-width: 1439px)',
    xl: '(min-width: 1440px)',
  },
  theme: {
    fonts: { system: 'system-ui' },
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
    fontSizes: spaceObject,
    space: spaceObject,
  },
});
