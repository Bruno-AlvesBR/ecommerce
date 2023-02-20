import { IProductData } from '@/domain/api/product/data';
import { IProductApi } from '@/domain/api/product/entities';
import { BaseApi } from '@/providers/BaseApi';

class ProductProvider extends BaseApi implements IProductData {
  async findAll(): Promise<Array<IProductApi>> {
    try {
      const { data } = await this.api.get<Array<IProductApi>>(
        '/product',
      );

      return data;
    } catch {
      return [];
    }
  }
}

export { ProductProvider };
