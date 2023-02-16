import { Link } from '@/components/ui/Link';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

import { Container } from './styles';

interface ICartProps {
  notifiesCount?: number;
}

const Cart: React.FC<ICartProps> = ({ notifiesCount }) => (
  <Link href="/carrinho" passHref noDecoration>
    <Container badgeContent={notifiesCount}>
      <CartIcon />
    </Container>
  </Link>
);

export default Cart;
