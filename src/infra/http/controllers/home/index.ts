import { IProductData } from '@/domain/api/product/data';
import { IBanner } from '@/domain/banner/entities';
import { handleFormatProduct } from '@/utils/format/product';

class HomeController {
  private releaseProvider: IProductData;

  constructor(releaseProvider: IProductData) {
    this.releaseProvider = releaseProvider;
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

      const releases = await this.releaseProvider.findAllReleases();
      const promotions =
        await this.releaseProvider.findAllPromotions();

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
      };
    } catch (error) {
      console.error('error requesting/formatting data', error);

      return {
        banners: [],
        releases: [],
        promotions: [],
      };
    }
  }
}

export { HomeController };
