import React, { FC } from 'react';
import { Input } from '@mui/material';
import { emailInputSX } from '@atoms/input-email/input-email.styles';

const InputEmail: FC = () => <Input sx={emailInputSX} placeholder={'Email'} type={'email'} required />;
export default InputEmail;
