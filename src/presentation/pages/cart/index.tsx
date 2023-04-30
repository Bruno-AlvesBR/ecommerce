import { CartMenu } from '@/presentation/components/pages/cart/Menu';
import { CartProducts } from '@/presentation/components/pages/cart/Products';
import { ICartProduct } from '@/domain/cart/entities';

interface ICartPresentation {
  products: Array<ICartProduct>;
}

const CartPresentation: React.FC<ICartPresentation> = ({
  products,
}) => (
  <div className="sm:mx-2 sm:mt-4 flex flex-col m-[40px] w-full">
    <div className="sm:flex-col flex flex-row w-full gap-4">
      <CartProducts products={products} />

      <CartMenu products={products} />
    </div>
  </div>
);

export { CartPresentation };
