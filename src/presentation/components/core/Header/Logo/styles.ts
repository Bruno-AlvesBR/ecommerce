import { styled } from '@mui/material';
import { Link } from '@/presentation/components/ui/Link';

export const ButtonLogo = styled(Link)(({ theme }) => ({
  fontSize: 32,
  fontWeight: 800,
  fontFamily: theme?.typography?.fontFamily,
  width: 'fit-content',
  textTransform: 'uppercase',
  color: theme?.palette?.primary?.main,
}));
