import React, { useState, memo } from 'react';
import { TableContainer, Table as TableMui, Paper, TableBody } from '@mui/material';
import { OrderEnum, TableProps } from '@pages/Employees/components/Table/Table.type';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { SearchInput } from '@atoms/search-input/search-input';
import { IUser } from '@interfaces/IUser';

const Table = ({
  TableHeader,
  TableRow,
  TableFooter,
  data = [],
  sortFields,
  searchFields,
  searchFunction,
  compareFunction
}: TableProps) => {
  const [sortBy, setSortBy] = useState<string>('');
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);
  const [search, setSearch] = useState('');

  const handlerOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value);
  };
  return (
    <TableContext.Provider value={{ sortBy, setSortBy, order, setOrder, sortFields }}>
      <TableContainer component={Paper}>
        <SearchInput onChange={handlerOnChangeSearch} />
        <TableMui sx={{ minWidth: 500 }} aria-label="custom pagination table">
          {TableHeader && <TableHeader />}
          {
            <TableBody>
              {data
                ?.filter(searchFunction(searchFields, search))
                .sort(compareFunction(order, sortBy))
                .map((e: IUser) => {
                  return <TableRow key={e.id} element={e} />;
                })}
            </TableBody>
          }
          {TableFooter && <TableFooter key={'footer'} props={{}} type={'footer'} />}
        </TableMui>
      </TableContainer>
    </TableContext.Provider>
  );
};

export default memo(Table);
