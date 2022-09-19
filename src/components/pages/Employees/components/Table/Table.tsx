import React, { useState, memo } from 'react';
import { TableContainer, Table as TableMui, Paper, TableBody } from '@mui/material';
import { AbstractData, OrderEnum, TableProps } from '@pages/Employees/components/Table/Table.type';
import { Loader } from '@atoms/loader/loader';
import { getComparator } from '@utils/comparator';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { SearchInput } from '@atoms/search-input/search-input';

const Table = <T extends AbstractData>({ TableHeader, TableRow, TableFooter, data = [] }: TableProps<T>) => {
  const [sortBy, setSortBy] = useState<string>('');
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);
  const [search, setSearch] = useState('');

  const handlerOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value);
  };
  return (
    <TableContext.Provider value={{ sortBy, setSortBy, order, setOrder }}>
      <TableContainer component={Paper}>
        <SearchInput onChange={handlerOnChangeSearch} />
        <TableMui sx={{ minWidth: 500 }} aria-label="custom pagination table">
          {TableHeader && <TableHeader />}
          {!data?.length ? (
            <Loader />
          ) : (
            <TableBody>
              {data
                ?.filter((user) => {
                  for (const value of Object.values(user)) {
                    if (value.toString().toLowerCase().includes(search.toLowerCase())) {
                      return true;
                    }
                  }
                  return false;
                })
                .sort(getComparator(order, sortBy))
                .map((e) => {
                  return <TableRow key={e.id} element={e} />;
                })}
            </TableBody>
          )}

          {TableFooter && <TableFooter key={'footer'} props={{}} type={'footer'} />}
        </TableMui>
      </TableContainer>
    </TableContext.Provider>
  );
};

export default memo(Table);
