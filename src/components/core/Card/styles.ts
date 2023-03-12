import { styled, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface IPrice {
  hasPromotion?: boolean;
  theme?: Theme;
}

export const Container = styled(Box)(({ theme }) => ({
  width: 300,
  maxWidth: 300,
  minHeight: 360,
  maxHeight: 360,
  border: `0.5px solid ${theme?.palette?.primary?.dark}`,
  borderRadius: 5,
  background: theme?.palette?.common?.white,
  display: 'flex',
  flexDirection: 'column',
  padding: '8px 32px 32px 32px',
  justifyContent: 'space-between',
  position: 'relative',
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: theme?.palette?.common?.black,
}));

export const ContentPrice = styled(Box)(() => ({
  textAlign: 'center',

  '& > span': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
}));

export const Price = styled(Typography)<IPrice>(
  ({ hasPromotion = false, theme }) => ({
    textAlign: 'center',
    color: !hasPromotion
      ? theme?.palette?.common?.black
      : theme?.palette?.background?.paper,
  }),
);

export const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
}));

export const ContentImage = styled(Box)(() => ({}));

export const ContentAlternativeImages = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
}));

export const AltImage = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme?.palette?.primary?.dark}`,
  borderRadius: 5,
  maxWidth: 60,
  maxHeight: 60,
  cursor: 'pointer',
}));
