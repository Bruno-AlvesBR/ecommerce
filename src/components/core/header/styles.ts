import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export const Container = styled(AppBar)(({ theme }) => ({
  background: theme?.palette?.common?.white,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme?.palette?.common?.black}`,
  position: 'relative',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',

  [theme?.breakpoints?.down('lg')]: {
    padding: '0px 15px',
  },
}));

export const Content = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  maxWidth: 1280,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0px auto',
  position: 'relative',
  gap: '2rem',

  '&.MuiToolbar-root': { padding: 0 },
}));

export const RightContent = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'right',
  gap: '1rem',
}));
