import React, { FC, useState } from 'react';
import { IconButton, Input, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const InputPassword: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => setVisible(!visible);

  return (
    <Input
      placeholder={'Password'}
      type={visible ? 'text' : 'password'}
      required
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="toggle password visibility" onClick={changeVisibility}>
            {visible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default InputPassword;
