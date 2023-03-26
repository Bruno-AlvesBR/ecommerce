import { HTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

interface IButton
  extends HTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  fullWidth?: boolean;
}

const ButtonUI: React.FC<IButton> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export { ButtonUI };
