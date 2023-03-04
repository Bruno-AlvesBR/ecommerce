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

  async findBySlug(slug: string): Promise<IProductApi> {
    try {
      const { data } = await this.api.get<IProductApi>(
        `/product/${slug}`,
      );

      return data;
    } catch {
      return {};
    }
  }

  async findAllByCategory(
    category: string,
  ): Promise<Array<IProductApi>> {
    try {
      const { data } = await this.api.get(
        `/product/category/${category}`,
      );

      return data;
    } catch {
      return [];
    }
  }

  async findAllReleases(): Promise<Array<IProductApi>> {
    try {
      const { data } = await this.api.get('/product/releases');

      return data;
    } catch {
      return [];
    }
  }

  async findAllPromotions(): Promise<Array<IProductApi>> {
    try {
      const { data } = await this.api.get('/product/promotions');

      return data;
    } catch {
      return [];
    }
  }
}

export { ProductProvider };
