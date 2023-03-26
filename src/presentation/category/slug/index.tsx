import { ImagesStructure } from '@/components/core/ProductStructure/Images';
import { MainInfos } from '@/components/core/ProductStructure/MainInfos';
import { IProduct } from '@/domain/api/product/entities';
import { ButtonUI } from '@/components/core/Button';
import { useCart } from '@/hooks/cart';

import {
  Container,
  Content,
  ContentProductDescription,
} from './styles';

interface ICategorySlugPresentation {
  product: IProduct;
}

const CategorySlugPresentation: React.FC<
  ICategorySlugPresentation
> = ({ product }) => {
  const { handleAddProductInCart } = useCart();

  return product?.id ? (
    <Container style={{ padding: '2rem' }}>
      <Content>
        <ImagesStructure images={product.images} />

        <ContentProductDescription>
          <MainInfos {...product} />

          <ButtonUI
            fullWidth
            onClick={() => handleAddProductInCart(product.id)}
          >
            ADICIONAR AO CARRINHO
          </ButtonUI>
        </ContentProductDescription>
      </Content>
    </Container>
  ) : null;
};

export { CategorySlugPresentation };
