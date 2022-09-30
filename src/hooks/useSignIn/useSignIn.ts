import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ISignInDataForm } from '@pages/SignIn/SignIn.interface';
import { LOGIN } from '@api/auth/queries';
import { userStore } from '@store/UserStore';
import { PathEnum } from '@templates/router/router.types';
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const [login, { data, error, loading }] = useLazyQuery(LOGIN);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      userStore.setUser(data.login.user);
      userStore.setToken(data.login.access_token);
      localStorage.setItem('user', JSON.stringify(data.login.user));
      localStorage.setItem('token', JSON.stringify(data.login.access_token));
      navigate(`/${PathEnum.employees}`);
    }
  }, [data, error, navigate]);
  const onSubmit: SubmitHandler<ISignInDataForm> = ({ email, password }) => {
    login({
      variables: { auth: { email, password } }
    });
  };
  return { onSubmit, error, loading };
};
