import { ICategory } from '../entities';

abstract class ICategoryData {
  abstract findAll(): Promise<Array<ICategory>>;
  abstract findById(id: string): Promise<ICategory>;
}

export { ICategoryData };
