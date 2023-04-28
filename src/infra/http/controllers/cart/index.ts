import { ICartData } from '@/domain/api/cart/data';
import { ICartCookie, ICartProduct } from '@/domain/cart/entities';

class CartController {
  private cartProvider: ICartData;

  constructor(cartProvider: ICartData) {
    this.cartProvider = cartProvider;
  }

  async index(cartProducts: ICartCookie) {
    const idArray = cartProducts.map(product => product.id).join(',');

    const products = await this.cartProvider.findAll({
      filters: { ids: idArray },
    });

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
