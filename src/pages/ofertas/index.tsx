import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { OffersController } from '@/infra/http/controllers/offers';
import { OffersPresentation } from '@/presentation/pages/offers';
import { ProductProvider } from '@/providers/product';
import { IProduct } from '@/domain/api/product/entities';

interface IOffersPage {
  offers: Array<IProduct>;
}

const Offers: NextPage<IOffersPage> = props => (
  <OffersPresentation {...props} />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const offersController = new OffersController(
      new ProductProvider(),
    );

    const props = await offersController.index();

    return { props, revalidate: 1200 };
  } catch (error) {
    console.error(`Error on mount offers contents: ${error}`);

    return {
      props: { offers: [] },
      revalidate: 600,
    };
  }
};

export default Offers;
