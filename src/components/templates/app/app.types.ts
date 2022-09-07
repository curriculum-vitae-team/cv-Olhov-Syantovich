import { IUser } from '@interfaces/user/IUser';
import { Dispatch, SetStateAction } from 'react';

export type TokenContextType = {
  user?: IUser;
  token?: string;
  setToken?: Dispatch<SetStateAction<string | undefined>>;
  setUser?: Dispatch<SetStateAction<IUser | undefined>>;
};
