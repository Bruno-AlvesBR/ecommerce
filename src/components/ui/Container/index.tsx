import { PropsWithChildren } from 'react';
import { ContainerProps } from '@mui/material/Container';

import { ContainerUI } from './styles';

const MaxContainer: React.FC<ContainerProps & PropsWithChildren> = ({
  children,
  ...props
}) => (
  <ContainerUI
    maxWidth={false}
    style={{ maxWidth: '90rem', padding: 0 }}
    {...props}
  >
    {children}
  </ContainerUI>
);

export { MaxContainer };
