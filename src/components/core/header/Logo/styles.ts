import { styled } from '@mui/material';
import { Link } from '@/components/ui/Link';

export const ButtonLogo = styled(Link)(({ theme }) => ({
  minWidth: 0,
  margin: 0,
  fontSize: 32,
  fontWeight: 800,
  fontFamily: theme?.typography?.fontFamily,
  width: 'fit-content',
  textTransform: 'uppercase',
  color: theme?.palette?.primary?.main,
}));
