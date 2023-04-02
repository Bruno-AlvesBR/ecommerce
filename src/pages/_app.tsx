import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { HeadTitle } from '@/components/core/HeadTitle';
import Header from '@/components/core/header';
import { AllProviders } from '../hooks';

import GlobalStyles from '@/styles/global';
import theme, { ContainerApp } from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />

    <AllProviders>
      <Header />
      <HeadTitle />

      <ContainerApp>
        <Component {...pageProps} />
      </ContainerApp>
    </AllProviders>
  </ThemeProvider>
);

export default MyApp;
