export interface IProductApi {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    priceNumber?: number;
    installment?: {
      monthInstallment?: number;
      pricePerMonth?: number;
    };
  };
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  image?: {
    mobileSrc?: string;
    desktopSrc?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imgs?: { url?: string }[];
  slug: string;
  category?: {
    name: string;
    slug: string;
  };
  price: number;
  isPromotion?: boolean;
  discountPercentage?: number;
  installment?: number;
  stockQuantity: number;
  manufacturer: string;
  brand: string;
}
