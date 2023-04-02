import { ICartData } from '@/domain/api/cart/data';
import { IAuthenticationData } from '@/domain/authentication/data';
import { ICartProduct } from '@/domain/cart/entities';

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

    const formattedProducts: Array<ICartProduct> = products.map(
      product => ({
        id: product.id,
        title: product.title,
        slug: product.slug,
        category: product.category,
        images: product.images,
        price: product.price,
      }),
    );

    return { products: formattedProducts };
  }
}

export { CartController };
