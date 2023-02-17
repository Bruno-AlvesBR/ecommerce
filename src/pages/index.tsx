import { GetStaticProps, NextPage } from 'next';

import HomePresentation from '@/presentation/home';
import { HomeController } from '@/infra/http/controllers/home';
import { IHome } from '@/domain/home/entities';

const Home: NextPage<IHome> = props => (
  <HomePresentation {...props} />
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const homeController = new HomeController();
    const props = await homeController.index();

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
