import { styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'top',
  maxWidth: 500,
  width: '100%',
}));

export const ContentMainImage = styled(Box)(() => ({
  maxWidth: 500,
  minWidth: 500,
  minHeight: 500,
  maxHeight: 500,
  position: 'relative',
}));

interface IContentAltImage {
  isSelected: boolean;
  theme?: Theme;
}

export const ContentAltImage = styled(Box)<IContentAltImage>(
  ({ isSelected, theme }) => ({
    maxWidth: 100,
    minWidth: 100,
    position: 'relative',
    cursor: 'pointer',
    height: '100%',

    ...(isSelected && {
      border: `0.5px solid ${theme?.palette?.primary?.dark}`,
      borderRadius: 4,
    }),
  }),
);
