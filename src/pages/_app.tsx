import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { HeadTitle } from '@/presentation/components/core/HeadTitle';
import Header from '@/presentation/components/core/Header';
import { AllProviders } from '../presentation/hooks';

import GlobalStyles from '@/presentation/styles/global';
import theme, { ContainerApp } from '@/presentation/styles/theme';

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
