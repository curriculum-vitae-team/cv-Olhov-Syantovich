import React, { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { buttonAuthorizationSX } from '@atoms/button-authorization/button-authorization.styles';

const ButtonAuthorization: FC<PropsWithChildren> = ({ children }) => {
  return <Button sx={buttonAuthorizationSX}>{children}</Button>;
};

export default ButtonAuthorization;
