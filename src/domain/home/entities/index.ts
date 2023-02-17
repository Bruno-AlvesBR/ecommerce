import { IBanner } from '@/domain/banner/entities';
import { IBestSellersProps } from './IBestSellers';

export interface IHome {
  banners?: Array<IBanner>;
  bestSellers?: Array<IBestSellersProps>;
}
