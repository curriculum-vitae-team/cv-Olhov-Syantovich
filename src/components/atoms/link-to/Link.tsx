import React, { FC } from 'react';
import { LinkTypes } from '@atoms/link-to/Link.types';
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from '@mui/material';

const MyLink: FC<LinkTypes> = ({ children, to }: LinkTypes) => {
  return (
    <Link component={LinkRouter} to={`/${to}`}>
      {children}
    </Link>
  );
};
export default MyLink;
