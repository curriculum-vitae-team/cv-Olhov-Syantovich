import React, { FC, PropsWithChildren } from 'react';
import { ColumnWrap } from '@atoms/wrap-column/wrap-column.styles';

const WrapColumn: FC<PropsWithChildren> = ({ children }) => {
  return <ColumnWrap>{children}</ColumnWrap>;
};

export default WrapColumn;
