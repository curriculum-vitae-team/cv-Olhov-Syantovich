import { memo, useMemo, useState, useDeferredValue, FC, useCallback } from 'react';
import { Table, TableBody, TableHead } from '@mui/material';
import { SortOrder } from '@constants/sort-order.constant';
import { handleSearch } from '@utils/table/table-search.helper';
import { handleOrder, handleSort } from '@utils/table/table-sort.helper';
import { Item, TableProps } from './table.types';
import { TableContext } from './table.context';

const TableTemplate = <T extends Item>({
  items,
  searchKeys,
  sortByKey,
  TableHeadComponent,
  TableRowComponent
}: TableProps<T>) => {
  const [search, setSearch] = useState('');
  const deferredSearch = useDeferredValue(search);
  const [sortBy, setSortBy] = useState(sortByKey);
  const deferredSortBy = useDeferredValue(sortBy);
  const [order, setOrder] = useState(SortOrder.Asc);
  const deferredOrder = useDeferredValue(order);

  const toggleOrder = useCallback(() => {
    setOrder(handleOrder);
  }, []);

  const value = useMemo(() => {
    return { search, sortBy, order, setSearch, setSortBy, toggleOrder };
  }, [search, sortBy, order, toggleOrder]);

  return (
    <Table stickyHeader sx={{ mb: 3 }}>
      <TableContext.Provider value={value as never}>
        <TableHead>
          <TableHeadComponent />
        </TableHead>
        <TableBody>
          {items
            .filter(handleSearch<T>(searchKeys, deferredSearch))
            .sort(handleSort<T>(deferredSortBy, deferredOrder))
            .map((item) => (
              <TableRowComponent key={item.id} item={item} />
            ))}
        </TableBody>
      </TableContext.Provider>
    </Table>
  );
};

const TableComponent = memo(TableTemplate) as never;

export const createTable = <T extends Item>(): FC<TableProps<T>> => TableComponent;
