import { IProductData } from '@/domain/api/product/data';
import { IBanner } from '@/domain/banner/entities';
import { ICategoryData } from '@/domain/category/data';
import { handleFormatProduct } from '@/utils/format/product';

class HomeController {
  private releaseProvider: IProductData;
  private categoryProvider: ICategoryData;

  constructor(
    releaseProvider: IProductData,
    categoryProvider: ICategoryData,
  ) {
    this.releaseProvider = releaseProvider;
    this.categoryProvider = categoryProvider;
  }

  async index() {
    try {
      const banners: Array<IBanner> = [
        {
          imageUrl: 'https://iili.io/HGCBAZX.webp',
          slug: '',
          alternativeLink: '',
          altText: '',
        },
        {
          imageUrl: 'https://iili.io/HGCBAZX.webp',
          slug: '',
          alternativeLink: '',
          altText: '',
        },
      ];

      const [releases, promotions, categories] = await Promise.all([
        this.releaseProvider.findAllReleases(),
        this.releaseProvider.findAllPromotions(),
        this.categoryProvider.findAll(),
      ]);

      const formattedReleases = releases?.map(release =>
        handleFormatProduct(release),
      );

      const formattedPromotions = promotions?.map(promotion =>
        handleFormatProduct(promotion),
      );

      return {
        banners,
        releases: formattedReleases,
        promotions: formattedPromotions,
        categories,
      };
    } catch (error) {
      console.error('error requesting/formatting data', error);

      return {
        banners: [],
        releases: [],
        promotions: [],
        categories: [],
      };
    }
  }
}

export { HomeController };
