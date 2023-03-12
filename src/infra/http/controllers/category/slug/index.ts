import { handleFormatProduct } from '@/utils/format/product';
import { IProductData } from '@/domain/api/product/data';

class ProductCategorySlugController {
  private productProvider: IProductData;

  constructor(productProvider: IProductData) {
    this.productProvider = productProvider;
  }

  async index(slug: string) {
    const product = await this.productProvider.findBySlug(slug);

    const formattedProduct = handleFormatProduct(product);

    return { product: formattedProduct };
  }
}

export { ProductCategorySlugController };
