import React, { FC, PropsWithChildren } from 'react';
import { ColumnWrap } from '@atoms/wrap-column/wrap-column.styles';

export const WrapColumn: FC<PropsWithChildren> = ({ children }) => {
  return <ColumnWrap>{children}</ColumnWrap>;
};
