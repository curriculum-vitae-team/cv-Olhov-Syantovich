import React, { FC, PropsWithChildren } from 'react';
import { Button } from '@mui/material';
import { buttonFullWidthSX } from '@atoms/button-full-width/button-full-width.styles';

export const ButtonFullWidth: FC<PropsWithChildren> = ({ children }) => {
  return <Button sx={buttonFullWidthSX}>{children}</Button>;
};
