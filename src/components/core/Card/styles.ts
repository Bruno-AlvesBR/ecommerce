import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  minWidth: 300,
  maxWidth: 300,
  minHeight: 320,
  maxHeight: 320,
  border: `0.5px solid ${theme?.palette?.primary?.dark}`,
  borderRadius: 5,
  background: theme?.palette?.common?.white,

  '&:not(:last-of-type)': { marginRight: 26 },
}));

export const Title = styled(Typography)(() => ({}));
