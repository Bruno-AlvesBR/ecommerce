import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { ProductCategorySlugController } from '@/infra/http/controllers/category/slug';
import { IProduct } from '@/domain/api/product/entities';
import { ProductProvider } from '@/providers/product';
import { CategorySlugPresentation } from '@/presentation/pages/category/slug';

interface ICategorySlug {
  product: IProduct;
}

const CategorySlugPage: NextPage<ICategorySlug> = props => (
  <CategorySlugPresentation {...props} />
);

export default CategorySlugPage;

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: 'blocking',
  paths: [],
});

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { slug } = context.params;

    const productCategorySlugController =
      new ProductCategorySlugController(new ProductProvider());

    const props = await productCategorySlugController.index(
      String(slug),
    );

    return {
      props,
      revalidate: 600,
    };
  } catch {
    return {
      props: {},
      revalidate: 60,
    };
  }
};
