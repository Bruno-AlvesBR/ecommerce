import Cookie from 'universal-cookie';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';

import { Signin } from '@/components/core/Authentication/Signin';
import { useAuth } from '@/hooks/authentication';
import { AUTH_COOKIE } from '@/utils/constants';

import { Container } from '../styles';

export interface ISigninFormData {
  email: string;
  password: string;
}

const SigninPresentation = () => {
  const { handleSignin, isLoading, setIsLoading } = useAuth();
  const cookie = new Cookie();
  const { push } = useRouter();

  useEffect(() => {
    if (!cookie.get(AUTH_COOKIE)) return;

    setIsLoading(true);
    push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Signin
        onSubmit={handleSignin}
        field={{
          isError: false,
          errorText: '',
        }}
        form={{ isLoading }}
      />
    </Container>
  );
};

export { SigninPresentation };
