import React, { useState, memo } from 'react';
import { TableContainer, Table, Paper } from '@mui/material';
import { OrderEnum, TableProps } from '@pages/Employees/components/Table/Table.type';
import { TableContext } from '@pages/Employees/components/Table/Table.context';

const TableEmployees = ({ TableHeader, TableBody, TableFooter }: TableProps) => {
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);
  return (
    <TableContext.Provider value={{ sortBy, setSortBy, order, setOrder }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          {TableHeader && <TableHeader key={'header'} props={{}} type={'header'} />}
          <TableBody key={'body'} props={{}} type={'body'} />
          {TableFooter && <TableFooter key={'footer'} props={{}} type={'footer'} />}
        </Table>
      </TableContainer>
    </TableContext.Provider>
  );
};

export default memo(TableEmployees);
