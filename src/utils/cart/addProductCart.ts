// import { ICartCookie } from '@/domain/cart/entities';

interface IAddProductCart {
  slug: string;
  cartItems: Array<any>;
}

const handleAddProductToCart = ({
  slug,
  cartItems,
}: IAddProductCart) => {
  const productCartMatch = cartItems.filter(
    product => product.slug === slug,
  );
  const productCartNotMatch = cartItems.filter(
    product => product.slug !== slug,
  );

  if (productCartMatch.length > 0) {
    return [
      ...productCartNotMatch,
      {
        slug: productCartMatch[0].slug,
        quantity: productCartMatch[0].quantity + 1,
      },
    ];
  } else {
    return [...cartItems, { slug, quantity: 1 }];
  }
};

export { handleAddProductToCart };
