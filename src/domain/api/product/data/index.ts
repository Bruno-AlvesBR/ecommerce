import { IProductApi } from '@/domain/api/product/entities';

abstract class IProductData {
  abstract findAll(): Promise<Array<IProductApi>>;

  abstract findBySlug(slug: string): Promise<IProductApi>;
}

export { IProductData };
