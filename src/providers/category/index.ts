import { ICategoryData } from '@/domain/category/data';
import { ICategory } from '@/domain/category/entities';
import { BaseApi } from '../BaseApi';

class CategoryProvider extends BaseApi implements ICategoryData {
  async findAll(): Promise<Array<ICategory>> {
    try {
      const { data } = await this.api.get('/categories/all');

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id: string): Promise<ICategory> {
    try {
      const { data } = await this.api.get('/categories/', {
        params: { id },
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { CategoryProvider };
