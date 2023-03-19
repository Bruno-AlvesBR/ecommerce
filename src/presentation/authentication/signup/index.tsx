import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'universal-cookie';

import { Signup } from '@/components/core/Authentication/Signup';
import { useAuth } from '@/hooks/authentication';
import { AUTH_COOKIE } from '@/utils/constants';

import { Container } from '../styles';

export interface ISignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: String;
}

const SignupPresentation = () => {
  const { handleSignup, isLoading, setIsLoading } = useAuth();
  const cookie = new Cookie();
  const { push } = useRouter();

  useEffect(() => {
    if (!cookie.get(AUTH_COOKIE)) return;

    setIsLoading(true);
    push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: ISignupFormData) => {
    const passwordMatch = data?.password?.includes(
      String(data?.confirmPassword),
    );

    if (passwordMatch) {
      handleSignup(data);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <Container>
      <Signup
        onSubmit={onSubmit}
        field={{
          isError,
          errorText: isError && 'Senhas não coincidem!',
        }}
        form={{ isLoading }}
      />
    </Container>
  );
};

export { SignupPresentation };
