import React, { FC } from 'react';
import { MyLinkType } from '@atoms/link-to/LinkTo.types';
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from '@mui/material';

export const LinkTo: FC<MyLinkType> = ({ children, to }: MyLinkType) => {
  return (
    <Link component={LinkRouter} to={`/${to}`}>
      {children}
    </Link>
  );
};
