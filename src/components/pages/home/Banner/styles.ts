import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const Container = styled(Box)({
  position: 'absolute',
  zIndex: -1,
  top: '2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
