import React, { useState } from 'react';
import {
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
  Box
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { OrderEnum, TableEmployeeTypeProps } from '@pages/Employees/components/Table/Table.type';
import { TableHeaderSX, TableRowsSX } from '@pages/Employees/components/Table/Table.style';
import { getComparator } from '@utils/comparator';

export const TableEmployees = ({ columns, textAlign = 'left', rows }: TableEmployeeTypeProps) => {
  const [sortBy, setSortBy] = useState(columns[0].field);
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.asc);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map((element, index) => (
              <TableCell
                key={index}
                align={textAlign}
                sx={{ width: element.width, ...TableHeaderSX }}
                sortDirection={sortBy === element.field ? order : false}
              >
                <TableSortLabel
                  active={sortBy === element.field}
                  direction={sortBy === element.field ? order : OrderEnum.asc}
                  onClick={() => {
                    const isAsc = sortBy === element.field && order === OrderEnum.asc;
                    setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
                    setSortBy(element.field);
                  }}
                >
                  {element.headerName}
                  {element.field === sortBy ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.sort(getComparator(order, sortBy)).map((row) => (
            <TableRow key={row.id}>
              {columns.map(({ field }, index) => (
                <TableCell key={index} align={textAlign} sx={TableRowsSX}>
                  {field in row ? row[field] : false}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
