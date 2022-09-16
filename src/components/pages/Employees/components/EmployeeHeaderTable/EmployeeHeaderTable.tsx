import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { TableHeaderSX } from '@pages/Employees/components/Table/Table.style';
import { visuallyHidden } from '@mui/utils';
import React, { useContext } from 'react';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { OrderEnum } from '@pages/Employees/components/Table/Table.type';
import { columnsSetting } from '../../../../../constants/table-employees.enum';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export const EmployeeHeaderTable: () => JSX.Element = () => {
  const { sortBy, setSortBy, order, setOrder } = useContext(TableContext);

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={TableHeaderSX} sortDirection={sortBy === TableEmployeeEnum.firstName ? order : false}>
          <TableSortLabel
            active={sortBy === TableEmployeeEnum.firstName}
            direction={sortBy === TableEmployeeEnum.firstName ? order : OrderEnum.asc}
            onClick={() => {
              const isAsc = sortBy === TableEmployeeEnum.firstName && order === OrderEnum.asc;
              setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
              setSortBy && setSortBy(TableEmployeeEnum.firstName);
            }}
          >
            {columnsSetting[TableEmployeeEnum.firstName].headerName}
            {TableEmployeeEnum.firstName === sortBy ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
        <TableCell sx={TableHeaderSX} sortDirection={sortBy === TableEmployeeEnum.lastName ? order : false}>
          <TableSortLabel
            active={sortBy === TableEmployeeEnum.lastName}
            direction={sortBy === TableEmployeeEnum.lastName ? order : OrderEnum.asc}
            onClick={() => {
              const isAsc = sortBy === TableEmployeeEnum.lastName && order === OrderEnum.asc;
              setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
              setSortBy && setSortBy(TableEmployeeEnum.lastName);
            }}
          >
            {columnsSetting[TableEmployeeEnum.lastName].headerName}
            {TableEmployeeEnum.lastName === sortBy ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
        <TableCell sx={TableHeaderSX} sortDirection={sortBy === TableEmployeeEnum.email ? order : false}>
          <TableSortLabel
            active={sortBy === TableEmployeeEnum.email}
            direction={sortBy === TableEmployeeEnum.email ? order : OrderEnum.asc}
            onClick={() => {
              const isAsc = sortBy === TableEmployeeEnum.email && order === OrderEnum.asc;
              setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
              setSortBy && setSortBy(TableEmployeeEnum.email);
            }}
          >
            {columnsSetting[TableEmployeeEnum.email].headerName}
            {TableEmployeeEnum.email === sortBy ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
        <TableCell sx={TableHeaderSX} sortDirection={sortBy === TableEmployeeEnum.department ? order : false}>
          <TableSortLabel
            active={sortBy === TableEmployeeEnum.department}
            direction={sortBy === TableEmployeeEnum.department ? order : OrderEnum.asc}
            onClick={() => {
              const isAsc = sortBy === TableEmployeeEnum.department && order === OrderEnum.asc;
              setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
              setSortBy && setSortBy(TableEmployeeEnum.department);
            }}
          >
            {columnsSetting[TableEmployeeEnum.department].headerName}
            {TableEmployeeEnum.department === sortBy ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
        <TableCell sx={TableHeaderSX} sortDirection={sortBy === TableEmployeeEnum.position ? order : false}>
          <TableSortLabel
            active={sortBy === TableEmployeeEnum.position}
            direction={sortBy === TableEmployeeEnum.position ? order : OrderEnum.asc}
            onClick={() => {
              const isAsc = sortBy === TableEmployeeEnum.position && order === OrderEnum.asc;
              setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
              setSortBy && setSortBy(TableEmployeeEnum.position);
            }}
          >
            {columnsSetting[TableEmployeeEnum.position].headerName}
            {TableEmployeeEnum.position === sortBy ? (
              <Box component="span" sx={visuallyHidden}>
                {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
