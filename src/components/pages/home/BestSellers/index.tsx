import Link from 'next/link';

import { IBestSellersProps } from 'domain/home/entities/IBestSellers';

import { Container, Contents, RedirectButton, Title } from './styles';
import DefaultCard from '@/components/core/DefaultCard';

interface IBestSellersComponentProps {
  bestSellers: IBestSellersProps[];
}

const BestSellers: React.FC<IBestSellersComponentProps> = ({
  bestSellers,
}) => (
  <Container>
    <Title variant="h1">MAIS VENDIDOS</Title>
    <Contents>
      {bestSellers?.map(content => (
        <DefaultCard key={content?.id} {...content} />
      ))}
    </Contents>
    <Link href="/contents/best-sellers" passHref>
      <RedirectButton>VER TODOS</RedirectButton>
    </Link>
  </Container>
);

export default BestSellers;
