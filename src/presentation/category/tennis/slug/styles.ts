import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import { MaxContainer } from '@/components/ui/Container';

export const Container = styled(MaxContainer)(({ theme }) => ({
  backgroundColor: theme?.palette?.common?.white,
  borderRadius: 6,
}));

export const Content = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'top',
}));
