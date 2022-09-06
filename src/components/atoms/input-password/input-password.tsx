import React, { FC, useState } from 'react';
import { Box, Input } from '@mui/material';
import { boxSX, passwordInputSX, visibilityIconSX } from '@atoms/input-password/input-password.styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputPassword: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => setVisible(!visible);

  return (
    <Box sx={boxSX}>
      <Input sx={passwordInputSX} placeholder={'Password'} type={visible ? 'text' : 'password'} required />
      {visible ? (
        <VisibilityIcon sx={visibilityIconSX} onClick={changeVisibility} />
      ) : (
        <VisibilityOffIcon sx={visibilityIconSX} onClick={changeVisibility} />
      )}
    </Box>
  );
};

export default InputPassword;
