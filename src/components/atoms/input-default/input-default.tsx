import React, { FC } from 'react';
import { InputType } from '@atoms/input-default/input-default.types';
import { Input } from '@mui/material';
import { defaultInputSX } from '@atoms/input-default/input-default.styles';

const InputDefault: FC<InputType> = ({ placeholder, required }) => {
  return <Input sx={defaultInputSX} placeholder={placeholder} required={required} />;
};

export default InputDefault;
