import { GetStaticProps } from 'next';

import { ProfileConfigsPresentation } from '@/presentation/pages/profile/configs';

const PerfilConfiguracoes = () => <ProfileConfigsPresentation />;

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {},
  revalidate: 600,
});

export default PerfilConfiguracoes;
