import { IProduct, IProductApi } from '@/domain/api/product/entities';

const handleFormatProduct = (product: IProductApi): IProduct => ({
  ...product,
  id: product?.id || '',
  title: product?.title || '',
  description: product?.description || '',
  brand: product?.brand || '',
  manufacturer: product?.manufacture || '',
  price: product?.price?.priceNumber || '',
  newPriceDiscount: product?.price?.newPriceDiscount || '',
  pricePerMonth: product?.price?.installment?.pricePerMonth || '',
  slug: product?.slug || '',
  category: {
    name: product?.category ? product?.category[0] : '',
    slug: product?.category
      ? product?.category[0]?.toLocaleLowerCase()
      : '',
  },
  installment: product?.price?.installment?.monthInstallment || 1,
  isPromotion: product?.isPromotion,
  stockQuantity: product?.stock || 0,
  discountPercentage: product?.discountPercentage || null,
  rating: product?.rating || 0,
});

export { handleFormatProduct };
