import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { CartController } from '@/infra/http/controllers/cart';
import { CartProvider } from '@/providers/cart';
import { ICartProduct } from '@/domain/cart/entities';
import { CartPresentation } from '@/presentation/pages/cart';
import { CART_PRODUCT_IDS } from '@/utils/constants';

interface ICart {
  products: Array<ICartProduct>;
}

const Cart: NextPage<ICart> = props => (
  <CartPresentation {...props} />
);

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const productsCookie = ctx.req.cookies[CART_PRODUCT_IDS];

    const cartController = new CartController(new CartProvider());
    const props = await cartController.index(
      JSON.parse(productsCookie),
    );

    return { props };
  } catch {
    return {
      props: { products: [] },
    };
  }
};

export default Cart;
