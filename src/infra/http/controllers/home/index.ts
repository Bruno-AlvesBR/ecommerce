import { IBanner } from '@/domain/banner/entities';
import { IBestSellersProps } from '@/domain/home/entities/IBestSellers';

class HomeController {
  constructor() {}

  async index() {
    const banners: Array<IBanner> = [
      {
        imageUrl: 'https://iili.io/HGCBAZX.webp',
        slug: '',
        alternativeLink: '',
        altText: '',
      },
    ];

    const bestSellers: Array<IBestSellersProps> = [
      { id: 'first', title: 'first', slug: 'first' },
      { id: 'second', title: 'second', slug: 'second' },
      { id: 'third', title: 'third', slug: 'third' },
      { id: 'for', title: 'for', slug: 'for' },
      { id: 'first', title: 'first', slug: 'first' },
      { id: 'second', title: 'second', slug: 'second' },
      { id: 'third', title: 'third', slug: 'third' },
      { id: 'for', title: 'for', slug: 'for' },
    ];

    return { banners, bestSellers };
  }
}

export { HomeController };
