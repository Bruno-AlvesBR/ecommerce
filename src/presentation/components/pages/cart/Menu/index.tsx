import { ICartProduct } from '@/domain/cart/entities';

interface ICartMenu {
  products: Array<ICartProduct>;
}

const CartMenu: React.FC<ICartMenu> = ({ products }) => (
  <div className="shadow-md sm:max-w-full flex flex-col w-full max-w-[300px] bg-white1000 rounded-2 p-4">
    {products?.map(item => (
      <p key={item.id}>{item.price?.priceNumber}</p>
    ))}
  </div>
);

export { CartMenu };
