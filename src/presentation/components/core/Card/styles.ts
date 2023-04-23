import { styled, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface IPrice {
  hasPromotion?: boolean;
  theme?: Theme;
}

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
