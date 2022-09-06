import { createContext } from 'react';
import { TokenContextType } from '../app/types/TokenContext.type';

const defaultValue: TokenContextType = {
  user: undefined,
  token: undefined,
  setToken: undefined,
  setUser: undefined
};
export const TokenContext = createContext(defaultValue);
