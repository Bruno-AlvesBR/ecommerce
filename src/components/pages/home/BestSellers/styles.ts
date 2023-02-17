import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from '@/components/ui/Link';

export const Container = styled(Box)(({ theme }) => ({
  background: theme?.palette?.common?.white,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  zIndex: 1,
  padding: '40px 0',
  borderRadius: 8,
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '26px',
  color: theme?.palette?.primary?.dark,
  zIndex: 1,
}));

export const Contents = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
}));

export const RedirectButton = styled(Link)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '26px',
  color: theme?.palette?.primary?.dark,
  textDecorationColor: theme?.palette?.primary?.dark,
  textAlign: 'center',
  transition: '.15s all ease',

  '&:hover': {
    color: theme?.palette?.background?.paper,
    textDecorationColor: theme?.palette?.background?.paper,
  },
}));
