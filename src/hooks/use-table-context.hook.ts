import { ChangeEvent, useCallback, useContext } from 'react';
import { TableContext, TableContextValues } from '@templates/table';
import { Path } from 'react-hook-form';

export const useTableContext = <T>() => {
  const context = useContext(TableContext) as TableContextValues<T>;
  const { setSearch, toggleOrder, sortBy, setSortBy } = context;
  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch && setSearch(event.target.value);
    },
    [setSearch]
  );

  const handleSort = useCallback(
    (sortKey: Path<T>) => () => {
      setSortBy && setSortBy(sortKey);
      sortKey === sortBy && toggleOrder && toggleOrder();
    },
    [sortBy, setSortBy, toggleOrder]
  );
  return { handleSort, handleSearch, ...context };
};
