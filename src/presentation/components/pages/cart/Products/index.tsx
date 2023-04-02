import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Image from 'next/image';
import { memo } from 'react';

import { ICartProduct } from '@/domain/cart/entities';
import { useCart } from '@/presentation/hooks/cart';

import {
  Container,
  Card,
  Title,
  DeleteButton,
  Price,
} from './styles';

interface ICartProducts {
  products: Array<ICartProduct>;
}

const Products: React.FC<ICartProducts> = ({ products }) => {
  const { handleRemoveProduct } = useCart();

  return (
    <Container>
      {products?.length > 0 &&
        products.map(product => (
          <Card key={product.id}>
            <Image
              src={product.images[0]}
              alt=""
              placeholder="blur"
              blurDataURL={product.images[0]}
              width={64}
              height={64}
            />

            <Title
              href={`/categoria/${product.category}/${product.slug}`}
            >
              {product.title}
            </Title>
            <Price>
              {product.price.newPriceDiscount ||
                product.price.priceNumber}
            </Price>

            <DeleteButton
              onClick={() => handleRemoveProduct(product.id)}
            >
              <DeleteIcon />
            </DeleteButton>
          </Card>
        ))}
    </Container>
  );
};

const CartProducts = memo(Products);
export { CartProducts };
