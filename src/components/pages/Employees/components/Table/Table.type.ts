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
  sortFields: string[];
} | null;
export type TableProps = {
  TableHeader: () => JSX.Element;
  TableRow: ({ element }: TableRowType) => JSX.Element;
  TableFooter?: FC<JSX.Element>;
  data?: Array<IUser>;
  searchFields: string[];
  sortFields: string[];
  searchFunction: (searchFields: string[], search: string) => (user: IUser) => boolean;
  compareFunction: (order: string, orderBy: string) => (a: IUser, b: IUser) => number;
};
export type AbstractData = {
  id: string;
  [key: string]: unknown;
};
