import {
  IUser,
  IUserSignin,
  IUserSignup,
} from '@/domain/user/entities';

abstract class IAuthenticationData {
  abstract signup(data: IUserSignup): Promise<void>;

  abstract signin(data: IUserSignin): Promise<IUser>;

  abstract recover(id: string): Promise<IUser>;
}

export { IAuthenticationData };
