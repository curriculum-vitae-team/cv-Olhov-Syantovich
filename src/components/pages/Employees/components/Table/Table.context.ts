import { createContext } from 'react';
import { OrderEnum, TableContextType } from '@pages/Employees/components/Table/Table.type';

const defaultValue: TableContextType = {
  sortBy: '',
  setSortBy: undefined,
  order: OrderEnum.asc,
  setOrder: undefined,
  sortFields: []
};
export const TableContext = createContext(defaultValue);
