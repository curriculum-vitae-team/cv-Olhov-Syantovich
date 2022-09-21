import { useMutation } from '@apollo/client';
import { SIGNUP } from '@api/auth/mutations';
import { useContext, useEffect } from 'react';
import { AppContext } from '@templates/app/app.context';
import { SubmitHandler } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';
import { PathEnum } from '@templates/router/router.types';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const [signUp, { data, error, loading }] = useMutation(SIGNUP);
  const navigate = useNavigate();

  const { setToken, setUser } = useContext(AppContext);
  useEffect(() => {
    if (data && setToken && setUser) {
      setUser(data.signup.user);
      setToken(data.signup.access_token);
      localStorage.setItem('token', data.signup.access_token);
      navigate(`/${PathEnum.employees}`);
    }
  }, [data, error]);
  const onSubmit: SubmitHandler<ISignUpDataForm> = ({ email, password }) => {
    signUp({
      variables: { auth: { email, password } }
    });
  };
  return { onSubmit, error, loading };
};
