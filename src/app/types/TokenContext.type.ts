import { IUser } from '../../interfaces/user/IUser';

export type TokenContextType = {
  user?: IUser;
  token?: string;
  setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUser?: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};
