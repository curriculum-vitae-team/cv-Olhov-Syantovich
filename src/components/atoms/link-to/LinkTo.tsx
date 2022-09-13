import React, { FC } from 'react';
import { Link as LinkRouter, LinkProps as ReactRouterLinkProps } from 'react-router-dom';
import { Link, LinkProps as MuiLinkProps } from '@mui/material';

export const LinkTo: FC<MuiLinkProps & ReactRouterLinkProps> = (props: ReactRouterLinkProps & MuiLinkProps) => {
  return (
    <Link component={LinkRouter} {...props} to={`/${props.to}`}>
      {props.children}
    </Link>
  );
};
