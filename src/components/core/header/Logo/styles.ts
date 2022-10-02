import { styled } from '@mui/material';
import Link from '@mui/material/Link';

export const ButtonLogo = styled(Link)(({ theme }) => ({
  minWidth: 0,
  margin: 0,
  fontSize: 32,
  fontWeight: 800,
  fontFamily: theme?.typography?.fontFamily,
  textDecoration: 'none',
  width: 'fit-content'
}));
