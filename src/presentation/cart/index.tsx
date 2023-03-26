import { CartMenu } from '@/components/pages/cart/Menu';
import { CartProducts } from '@/components/pages/cart/Products';
import { IProduct } from '@/domain/api/product/entities';
import { useCart } from '@/hooks/cart';
import { useEffect } from 'react';

import { Container, Content } from './styles';

interface ICartPresentation {
  products: Array<IProduct>;
}

const CartPresentation: React.FC<ICartPresentation> = ({
  products,
}) => {
  const { setCountProducts } = useCart();

  useEffect(() => {
    if (products.length) setCountProducts(products.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Container>
      <Content>
        <CartProducts products={products} />

        <CartMenu />
      </Content>
    </Container>
  );
};

export { CartPresentation };
