export interface IUser {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
}

export interface IUserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserSignin {
  email: string;
  password: string;
}
