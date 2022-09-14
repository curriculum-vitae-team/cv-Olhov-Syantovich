import { IUser } from '@interfaces/IUser';

export interface IAuthResult {
  user: IUser;
  access_token: string;
}
