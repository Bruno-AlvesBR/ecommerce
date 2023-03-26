import { IAuthContext } from '@/hooks/authentication';

export const createMockAuth = (
  data: Partial<IAuthContext>,
): IAuthContext => ({
  user: {
    id: 'user',
    name: {
      firstName: 'user-first-name',
      lastName: 'user-last-name',
    },
    email: 'user@gmail.com',
    password: 'user-password',
  },
  isLoading: true,
  ...data,
});
