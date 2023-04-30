import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';

import { ICartCookie, ICartProduct } from '@/domain/cart/entities';
import { useCart } from '@/presentation/hooks/cart';
import { Link } from '@/presentation/components/ui/Link';
import { CART_PRODUCT_IDS } from '@/utils/constants';
import { cookies } from '@/utils/cookies';

interface ICard extends ICartProduct {}

const Card: React.FC<ICard> = ({
  id,
  images,
  title,
  category,
  slug,
  price,
}) => {
  const { handleRemoveProduct, handleUpdateCartProducts } = useCart();

  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    const cartProducts: ICartCookie =
      cookies.get(CART_PRODUCT_IDS) || [];

    const productCartMatchSelect = cartProducts.filter(
      product => product.id === id,
    )[0];

    setProductQuantity(productCartMatchSelect?.quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateProductQuantity = (action: 'reduce' | 'add') => {
    if (action === 'add') setProductQuantity(productQuantity + 1);
    else setProductQuantity(productQuantity - 1);

    const adjustProductQuantiySubvalue = action === 'add' ? 1 : 0;

    handleUpdateCartProducts(
      id,
      productQuantity + adjustProductQuantiySubvalue,
    );
  };

  return (
    <div
      className="sm:flex-col flex items-center justify-between gap-2 w-full border-b-[1px] border-b-black1000 last-of-type:border-b-0"
      key={id}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={images[0]}
          alt=""
          placeholder="blur"
          blurDataURL={images[0]}
          width={64}
          height={64}
        />

        <Link
          className="text-ellipsis line-clamp-1 w-full max-w-[450px] overflow-hidden"
          href={`/categoria/${category}/${slug}`}
        >
          {title}
        </Link>
        <p className="text-4 font-light">
          {price.newPriceDiscount || price.priceNumber}
        </p>
      </div>

      <div className="sm:ml-auto md:gap-2 flex flex-row gap-4 items-center">
        <div className="sm:order-1 flex flex-row items-center gap-2">
          <button
            className="sm:p-1 hover:text-red800 items-center justify-center font-bold text-4 hover:brightness-90 bg-white1000 p-2 rounded-2 transition-all ease-in delay-[50]"
            onClick={() => handleUpdateProductQuantity('reduce')}
          >
            -
          </button>
          <p className="font-bold text-4">{productQuantity}</p>
          <button
            className="sm:p-1 hover:text-red800 items-center justify-center font-bold text-4 hover:brightness-90 bg-white1000 p-2 rounded-2 transition-all ease-in delay-[50]"
            onClick={() => handleUpdateProductQuantity('add')}
          >
            +
          </button>
        </div>

        <button
          className="flex flex-center justify-center outline-none bg-transparent w-fit h-fit border-none cursor-pointer ml-auto transition-all ease-in delay-[50] hover:text-red800 focus:text-red800 hover:brightness-90 bg-white1000 p-2 rounded-2"
          onClick={() => handleRemoveProduct(id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export { Card };
