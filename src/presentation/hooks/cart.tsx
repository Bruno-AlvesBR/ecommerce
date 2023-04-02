import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { useAuth } from './authentication';
import { CartProvider as FetchCartProvider } from '@/providers/cart';
import { IProduct } from '@/domain/api/product/entities';
import { handleFormatProduct } from '@/utils/format/product';

export interface ICartContext {
  handleAddProductInCart(productId: string): void;
  handleRemoveProduct(productId: string): void;
  cartProducts: Array<IProduct>;
  countProducts: number;
  setCountProducts(value: number): void;
}

interface ICartProvider extends Partial<PropsWithChildren> {}

const CartContext = createContext({} as ICartContext);

const CartProvider: React.FC<ICartProvider> = ({ children }) => {
  const { user } = useAuth();
  const { push, reload, pathname } = useRouter();
  const cartProvider = new FetchCartProvider();

  const [cartProducts, setCartProducts] = useState<Array<IProduct>>(
    [],
  );
  const [countProducts, setCountProducts] = useState<number>(
    cartProducts.length || 0,
  );

  const handleGetAllProductsCart =
    useCallback(async (): Promise<void> => {
      const products = await cartProvider.findAll(user.cartId);
      if (!products || products.length <= 0) return;

      setCountProducts(products.length);

      const formattedProducts = products.map(product =>
        handleFormatProduct(product),
      );
      setCartProducts(formattedProducts);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.cartId]);

  useMemo(() => {
    if (!pathname.includes('carrinho')) handleGetAllProductsCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.cartId, pathname, handleGetAllProductsCart]);

  const handleAddProductInCart = useCallback(
    async (productId: string) => {
      if (user?.id) {
        await cartProvider.addProductToCart({
          id: user.cartId,
          productsId: [productId],
        });

        push('/carrinho');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.cartId, user?.id],
  );

  const handleRemoveProduct = useCallback(
    async (productId: string) => {
      if (user?.id) {
        await cartProvider.removeProductIntoCart({
          id: user.cartId,
          productsId: [productId],
        });

        reload();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.cartId, user?.id],
  );

  return (
    <CartContext.Provider
      value={{
        handleAddProductInCart,
        handleRemoveProduct,
        cartProducts,
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
