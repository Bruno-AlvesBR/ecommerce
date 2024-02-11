import { CartMenu } from '@/presentation/components/pages/cart/Menu';
import { CartProducts } from '@/presentation/components/pages/cart/Products';
import { ICartProduct } from '@/domain/cart/entities';
import { useEffect, useState } from 'react';
import { cookies } from '@/utils/cookies';
import { CART_PRODUCT_IDS } from '@/utils/constants';
import { CartController } from '@/infra/http/controllers/cart';
import { CartProvider } from '@/providers/cart';

interface ICartPresentation {
  products: Array<ICartProduct>;
}

const CartPresentation = () => {
  const [products, setProducts] = useState<Array<ICartProduct>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCartProducts = async () => {
    const productsCookie = cookies.get(CART_PRODUCT_IDS);
    if (!productsCookie) return;

    try {
      const cartController = new CartController(new CartProvider());
      const { products } = await cartController.index(productsCookie);

      setProducts(products);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <div className="sm:mx-2 sm:mt-4 flex flex-col m-[40px] w-full">
      <div className="sm:flex-col flex flex-row w-full gap-4 justify-center">
        {isLoading ? (
          <h1 className="text-6 font-semibold">Carregando...</h1>
        ) : (
          <>
            <CartProducts products={products} />

            <CartMenu products={products} />
          </>
        )}
      </div>
    </div>
  );
};

export { CartPresentation };
