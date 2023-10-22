import { ProductProvider } from '@/providers/product';
import { handleFormatProduct } from '@/utils/format/product';

class OffersController {
  private productProvider: ProductProvider;

  constructor(productProvider: ProductProvider) {
    this.productProvider = productProvider;
  }

  async index() {
    const offers = await this.productProvider.findAllPromotions();

    const formatteOffers = offers?.map(promotion =>
      handleFormatProduct(promotion),
    );

    return { offers: formatteOffers };
  }
}

export { OffersController };
