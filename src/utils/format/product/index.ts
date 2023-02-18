import { IProduct, IProductApi } from '@/domain/api/product/entities';

const handleFormatProduct = (product: IProductApi): IProduct => ({
  id: product?.id || '',
  title: product?.title || '',
  description: product?.description || '',
  brand: product?.brand || '',
  manufacturer: product?.manufacture || '',
  price: product?.price?.priceNumber,
  slug: product?.slug || '',
  category: {
    name: product?.category ? product?.category[0] : '',
    slug: 'tenis',
  },
  imgs: [
    { url: product?.image?.desktopSrc || '' },
    { url: product?.image?.mobileSrc || '' },
    { url: product?.image?.desktopSrc || '' },
    { url: product?.image?.mobileSrc || '' },
  ],
  installment: product?.price?.installment?.monthInstallment || 1,
  isPromotion: true,
  stockQuantity: product?.stock || 0,
  discountPercentage: 40,
});

export { handleFormatProduct };
