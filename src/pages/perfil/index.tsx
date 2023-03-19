import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'universal-cookie';

import { AUTH_COOKIE } from '@/utils/constants';
import { useAuth } from '@/hooks/authentication';

const Perfil = () => {
  const cookie = new Cookie();
  const { push } = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (cookie.get(AUTH_COOKIE)) return;

    push('/autenticacao/logar');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Perfil {user?.name?.firstName}</div>;
};

export const getStaticProps: GetStaticProps = async ctx => ({
  props: {},
  revalidate: 600,
});

export default Perfil;
