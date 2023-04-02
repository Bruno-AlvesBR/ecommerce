import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { CategoryController } from '@/infra/http/controllers/category';
import { ProductProvider } from '@/providers/product';
import { IProduct } from '@/domain/api/product/entities';
import { CategoryPresentation } from '@/presentation/pages/category';

interface ITenisPage {
  products: Array<IProduct>;
}

const CategoryPage: NextPage<ITenisPage> = props => (
  <CategoryPresentation {...props} />
);

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { category } = context.params;

    const categoryController = new CategoryController(
      new ProductProvider(),
    );
    const props = await categoryController.index(String(category));

    return {
      props,
      revalidate: 300,
    };
  } catch {
    return {
      props: { products: [] },
      revalidate: 60,
    };
  }
};
