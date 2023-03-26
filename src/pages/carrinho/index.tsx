import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { CartController } from '@/infra/http/controllers/cart';
import { CartProvider } from '@/providers/cart';
import { IProduct } from '@/domain/api/product/entities';
import { AuthenticationProvider } from '@/providers/authentication';
import { CartPresentation } from '@/presentation/cart';

interface ICart {
  products: Array<IProduct>;
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

export default Cart;
