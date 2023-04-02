import { IProductApi } from '@/domain/api/product/entities';

export type ICartProduct = Pick<
  IProductApi,
  'id' | 'title' | 'images' | 'category' | 'slug' | 'price'
>;
