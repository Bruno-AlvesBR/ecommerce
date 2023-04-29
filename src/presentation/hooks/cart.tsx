import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { cookies } from '@/utils/cookies';
import { CART_PRODUCT_IDS } from '@/utils/constants';
import { ICartCookie } from '@/domain/cart/entities';

export interface ICartContext {
  handleAddProductInCart(productId: string): void;
  handleRemoveProduct(productId: string): void;
  countProducts: number;
  setCountProducts(value: number): void;
}

interface ICartProvider extends Partial<PropsWithChildren> {}

const CartContext = createContext({} as ICartContext);

const CartProvider: React.FC<ICartProvider> = ({ children }) => {
  const { push, reload } = useRouter();

  const [countProducts, setCountProducts] = useState<number>(0);

  useEffect(() => {
    const cartProducts: ICartCookie =
      cookies.get(CART_PRODUCT_IDS) || [];

    if (cartProducts.length === 0) return;

    setCountProducts(cartProducts.length);
  }, []);

  const handleAddProductInCart = useCallback(
    async (productId: string) => {
      const products = [];
      const cartProducts: ICartCookie =
        cookies.get(CART_PRODUCT_IDS) || [];

      const hasProductIntoCart = cartProducts.length > 0;

      if (hasProductIntoCart) {
        const productCartMatch = cartProducts.filter(
          product => product.id === productId,
        )[0];

        if (productCartMatch?.id) {
          const allCartProductsFiltered = cartProducts.filter(
            product => product.id !== productId,
          );

          if (allCartProductsFiltered.length > 0)
            products.push(...allCartProductsFiltered);

          products.push({
            id: productCartMatch.id,
            quantity: productCartMatch.quantity + 1,
          });
          cookies.set(CART_PRODUCT_IDS, products);
        } else {
          products.push(...cartProducts, {
            id: productId,
            quantity: 1,
          });
          cookies.set(CART_PRODUCT_IDS, products);
        }
      } else {
        products.push({ id: productId, quantity: 1 });
        cookies.set(CART_PRODUCT_IDS, products);
      }

      push('/carrinho');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleRemoveProduct = useCallback(
    async (productId: string) => {
      const cartProducts: ICartCookie = cookies.get(CART_PRODUCT_IDS);

      const products = cartProducts.filter(
        product => product.id !== productId,
      );
      cookies.set(CART_PRODUCT_IDS, products);

      reload();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <CartContext.Provider
      value={{
        handleAddProductInCart,
        handleRemoveProduct,
        countProducts,
        setCountProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be within a cart provider');
  }

  return context;
}

export { CartContext, CartProvider, useCart };
