import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Container = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 600,
  fontFamily: theme?.typography?.fontFamily,
  background: theme?.palette?.common?.white,
  color: theme?.palette?.common?.black,
  padding: '10px 15px',
  position: 'relative',
}));
