import { PrefetchOptions } from 'next/dist/shared/lib/router/router';
import { NextRouter } from 'next/router';

export const createMockRouter = (
  router: Partial<NextRouter>,
): NextRouter => ({
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  back: cy.stub(),
  beforePopState: cy.stub(),
  prefetch: cy.stub(),
  push: cy.stub(),
  reload: cy.stub(),
  replace: cy.stub(),
  events: {
    on: cy.stub(),
    off: cy.stub(),
    emit: cy.stub(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  defaultLocale: 'en',
  domainLocales: [],
  isPreview: false,
  ...router,
});
