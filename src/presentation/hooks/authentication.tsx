import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import {
  IUser,
  IUserSignin,
  IUserSignup,
} from '@/domain/user/entities';
import { AuthenticationProvider as AuthenticationFetchProvider } from '@/providers/authentication';
import { AUTH_COOKIE } from '@/utils/constants';
import { cookies } from '@/utils/cookies';

export interface IAuthContext {
  user: IUser;
  handleSignup?(data: IUserSignup): void;
  handleSignin?(data: IUserSignin): void;
  handleLogout?(): void;
  setIsLoading?(value: boolean): void;
  isLoading: boolean;
}

interface IAuthProvider extends PropsWithChildren {}

const AuthContext = createContext({} as IAuthContext);

const AuthenticationProvider: React.FC<IAuthProvider> = ({
  children,
}) => {
  const { push, reload } = useRouter();
  const authenticationFetchProvider =
    new AuthenticationFetchProvider();

  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoading, setIsLoading] = useState(false);

  const recoverUser = useCallback(async () => {
    const token = cookies.get(AUTH_COOKIE);

    if (!token) return;

    try {
      const convertToken = Buffer.from(token, 'base64').toString(
        'ascii',
      );

      const response = await authenticationFetchProvider.recover(
        convertToken,
      );

      if (!response) return;
      setUser(response);
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

  const params =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search);

  const handleSignin = useCallback(
    async (data: IUserSignin) => {
      try {
        setIsLoading(true);

        const response = await authenticationFetchProvider.signin(
          data,
        );

        if (response?.id) {
          setUser(response);

          const convertUserId = Buffer.from(response.id).toString(
            'base64',
          );
          cookies.set(AUTH_COOKIE, convertUserId, {
            maxAge: 3600 * 24 * 7,
          });

          const redirectParam = params.get('redirect');
          window.open(redirectParam, '_self');
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params],
  );

  const handleLogout = useCallback(() => {
    const token = cookies.get(AUTH_COOKIE);

    if (token) {
      cookies.remove(AUTH_COOKIE);
      reload();
    }
  }, [reload]);

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignin,
        handleSignup,
        isLoading,
        setIsLoading,
        handleLogout,
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
