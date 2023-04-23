import { GetStaticProps, NextPage } from 'next';

import { HomePresentation } from '@/presentation/pages/home';
import { HomeController } from '@/infra/http/controllers/home';
import { IHome } from '@/domain/home/entities';
import { ProductProvider } from '@/providers/product';

const Home: NextPage<IHome> = props => (
  <HomePresentation {...props} />
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const homeController = new HomeController(new ProductProvider());
    const props = await homeController.index();

    return {
      props,
      revalidate: 600,
    };
  } catch {
    return {
      props: {
        banners: [],
        releases: [],
        promotions: [],
      },
      revalidate: 60,
    };
  }
};
