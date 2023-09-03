import { IBanner } from '@/domain/banner/entities';
import { IProduct } from '@/domain/api/product/entities';
import { ICategory } from '@/domain/category/entities';

export interface IHome {
  banners?: Array<IBanner>;
  releases?: Array<IProduct>;
  promotions?: Array<IProduct>;
  categories: Array<ICategory>;
}
