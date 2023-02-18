import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Content = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  zIndex: 1,
  marginTop: '12.5rem',
  background: theme?.palette?.common?.white,
  padding: '1rem',
  borderRadius: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
}));
