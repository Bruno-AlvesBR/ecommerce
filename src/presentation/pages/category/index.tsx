import { Card } from '@/presentation/components/core/Card';
import { Filter } from '@/presentation/components/core/Filter';
import { IProduct } from '@/domain/api/product/entities';

import { Container, Content } from './styles';

interface ICategoryPresentation {
  products: Array<IProduct>;
}

const CategoryPresentation: React.FC<ICategoryPresentation> = ({
  products,
}) => (
  <Container>
    <Filter />

    <Content>
      {products?.map(product => (
        <Card key={product?.id} {...product} />
      ))}
    </Content>
  </Container>
);

export { CategoryPresentation };
