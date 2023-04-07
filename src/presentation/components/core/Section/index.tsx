import { PropsWithChildren } from 'react';

import { Carrousel } from '@/presentation/components/core/Carrousel';

import { Container, RedirectButton } from './styles';

interface ISection extends PropsWithChildren {
  title: string;
  url: string;
}

const BestSellers: React.FC<ISection> = ({
  children,
  title,
  url = '/404/',
}) => (
  <Container>
    <Carrousel title={title} itemId="card">
      {children}
    </Carrousel>

    <RedirectButton href={url}>VER TODOS</RedirectButton>
  </Container>
);

export default BestSellers;
