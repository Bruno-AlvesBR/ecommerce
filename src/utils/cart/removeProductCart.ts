// import { ICartCookie } from '@/domain/cart/entities';

interface IRemoveProductCart {
  slug: string;
  cartItems: Array<any>;
}

const handleRemoveProductToCart = ({
  slug,
  cartItems,
}: IRemoveProductCart) => {
  const productCartNotMatch = cartItems.filter(
    product => product.slug !== slug,
  );

  if (productCartNotMatch.length > 0) return productCartNotMatch;
  else return cartItems;
};

export { handleRemoveProductToCart };
