import { PropsWithChildren } from 'react';

import { Carrousel } from '@/presentation/components/core/Carrousel';

import { Container, RedirectButton, Title } from './styles';

interface ISection extends PropsWithChildren {
  title: string;
  url: string;
  contentSize?: number;
}

const BestSellers: React.FC<ISection> = ({
  children,
  title,
  url = '/404/',
  contentSize = 640,
}) => (
  <Container>
    {title && <Title variant="h1">{title}</Title>}

    <Carrousel contentSize={contentSize}>{children}</Carrousel>

    <RedirectButton href={url}>VER TODOS</RedirectButton>
  </Container>
);

export default BestSellers;
