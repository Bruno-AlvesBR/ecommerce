import { IProductApi } from '../../product/entities';

export interface ICartDTO {
  id: string;
  productsId: Array<string>;
}

export interface IFindAllDTO {
  filters: { ids: string };
}

abstract class ICartData {
  abstract findAll(params: IFindAllDTO): Promise<Array<IProductApi>>;
}

export { ICartData };
