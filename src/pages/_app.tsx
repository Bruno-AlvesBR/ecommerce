import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Header from '@/components/core/header';
import theme, { ContainerApp } from '@/styles/theme';
import GlobalStyles from '@/styles/global';

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
