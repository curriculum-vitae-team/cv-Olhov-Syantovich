import { WrapColumn } from '@atoms/wrap-column';
import { ButtonFullWidth } from '@atoms/button-full-width';
import React from 'react';
import { Typography, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';
import { validateEmailRegExp } from '@utils/regExp';
import { InputPassword } from '@atoms/input-password';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<ISignUpDataForm>({
    defaultValues: { email: '', password: '', confirmPassword: '' }
  });
  const onSubmit: SubmitHandler<ISignUpDataForm> = (data) => {
    console.log(data);
  };
  return (
    <WrapColumn>
      <Typography>Sign Up</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Email"
          label="Email"
          error={!!errors.email}
          required
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
        <InputPassword
          placeholder="Confirm password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          required
          label="Confirm password"
          {...register('confirmPassword', {
            required: 'Confirm password can not be empty',
            validate: (val: string) => {
              if (getValues('password') != val) {
                return 'Your passwords do no match';
              }
            }
          })}
        />
        <ButtonFullWidth type="submit">Sign Up</ButtonFullWidth>
      </form>
    </WrapColumn>
  );
};

export default SignUp;
