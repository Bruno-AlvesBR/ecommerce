import { useState } from 'react';

import { Signup } from '@/components/core/Authentication/Signup';
import { useAuth } from '@/hooks/authentication';

import { Container } from '../styles';

export interface ISignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: String;
}

const SignupPresentation = () => {
  const { handleSignup, isLoading } = useAuth();

  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: ISignupFormData) => {
    const passwordMatch = data.password.includes(
      String(data.confirmPassword),
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
