import { handleFormatProduct } from '@/utils/format/product';
import { IProductData } from '@/domain/api/product/data';

class CategoryController {
  private productProvider: IProductData;

  constructor(productProvider: IProductData) {
    this.productProvider = productProvider;
  }

  async index(category: string) {
    const products = await this.productProvider.findAllByCategory(
      category,
    );

    const formattedProducts = products?.map(product =>
      handleFormatProduct(product),
    );

    return { products: formattedProducts };
  }
}

export { CategoryController };
