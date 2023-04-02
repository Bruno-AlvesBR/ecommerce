import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  top: '2rem',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme?.breakpoints?.down('sm')]: {
    position: 'relative',
    top: 0,
  },
}));
