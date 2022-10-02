import { createTheme, styled, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import '@mui/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#3599F5',
      dark: '#000',
    },
    secondary: {
      main: '#03C68B',
    },
    common: {
      black: '#454D4A',
      white: '#FFFFFF',
    },
    background: {
      paper: '#e61a4d',
      default: '#F1F0F0',
    },
    action: {
      hover: '#B0B0B0',
    },
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1280,
      // extra-large
      xl: 1536,
    },
  },
});

export const ContainerApp = styled(Box)(() => ({
  width: '100%',
  maxWidth: 1280,
  display: 'flex',
  margin: '0px auto',
  overflow: 'hidden',
}));

export default theme;
