export interface IProductApi {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: Array<string>;
  price?: {
    priceNumber?: string;
    newPriceDiscount?: string;
    installment?: {
      monthInstallment?: number;
      pricePerMonth?: string;
    };
  };
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
  images: Array<string>;
  createdAt?: string;
  updatedAt?: string;
  cartId: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  images: Array<string>;
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
  price: string;
  newPriceDiscount?: string;
  pricePerMonth?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
  installment?: number;
  stockQuantity: number;
  manufacturer: string;
  brand: string;
  rating: number;
  cartId: string;
}
