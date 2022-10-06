import { useMutation } from '@apollo/client';
import { SIGNUP } from '@api/auth/mutations';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';
import { userStore } from '@store/UserStore';
import { PathEnum } from '@templates/router/router.types';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [signUp, { data, error, loading }] = useMutation(SIGNUP);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      userStore.setUser(data.signup.user);
      userStore.setToken(data.signup.access_token);
      localStorage.setItem('user', JSON.stringify(data.signup.user));
      localStorage.setItem('token', JSON.stringify(data.signup.access_token));
      navigate(`/${PathEnum.employees}`);
    }
  }, [data, error, navigate]);
  const onSubmit: SubmitHandler<ISignUpDataForm> = ({ email, password }) => {
    signUp({
      variables: { auth: { email, password } }
    });
  };
  return { onSubmit, error, loading };
};
