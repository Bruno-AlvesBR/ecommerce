import { handleFormatProduct } from '@/utils/format/product';
import { IProductData } from '@/domain/api/product/data';

class TennisController {
  private productProvider: IProductData;

  constructor(productProvider: IProductData) {
    this.productProvider = productProvider;
  }

  async index(slug: string) {
    const tennis = await this.productProvider.findBySlug(slug);

    const formattedTennis = handleFormatProduct(tennis);

    return { tennis: formattedTennis };
  }
}

export { TennisController };
