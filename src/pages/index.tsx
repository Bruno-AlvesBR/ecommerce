import { GetStaticProps, NextPage } from 'next';

import HomePresentation from '@/presentation/home';

const Home: NextPage = () => <HomePresentation />;

export default Home;

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 600,
});
