import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { TennisController } from '@/infra/http/controllers/category/tennis';
import { IProduct } from '@/domain/api/product/entities';
import { ProductProvider } from '@/providers/product';
import { TennisPresentation } from '@/presentation/category/tennis/slug';

interface ITennis {
  tennis: IProduct;
}

const Tennis: NextPage<ITennis> = props => (
  <TennisPresentation {...props} />
);

export default Tennis;

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: 'blocking',
  paths: [],
});

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { slug } = context.params;

    const tennisController = new TennisController(
      new ProductProvider(),
    );

    const props = await tennisController.index(String(slug));

    return {
      props,
      revalidate: 300,
    };
  } catch {
    return {
      props: {},
      revalidate: 60,
    };
  }
};
