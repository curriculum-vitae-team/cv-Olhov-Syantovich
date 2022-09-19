import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ISignInDataForm } from '@pages/SignIn/SignIn.interface';
import { LOGIN } from '@api/auth/queries';
import user from '@store/user';

export const useSignIn = () => {
  const { data, error, loading, refetch } = useQuery(LOGIN);

  useEffect(() => {
    if (data) {
      user.setUser(data.login.user);
      user.setToken(data.login.access_token);
      localStorage.setItem('user', JSON.stringify(data.login.user));
      localStorage.setItem('token', JSON.stringify(data.login.access_token));
    }
  }, [data, error]);
  const onSubmit: SubmitHandler<ISignInDataForm> = ({ email, password }) => {
    refetch({
      auth: { email, password }
    });
  };
  return { onSubmit, error, loading };
};
