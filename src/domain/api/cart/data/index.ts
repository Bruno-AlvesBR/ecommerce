import { IProductApi } from '../../product/entities';

export interface ICartDTO {
  id: string;
  productsId: Array<string>;
}

export interface IRemoveProductCartDTO {
  id: string;
  productsId: Array<string>;
}

abstract class ICartData {
  abstract addProductToCart(data: ICartDTO): Promise<void>;

  abstract findAll(id: string): Promise<Array<IProductApi>>;

  abstract removeProductIntoCart(
    data: IRemoveProductCartDTO,
  ): Promise<void>;
}

export { ICartData };
