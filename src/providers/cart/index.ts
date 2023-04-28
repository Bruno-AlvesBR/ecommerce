import axios from 'axios';

import { ICartData, IFindAllDTO } from '@/domain/api/cart/data';
import { IProductApi } from '@/domain/api/product/entities';
import { BaseApi } from '../BaseApi';

class CartProvider extends BaseApi implements ICartData {
  async findAll({
    filters,
  }: IFindAllDTO): Promise<Array<IProductApi>> {
    try {
      const { data } = await axios.get(`${this.baseURL}cart`, {
        params: { ...filters },
      });

      return data;
    } catch (error) {
      throw new Error(
        `An error ocurred on find all products in the cart: ${error}`,
      );
    }
  }
}

export { CartProvider };
