import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { CartController } from '@/infra/http/controllers/cart';
import { CartProvider } from '@/providers/cart';
import { ICartProduct } from '@/domain/cart/entities';
import { AuthenticationProvider } from '@/providers/authentication';
import { CartPresentation } from '@/presentation/pages/cart';

interface ICart {
  products: Array<ICartProduct>;
}

const Cart: NextPage<ICart> = props => (
  <CartPresentation {...props} />
);

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const { authDunkedToken } = ctx.req.cookies;
    const converttedToken = Buffer.from(
      authDunkedToken,
      'base64',
    ).toString('ascii');

    const cartController = new CartController(
      new CartProvider(),
      new AuthenticationProvider(),
    );
    const props = await cartController.index(converttedToken);

    return { props };
  } catch {
    return {
      props: { products: [] },
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async ctx => ({
//   props: {},
// });

export default Cart;
