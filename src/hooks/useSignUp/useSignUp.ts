import { useMutation } from '@apollo/client';
import { SIGNUP } from '@api/auth/mutations';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';
import user from '@store/user';

export const useSignUp = () => {
  const [signUp, { data, error, loading }] = useMutation(SIGNUP);

  useEffect(() => {
    if (data) {
      user.setUser(data.login.user);
      user.setToken(data.login.access_token);
      localStorage.setItem('user', JSON.stringify(data.login.user));
      localStorage.setItem('token', JSON.stringify(data.login.access_token));
    }
  }, [data, error]);
  const onSubmit: SubmitHandler<ISignUpDataForm> = ({ email, password }) => {
    signUp({
      variables: { auth: { email, password } }
    });
  };
  return { onSubmit, error, loading };
};
