import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import theme, { ContainerApp } from '@/styles/theme';
import GlobalStyles from '@/styles/global';
import Header from '@/components/core/header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <Header />
    <ContainerApp>
      <Component {...pageProps} />
    </ContainerApp>
  </ThemeProvider>
);

export default MyApp;
