import { useQuery } from '@apollo/client';

import { useContext, useEffect } from 'react';
import { AppContext } from '@templates/app/app.context';
import { SubmitHandler } from 'react-hook-form';
import { ISignInDataForm } from '@pages/SignIn/SignIn.interface';
import { LOGIN } from '@api/auth/queries';

export const useSignIn = () => {
  const { data, error, loading, refetch } = useQuery(LOGIN);

  const { setToken, setUser } = useContext(AppContext);
  useEffect(() => {
    if (data && setToken && setUser) {
      setUser(data.login.user);
      setToken(data.login.access_token);
    }
  }, [data, error]);
  const onSubmit: SubmitHandler<ISignInDataForm> = ({ email, password }) => {
    refetch({
      auth: { email, password }
    });
  };
  return { onSubmit, error, loading };
};
