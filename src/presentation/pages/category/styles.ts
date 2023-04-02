import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  width: '100%',
  marginTop: '1rem',

  [theme?.breakpoints?.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 0.5rem',
  },
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  gap: '0.5rem',
  justifyContent: 'left',
  alignItems: 'center',

  [theme?.breakpoints?.down('sm')]: { justifyContent: 'center' },
}));
