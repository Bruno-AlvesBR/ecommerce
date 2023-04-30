import { memo } from 'react';

import { ICartProduct } from '@/domain/cart/entities';
import { Card } from './Card';

interface ICartProducts {
  products: Array<ICartProduct>;
}

const Products: React.FC<ICartProducts> = ({ products }) => (
  <div className="flex flex-col w-full h-fit bg-white1000 gap-2 p-4 rounded-2">
    {products?.length > 0 &&
      products.map(product => <Card key={product.id} {...product} />)}
  </div>
);

const CartProducts = memo(Products);
export { CartProducts };
