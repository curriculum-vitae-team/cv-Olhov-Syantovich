import { FC, PropsWithChildren } from 'react';
import { RowWrap } from '@atoms/wrap-row/wrap-row.styles';

export const WrapRow: FC<PropsWithChildren> = ({ children }) => {
  return <RowWrap>{children}</RowWrap>;
};
