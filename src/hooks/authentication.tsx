import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import Cookie from 'universal-cookie';

import {
  IUser,
  IUserSignin,
  IUserSignup,
} from '@/domain/user/entities';
import { AuthenticationProvider as AuthenticationFetchProvider } from '@/providers/authentication';
import { AUTH_COOKIE } from '@/utils/constants';

interface IAuthContext {
  user: IUser;
  handleSignup(data: IUserSignup): void;
  handleSignin(data: IUserSignin): void;
  setIsLoading(value: boolean): void;
  isLoading: boolean;
}

interface IAuthProvider extends PropsWithChildren {}

const AuthContext = createContext({} as IAuthContext);

const AuthenticationProvider: React.FC<IAuthProvider> = ({
  children,
}) => {
  const { push } = useRouter();
  const cookie = new Cookie();
  const authenticationFetchProvider =
    new AuthenticationFetchProvider();

  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoading, setIsLoading] = useState(false);

  const recoverUser = useCallback(async () => {
    const token = cookie.get(AUTH_COOKIE);

    if (!token) return;

    try {
      const convertToken = Buffer.from(token, 'base64').toString(
        'ascii',
      );

      const response = await authenticationFetchProvider.recover(
        convertToken,
      );

      if (response) setUser(response);
    } catch {
      setUser({} as IUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useMemo(() => recoverUser(), [recoverUser]);

  const handleSignup = useCallback(async (data: IUserSignup) => {
    try {
      setIsLoading(true);

      await authenticationFetchProvider.signup({
        email: data?.email,
        firstName: data?.firstName,
        lastName: data?.lastName,
        password: data?.password,
      });

      push('/autenticacao/logar');
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignin = useCallback(async (data: IUserSignin) => {
    try {
      setIsLoading(true);

      const response = await authenticationFetchProvider.signin(data);

      if (response) {
        setUser(response);

        console.log('test', response);

        const convertUserId = Buffer.from(response?.id).toString(
          'base64',
        );
        cookie.set(AUTH_COOKIE, convertUserId, {
          maxAge: 60 * 60 * 24,
        });
      }

      push('/');
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignin,
        handleSignup,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      'useAuth must be within a authentication provider',
    );

  return context;
}

export { AuthContext, AuthenticationProvider, useAuth };
