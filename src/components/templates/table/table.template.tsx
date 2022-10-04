import { memo, useState, useDeferredValue, FC, useCallback, ChangeEvent } from 'react';
import { Table, TableBody, TableHead } from '@mui/material';
import { SortOrder } from '@constants/sort-order.constant';
import { handleSearch as handleSearchHelpers } from '@utils/table/table-search.helper';
import { handleOrder, handleSort as handleSortHelpers } from '@utils/table/table-sort.helper';
import { Item, TableProps } from './table.types';
import { Path } from 'react-hook-form';

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
  return (
    <Table stickyHeader sx={{ mb: 3 }}>
      <TableHead>
        <TableHeadComponent
          search={search}
          sortBy={sortBy}
          order={order}
          handleSort={handleSort}
          handleSearch={handleSearch}
        />
      </TableHead>
      <TableBody>
        {items
          .filter(handleSearchHelpers<T>(searchKeys, deferredSearch))
          .sort(handleSortHelpers<T>(deferredSortBy, deferredOrder))
          .map((item) => (
            <TableRowComponent key={item.id} item={item} />
          ))}
      </TableBody>
    </Table>
  );
};

const TableComponent = memo(TableTemplate) as never;

export const createTable = <T extends Item>(): FC<TableProps<T>> => TableComponent;
