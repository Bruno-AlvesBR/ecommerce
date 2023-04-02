import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonUI from '@mui/material/Button';
import Typography from '@mui/material/Typography/Typography';

import { Link as LinkUI } from '@/presentation/components/ui/Link';

export const Container = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  position: 'relative',
  maxWidth: 500,
  width: '100%',
  gap: '2rem',
  backgroundColor: theme?.palette?.common?.white,
  padding: '4rem',
  borderRadius: 6,
  boxShadow: `0px 0px 20px ${theme?.palette?.secondary?.dark}`,
}));

export const Title = styled(Typography)(() => ({
  fontSize: '2rem',
  fontWeight: 600,
  textAlign: 'center',
}));

export const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  gap: '1rem',
}));

export const Button = styled(ButtonUI)(({ theme }) => ({
  backgroundColor: theme?.palette?.primary?.main,
  color: theme?.palette?.common?.white,
  transition: '.3s all ease',
  fontSize: '1rem',

  '&:hover': {
    backgroundColor: theme?.palette?.primary?.main,
    filter: 'brightness(0.9)',
  },

  '&:disabled': {
    backgroundColor: theme?.palette?.action?.hover,
    opacity: 0.65,
  },
}));

export const Link = styled(LinkUI)(({ theme }) => ({
  width: 'fit-content',
  color: theme?.palette?.primary?.main,
  fontSize: '0.90rem',
}));
