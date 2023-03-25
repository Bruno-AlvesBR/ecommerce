import { GetStaticProps } from 'next';

import { ProfilePresentation } from '@/presentation/profile';

const Perfil = () => <ProfilePresentation />;

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {},
  revalidate: 600,
});

export default Perfil;
