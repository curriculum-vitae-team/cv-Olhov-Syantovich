import React, { FC, PropsWithChildren } from 'react';
import { RowWrap } from '@atoms/wrap-row/wrap-row.styles';

const WrapRow: FC<PropsWithChildren> = ({ children }) => {
  return <RowWrap>{children}</RowWrap>;
};

export default WrapRow;
