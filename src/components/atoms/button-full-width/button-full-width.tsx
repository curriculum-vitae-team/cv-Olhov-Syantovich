import { FC } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { buttonFullWidthSX } from '@atoms/button-full-width/button-full-width.styles';

export const ButtonFullWidth: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <Button sx={buttonFullWidthSX} {...props}>
      {props.disabled ? <CircularProgress /> : props.children}
    </Button>
  );
};
