import React, { FC, useState } from 'react';
import { IconButton, Input, InputAdornment, InputProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputPassword: FC<InputProps> = (props: InputProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => setVisible(!visible);

  return (
    <Input
      placeholder={props.placeholder}
      type={visible ? 'text' : 'password'}
      required
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" onClick={changeVisibility}>
            {visible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
};
