import { createContext } from 'react';
import { SortOrder } from '@constants/sort-order.constant';

const defaultValue = {
  search: '',
  sortBy: '',
  order: SortOrder.Asc,
  setSearch: undefined,
  setSortBy: undefined,
  toggleOrder: undefined
};

export const TableContext = createContext(defaultValue);
