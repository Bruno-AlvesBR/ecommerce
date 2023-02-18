import { IProductData } from '@/domain/api/product/data';
import { IBanner } from '@/domain/banner/entities';
import { handleFormatProduct } from '@/utils/format/product';

class HomeController {
  private releaseProvider: IProductData;

  constructor(releaseProvider: IProductData) {
    this.releaseProvider = releaseProvider;
  }

  async index() {
    const banners: Array<IBanner> = [
      {
        imageUrl: 'https://iili.io/HGCBAZX.webp',
        slug: '',
        alternativeLink: '',
        altText: '',
      },
    ];

    const releases = await this.releaseProvider.findAll();

    const formatedReleases = releases?.map(release =>
      handleFormatProduct(release),
    );

    return { banners, releases: formatedReleases };
  }
}

export { HomeController };
