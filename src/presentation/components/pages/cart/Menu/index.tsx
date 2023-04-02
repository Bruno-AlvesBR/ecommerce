import { ICartProduct } from '@/domain/cart/entities';
import { Container } from './styles';

interface ICartMenu {
  products: Array<ICartProduct>;
}

const CartMenu: React.FC<ICartMenu> = ({ products }) => (
  <Container>
    {products?.map(item => (
      <p key={item.id}>{item.price?.priceNumber}</p>
    ))}
  </Container>
);

export { CartMenu };
