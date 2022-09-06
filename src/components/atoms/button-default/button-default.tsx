import React, { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { buttonDefaultSX } from '@atoms/button-default/button-default.styles';

const ButtonDefault: FC<PropsWithChildren> = ({ children }) => {
  return <Button sx={buttonDefaultSX}>{children}</Button>;
};

export default ButtonDefault;
