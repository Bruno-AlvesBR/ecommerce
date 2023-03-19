import { PropsWithChildren } from 'react';

import { AuthenticationProvider } from './authentication';

const AllProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthenticationProvider>{children}</AuthenticationProvider>
);

export { AllProviders };
