import { PropsWithChildren } from 'react';

import { AuthenticationProvider } from './authentication';
import { CartProvider } from './cart';

const AllProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthenticationProvider>
    <CartProvider>{children}</CartProvider>
  </AuthenticationProvider>
);

export { AllProviders };
