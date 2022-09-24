import { Box, styled, Typography } from '@mui/material';

export const Container = styled(Box)(() => ({}));

export const Content = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  marginTop: 25,
}));

export const Card = styled(Box)(({ theme }) => ({
  padding: 0,
  background: theme?.palette?.background?.default,
  width: 'fit-content',
  height: 'fit-content',
  marginRight: 15,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 5,
  border: `1px solid ${theme?.palette?.common?.black}`,
  maxHeight: 45,
  maxWidth: 220,

  '&:last-of-type': { marginRight: 0 },

  '& svg': {
    width: 70,
    height: 90,
    background: '#000',
    transform: 'translateY(10%)',
    zIndex: 2,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 600,
  fontFamily: theme?.typography?.fontFamily,
  padding: 10,
}));
