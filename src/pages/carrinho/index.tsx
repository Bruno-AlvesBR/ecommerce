import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';

import { CartPresentation } from '@/presentation/pages/cart';

const Cart: NextPage = () => <CartPresentation />;

export const getStaticProps: GetStaticProps = () => ({
  props: {},
});

export default Cart;
