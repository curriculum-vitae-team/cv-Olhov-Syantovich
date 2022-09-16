import React, { FC } from 'react';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export type TableEmployeesTypeColumns = {
  headerName: string;
  sx?: { width?: number; minWidth?: number };
};
export type TableRowType = {
  id?: string;
  email?: string;
  department_name?: string | null;
  position_name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
export enum OrderEnum {
  asc = 'asc',
  desc = 'desc'
}
export type TableContextType = {
  sortBy: string;
  setSortBy?: React.Dispatch<React.SetStateAction<TableEmployeeEnum>>;
  order: OrderEnum;
  setOrder?: React.Dispatch<React.SetStateAction<OrderEnum>>;
};
export type TableProps = {
  TableHeader: () => JSX.Element;
  TableRow: (props: TableRowType) => JSX.Element;
  TableFooter?: FC<JSX.Element>;
};
