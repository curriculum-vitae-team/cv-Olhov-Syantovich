import { IUser } from '@interfaces/IUser';

export type AuthInput = {
  email: string;
  password: string;
};

export type AuthResult = {
  user: IUser;
  access_token: string;
};
