import React, { FC, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputPassword: FC<TextFieldProps> = React.forwardRef((props: TextFieldProps, ref) => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => setVisible(!visible);

  return (
    <TextField
      type={visible ? 'text' : 'password'}
      required
      ref={ref}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={changeVisibility}>
              {visible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  );
});
InputPassword.displayName = 'InputPassword';
