import React, { FC } from 'react';
import { IUser } from '@interfaces/IUser';

export type TableEmployeesTypeColumns = {
  headerName: string;
  sx?: { width?: number; minWidth?: number };
};
export type TableRowType = {
  element: IUser;
};
export enum OrderEnum {
  asc = 'asc',
  desc = 'desc'
}
export type TableContextType = {
  sortBy?: string;
  setSortBy?: React.Dispatch<React.SetStateAction<string>>;
  order?: OrderEnum;
  setOrder?: React.Dispatch<React.SetStateAction<OrderEnum>>;
} | null;
export type TableProps<T> = {
  TableHeader: () => JSX.Element;
  TableRow: ({ element }: { element: T }) => JSX.Element;
  TableFooter?: FC<JSX.Element>;
  data?: Array<T>;
  searchFields: string[];
  sortFields: string[];
};
export type AbstractData = {
  id: string;
};
