import { ICartData } from '@/domain/api/cart/data';
import { IAuthenticationData } from '@/domain/authentication/data';
import { handleFormatProduct } from '@/utils/format/product';

class CartController {
  private cartProvider: ICartData;
  private authProvider: IAuthenticationData;

  constructor(
    cartProvider: ICartData,
    authProvider: IAuthenticationData,
  ) {
    this.cartProvider = cartProvider;
    this.authProvider = authProvider;
  }

  async index(id: string) {
    const user = await this.authProvider.recover(id);
    const products = await this.cartProvider.findAll(user.cartId);

    const formattedProducts = products.map(product =>
      handleFormatProduct(product),
    );

    return { products: formattedProducts };
  }
}

export { CartController };
