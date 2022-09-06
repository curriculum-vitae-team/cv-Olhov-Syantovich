import React, { useState } from 'react';
import { TokenContext } from './context/TokenContext';
import { RouterApp } from './router/RouterApp';
import { IUser } from './interfaces/user/IUser';

export function App() {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<IUser>();
  return (
    <TokenContext.Provider value={{ token, setToken, user, setUser }}>
      <RouterApp />
    </TokenContext.Provider>
  );
}
