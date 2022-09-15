import { WrapColumn } from '@atoms/wrap-column';
import { ButtonFullWidth } from '@atoms/button-full-width';
import React from 'react';
import { Typography, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ISignInDataForm } from '@pages/SignIn/SignIn.interface';
import { validateEmailRegExp } from '@utils/regExp';
import { InputPassword } from '@atoms/input-password';
import { useSignIn } from '@hooks/useSignIn/useSignIn';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignInDataForm>({
    defaultValues: { email: '', password: '' }
  });
  const { onSubmit, loading } = useSignIn();
  return (
    <WrapColumn>
      <Typography>Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Email"
          error={!!errors.email}
          required
          label="Email"
          {...register('email', {
            required: 'Email can not be epmty',
            pattern: {
              value: validateEmailRegExp,
              message: 'Incorrect email'
            }
          })}
          helperText={errors?.email?.message}
        />
        <InputPassword
          placeholder="Password"
          error={!!errors.password}
          required
          label="Password"
          helperText={errors.password?.message}
          {...register('password', { required: 'Password can not be empty' })}
        />
        <ButtonFullWidth type="submit" disabled={loading}>
          Sign In
        </ButtonFullWidth>
      </form>
    </WrapColumn>
  );
};

export default SignIn;
