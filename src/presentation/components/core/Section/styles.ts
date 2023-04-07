import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from '@/presentation/components/ui/Link';

export const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  zIndex: 1,
  position: 'relative',
  height: 'fit-content',
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
  width: 'fit-content',
  margin: '0 auto',

  '&:hover': {
    color: theme?.palette?.background?.paper,
    textDecorationColor: theme?.palette?.background?.paper,
  },

  [theme?.breakpoints?.down('sm')]: { fontSize: '1rem' },
}));
