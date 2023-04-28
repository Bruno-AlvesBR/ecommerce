import CartIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from '@/presentation/components/ui/Link';
import { useCart } from '@/presentation/hooks/cart';
import { Badge } from '@/presentation/components/core/Badge';

interface ICartProps {}

const Cart: React.FC<ICartProps> = () => {
  const { countProducts } = useCart();

  return (
    <Link href="/carrinho" noDecoration>
      <Badge count={countProducts}>
        <CartIcon className="w-8 h-8" />
      </Badge>
    </Link>
  );
};

export { Cart };
