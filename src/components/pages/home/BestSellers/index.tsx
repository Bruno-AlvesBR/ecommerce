import { IBestSellersProps } from '@/domain/home/entities/IBestSellers';
import DefaultCard from '@/components/core/Card';

import { Container, Contents, RedirectButton, Title } from './styles';
import { Carrousel } from '@/components/core/Carrousel';

interface IBestSellersComponentProps {
  bestSellers: IBestSellersProps[];
}

const BestSellers: React.FC<IBestSellersComponentProps> = ({
  bestSellers,
}) => (
  <Container>
    <Carrousel contentSize={640}>
      {bestSellers?.map(content => (
        <DefaultCard key={content?.id} {...content} />
      ))}
    </Carrousel>

    <RedirectButton href="/categoria/best-sellers">
      VER TODOS
    </RedirectButton>
  </Container>
);

export default BestSellers;
