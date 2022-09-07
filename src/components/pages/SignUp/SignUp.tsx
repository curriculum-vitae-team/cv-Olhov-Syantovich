import { WrapColumn } from '@atoms/wrap-column';
import { ButtonFullWidth } from '@atoms/button-full-width';
import React from 'react';
import { Typography, Input } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISignUpDataForm } from '@pages/SignUp/SignUp.interface';
import { validateEmailRegExp } from '@utils/regExp';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
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
        <Input
          placeholder={'Email'}
          type={'text'}
          error={!!errors.email}
          {...register('email', {
            pattern: {
              value: validateEmailRegExp,
              message: 'Incorrect email'
            }
          })}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          error={!!errors.password}
          {...register('password', { required: 'Password can not be empty' })}
        />
        <Input
          placeholder={'Confirm password'}
          type={'password'}
          error={!!errors.confirmPassword}
          {...register('confirmPassword', {
            required: 'Confirm password can not be empty',
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'Your passwords do no match';
              }
            }
          })}
        />
        <ButtonFullWidth type={'submit'}>Sign Up</ButtonFullWidth>
      </form>
    </WrapColumn>
  );
};

export default SignUp;
