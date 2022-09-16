import React, { useState, memo } from 'react';
import { TableContainer, Table as TableMui, Paper, TableBody } from '@mui/material';
import { OrderEnum, TableProps } from '@pages/Employees/components/Table/Table.type';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { Loader } from '@atoms/loader/loader';
import { getComparator } from '@utils/comparator';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { SearchInput } from '@atoms/search-input/search-input';

const Table = ({ TableHeader, TableRow, TableFooter }: TableProps) => {
  const [sortBy, setSortBy] = useState<TableEmployeeEnum>(TableEmployeeEnum.firstName);
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);
  const [search, setSearch] = useState('');
  const { data } = useGetEmployees();

  const handlerOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value);
  };
  return (
    <TableContext.Provider value={{ sortBy, setSortBy, order, setOrder }}>
      <TableContainer component={Paper}>
        <SearchInput onChange={handlerOnChangeSearch} />
        <TableMui sx={{ minWidth: 500 }} aria-label="custom pagination table">
          {TableHeader && <TableHeader />}
          {!data.length ? (
            <Loader />
          ) : (
            <TableBody>
              {data
                .filter((user) => {
                  for (const value of Object.values(user)) {
                    if (value.toLowerCase().includes(search.toLowerCase())) {
                      return true;
                    }
                  }
                  return false;
                })
                .sort(getComparator(order, sortBy))
                .map(({ id, department_name, position_name, last_name, first_name, email }) => (
                  <TableRow
                    department_name={department_name}
                    position_name={position_name}
                    lastName={last_name}
                    firstName={first_name}
                    email={email}
                    key={id}
                  />
                ))}
            </TableBody>
          )}

          {TableFooter && <TableFooter key={'footer'} props={{}} type={'footer'} />}
        </TableMui>
      </TableContainer>
    </TableContext.Provider>
  );
};

export default memo(Table);
