import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.primary?.main,
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '0.5rem 0.25rem',
  borderRadius: '0 4px 0 4px',
  color: theme?.palette?.common?.white,
  fontSize: '1rem',
  display: 'flex',
  justifyContent: 'center',
}));
