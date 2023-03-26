import axios from 'axios';

import {
  ICartData,
  ICartDTO,
  IRemoveProductCartDTO,
} from '@/domain/api/cart/data';
import { IProductApi } from '@/domain/api/product/entities';
import { BaseApi } from '../BaseApi';

class CartProvider extends BaseApi implements ICartData {
  async addProductToCart(data: ICartDTO): Promise<void> {
    try {
      await axios.put(`${this.baseURL}cart/${data?.id}`, data);
    } catch (error) {
      throw new Error(
        `An error ocurred on add the product in cart: ${error}`,
      );
    }
  }

  async findAll(id: string): Promise<Array<IProductApi>> {
    try {
      const { data } = await axios.get(`${this.baseURL}cart/${id}`);

      return data;
    } catch (error) {
      throw new Error(
        `An error ocurred on find all products in the cart: ${error}`,
      );
    }
  }

  async removeProductIntoCart(
    data: IRemoveProductCartDTO,
  ): Promise<void> {
    try {
      await axios.delete(`${this.baseURL}cart/${data?.id}`, {
        data,
      });
    } catch (error) {
      throw new Error(
        `An error ocurred on find all products in the cart: ${error}`,
      );
    }
  }
}

export { CartProvider };
