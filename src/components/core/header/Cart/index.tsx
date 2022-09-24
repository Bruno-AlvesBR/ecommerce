import Link from 'next/link';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';

import { Container } from './styles';

interface ICartProps {
  notifiesCount?: number;
}

const Cart: React.FC<ICartProps> = ({ notifiesCount }) => (
  <Link href="/cart" passHref>
    <Button sx={{ padding: 0, margin: 0, minWidth: 0 }}>
      <Container badgeContent={notifiesCount}>
        <CartIcon />
      </Container>
    </Button>
  </Link>
);

export default Cart;
