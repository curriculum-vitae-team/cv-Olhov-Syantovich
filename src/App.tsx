import React, { useState } from 'react';
import { TokenContext } from './context/TokenContext';
import RouterApp from './router/RouterApp';
import { UserType } from './interfaces/user/IUser';

function App() {
  const [token, setToken] = useState<string>();
  const [user, setUser] = useState<UserType>();
  return (
    <TokenContext.Provider value={{ token, setToken, user, setUser }}>
      <RouterApp />
    </TokenContext.Provider>
  );
}

export default App;
