import { Signin } from '@/presentation/components/core/Authentication/Signin';
import { useAuth } from '@/presentation/hooks/authentication';

import { Container } from '../styles';

export interface ISigninFormData {
  email: string;
  password: string;
}

const SigninPresentation = () => {
  const { handleSignin, isLoading } = useAuth();

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
