import CartIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from '@/components/ui/Link';
import { useCart } from '@/hooks/cart';

import { Container } from './styles';

interface ICartProps {}

const Cart: React.FC<ICartProps> = () => {
  const { countProducts } = useCart();

  return (
    <Link href="/carrinho" noDecoration>
      <Container badgeContent={countProducts}>
        <CartIcon />
      </Container>
    </Link>
  );
};

export default Cart;
