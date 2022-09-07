import { createContext } from 'react';
import { TokenContextType } from '@templates/app/app.types';

const defaultValue: TokenContextType = {
  user: undefined,
  token: undefined,
  setToken: undefined,
  setUser: undefined
};

export const AppContext = createContext(defaultValue);
