import { IProductApi } from '@/domain/api/product/entities';

abstract class IProductData {
  abstract findAll(): Promise<Array<IProductApi>>;

  abstract findBySlug(slug: string): Promise<IProductApi>;

  abstract findAllByCategory(
    category: string,
  ): Promise<Array<IProductApi>>;

  abstract findAllReleases(): Promise<Array<IProductApi>>;

  abstract findAllPromotions(): Promise<Array<IProductApi>>;
}

export { IProductData };
