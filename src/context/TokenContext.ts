import { createContext } from 'react';
import { TokenContextType } from '../interfaces/user/IUser';

const defaultValue: TokenContextType = {
  user: undefined,
  token: undefined,
  setToken: undefined,
  setUser: undefined
};
export const TokenContext = createContext(defaultValue);
