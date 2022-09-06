import React, { FC, PropsWithChildren } from 'react';
import { Header } from './text-header.styes';

const TextHeader: FC<PropsWithChildren> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default TextHeader;
