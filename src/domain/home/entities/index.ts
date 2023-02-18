import { IBanner } from '@/domain/banner/entities';
import { IProduct } from '@/domain/api/product/entities';

export interface IHome {
  banners?: Array<IBanner>;
  releases?: Array<IProduct>;
}
