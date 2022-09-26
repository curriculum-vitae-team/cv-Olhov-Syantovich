import { ReactNode } from 'react';
import { SortOrder } from '@constants/sort-order.constant';
import { TableCellProps } from '@mui/material';

export type TableSortCellProps = TableCellProps & {
  active: boolean;
  direction: SortOrder;
  children: ReactNode;
};
