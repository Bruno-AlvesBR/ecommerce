import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const ContentWrapperFields = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.5rem',
  width: '100%',

  [theme?.breakpoints?.down('sm')]: {
    flexDirection: 'column',
  },
}));
