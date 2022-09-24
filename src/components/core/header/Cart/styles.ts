import { styled } from '@mui/material';
import Badge from '@mui/material/Badge';

export const Container = styled(Badge)(({ theme }) => ({
  margin: 0,
  minWidth: 40,
  maxWidth: 40,
  minHeight: 40,
  maxHeight: 40,
  background: theme?.palette?.background?.paper,
  color: theme?.palette?.common?.white,
  width: '100%',
  height: '100%',
  padding: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 3,

  '& > svg': {
    width: 30,
    height: 30,
  },

  '& .MuiBadge-badge': {
    color: theme?.palette?.common?.white,
    width: 15,
    height: 15,
    background: theme?.palette?.primary?.main,
    borderRadius: 3,
    fontSize: 10,
    fontWeight: 600,
  },
}));
