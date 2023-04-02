import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const Container = styled(Button)(({ theme }) => ({
  padding: 0,
  minWidth: 40,
  maxWidth: 40,
  minHeight: 40,
  maxHeight: 40,
  borderRadius: 3,
  overflow: 'hidden',

  '& .MuiAvatar-root': {
    background: theme?.palette?.background?.paper,
  },
}));
