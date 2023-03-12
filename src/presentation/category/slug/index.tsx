import { ImagesStructure } from '@/components/core/ProductStructure/Images';
import { MainInfos } from '@/components/core/ProductStructure/MainInfos';
import { IProduct } from '@/domain/api/product/entities';

import { Container, Content } from './styles';

interface ICategorySlugPresentation {
  product: IProduct;
}

const CategorySlugPresentation: React.FC<
  ICategorySlugPresentation
> = ({ product }) => (
  <Container style={{ padding: '2rem' }}>
    <Content>
      <ImagesStructure images={product?.images} />

      <MainInfos {...product} />
    </Content>
  </Container>
);

export { CategorySlugPresentation };
