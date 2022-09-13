import { useMutation } from '@apollo/client';
import { SIGNUP } from '@api/auth/mutations';
import { useContext, useEffect } from 'react';
import { AppContext } from '@templates/app/app.context';
import { SubmitHandler } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';

export const useSignUp = () => {
  const [signUp, { data, error, loading }] = useMutation(SIGNUP);

  const { setToken, setUser } = useContext(AppContext);
  useEffect(() => {
    if (data && setToken && setUser) {
      setUser(data.signup.user);
      setToken(data.signup.access_token);
    }
  }, [data, error]);
  const onSubmit: SubmitHandler<ISignUpDataForm> = ({ email, password }) => {
    signUp({
      variables: { auth: { email, password } }
    });
  };
  return { onSubmit, error, loading };
};
