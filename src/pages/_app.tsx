import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import Header from '@/components/core/header';
import theme, { ContainerApp } from '@/styles/theme';
import GlobalStyles from '@/styles/global';
import { AllProviders } from '../hooks';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <Header />

    <AllProviders>
      <ContainerApp>
        <Component {...pageProps} />
      </ContainerApp>
    </AllProviders>
  </ThemeProvider>
);

export default MyApp;
