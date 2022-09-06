import React, { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { buttonCloseSX } from '@atoms/button-close/button-close.styles';

const ButtonClose: FC<PropsWithChildren> = ({ children }) => {
  return <Button sx={buttonCloseSX}>{children}</Button>;
};

export default ButtonClose;
