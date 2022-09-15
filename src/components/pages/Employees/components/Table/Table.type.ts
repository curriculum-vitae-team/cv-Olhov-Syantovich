import React, { FC } from 'react';

export type TableEmployeesTypeColumns = {
  field: string;
  headerName: string;
  sx?: { width?: number; minWidth?: number };
};
export type TableRowType = {
  [key: string]: undefined | string;
  id?: string;
  email?: string;
  department_name?: string;
  position_name?: string;
};
export enum OrderEnum {
  asc = 'asc',
  desc = 'desc'
}
export type TableContextType = {
  sortBy: string;
  setSortBy?: React.Dispatch<React.SetStateAction<string>>;
  order: OrderEnum;
  setOrder?: React.Dispatch<React.SetStateAction<OrderEnum>>;
};
export type TableProps = {
  TableHeader: FC<JSX.Element>;
  TableBody: FC<JSX.Element>;
  TableFooter?: FC<JSX.Element>;
};
