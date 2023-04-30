import CartIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from '@/presentation/components/ui/Link';
import { Badge } from '@/presentation/components/core/Badge';
import { cookies } from '@/utils/cookies';
import { CART_PRODUCT_IDS } from '@/utils/constants';

interface ICart {}

const Cart: React.FC<ICart> = () => {
  const countProductsCart =
    cookies.get(CART_PRODUCT_IDS)?.length || 0;

  return (
    <Link href="/carrinho" noDecoration>
      <Badge count={countProductsCart}>
        <CartIcon className="w-8 h-8" />
      </Badge>
    </Link>
  );
};

export { Cart };
