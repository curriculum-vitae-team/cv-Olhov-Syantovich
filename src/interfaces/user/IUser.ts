import React from 'react';

export type UserType = {
  id: string;
  email: string;
  role: string;
};
export type TokenContextType = {
  user?: UserType;
  token?: string;
  setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUser?: React.Dispatch<React.SetStateAction<UserType | undefined>>;
};
