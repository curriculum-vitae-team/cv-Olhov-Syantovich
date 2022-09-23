import { useContext } from 'react';
import { TableContext, TableContextValues } from '@templates/table';

export const useTableContext = <T>() => {
  return useContext(TableContext) as TableContextValues<T>;
};
