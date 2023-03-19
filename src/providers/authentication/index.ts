import { IAuthenticationData } from '@/domain/authentication/data';
import {
  IUserSignup,
  IUserSignin,
  IUser,
} from '@/domain/user/entities';
import axios from 'axios';
import { BaseApi } from '../BaseApi';

class AuthenticationProvider
  extends BaseApi
  implements IAuthenticationData
{
  async recover(id: string): Promise<IUser> {
    try {
      const { data } = await axios.get(`${this.baseURL}user/${id}`);

      return data;
    } catch (error) {
      throw new Error(`An error ocurred on recover user: ${error}`);
    }
  }

  async signup(data: IUserSignup): Promise<void> {
    try {
      await axios.post(`${this.baseURL}user/register`, data);
    } catch (error) {
      throw new Error(`An error ocurred on signup user: ${error}`);
    }
  }

  async signin(params: IUserSignin): Promise<IUser> {
    try {
      const { data } = await axios.post(
        `${this.baseURL}user/login`,
        params,
      );

      return data;
    } catch (error) {
      throw new Error(`An error ocurred on signin user: ${error}`);
    }
  }
}

export { AuthenticationProvider };
