import Link from 'next/link';

import { IBestSellersProps } from '@/domain/home/entities/IBestSellers';
import DefaultCard from '@/components/core/Card';

import { Container, Contents, RedirectButton, Title } from './styles';

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
    <Link href="/categoria/best-sellers" passHref>
      <RedirectButton>VER TODOS</RedirectButton>
    </Link>
  </Container>
);

export default BestSellers;
