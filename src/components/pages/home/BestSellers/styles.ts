import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export const Container = styled(Box)(({ theme }) => ({
  padding: '32px 0px',
  background: theme?.palette?.common?.white,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '26px',
  color: theme?.palette?.primary?.dark,
  margin: '0px auto 32px 0px',
}));

export const Contents = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const RedirectButton = styled(Link)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 400,
  lineHeight: '26px',
  color: theme?.palette?.primary?.dark,
  textDecorationColor: theme?.palette?.primary?.dark,
  textAlign: 'center',
  margin: '32px auto 0px auto',
  transition: '.3s all ease',

  '&:hover': { color: theme?.palette?.background?.paper },
}));
