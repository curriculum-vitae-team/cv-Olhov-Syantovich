import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useContext } from 'react';
import { OrderEnum } from '@pages/Employees/components/Table/Table.type';
import { columnsSetting } from '../../../../../constants/table-employees.enum';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { TableContext } from '@pages/Employees/components/Table/Table.context';

export const EmployeeHeaderTable: () => JSX.Element = () => {
  const { sortBy, setSortBy, order, setOrder, sortFields } = useContext(TableContext);
  const handlerOnClick = (headerName: TableEmployeeEnum) => () => {
    const isAsc = sortBy === headerName && order === OrderEnum.asc;
    setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
    setSortBy && setSortBy(headerName);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={columnsSetting[TableEmployeeEnum.firstName].sx}
          sortDirection={sortBy === TableEmployeeEnum.firstName ? order : false}
        >
          {sortFields.includes(TableEmployeeEnum.firstName) ? (
            <TableSortLabel
              active={sortBy === TableEmployeeEnum.firstName}
              direction={sortBy === TableEmployeeEnum.firstName ? order : OrderEnum.asc}
              onClick={handlerOnClick(TableEmployeeEnum.firstName)}
            >
              {columnsSetting[TableEmployeeEnum.firstName].headerName}
              {TableEmployeeEnum.firstName === sortBy ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          ) : (
            columnsSetting[TableEmployeeEnum.firstName].headerName
          )}
        </TableCell>
        <TableCell
          sx={columnsSetting[TableEmployeeEnum.lastName].sx}
          sortDirection={sortBy === TableEmployeeEnum.lastName ? order : false}
        >
          {sortFields.includes(TableEmployeeEnum.lastName) ? (
            <TableSortLabel
              active={sortBy === TableEmployeeEnum.lastName}
              direction={sortBy === TableEmployeeEnum.lastName ? order : OrderEnum.asc}
              onClick={handlerOnClick(TableEmployeeEnum.lastName)}
            >
              {columnsSetting[TableEmployeeEnum.lastName].headerName}
              {TableEmployeeEnum.lastName === sortBy ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          ) : (
            columnsSetting[TableEmployeeEnum.lastName].headerName
          )}
        </TableCell>
        <TableCell
          sx={columnsSetting[TableEmployeeEnum.email].sx}
          sortDirection={sortBy === TableEmployeeEnum.email ? order : false}
        >
          {sortFields.includes(TableEmployeeEnum.email) ? (
            <TableSortLabel
              active={sortBy === TableEmployeeEnum.email}
              direction={sortBy === TableEmployeeEnum.email ? order : OrderEnum.asc}
              onClick={handlerOnClick(TableEmployeeEnum.email)}
            >
              {columnsSetting[TableEmployeeEnum.email].headerName}
              {TableEmployeeEnum.email === sortBy ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          ) : (
            columnsSetting[TableEmployeeEnum.email].headerName
          )}
        </TableCell>
        <TableCell
          sx={columnsSetting[TableEmployeeEnum.department].sx}
          sortDirection={sortBy === TableEmployeeEnum.department ? order : false}
        >
          {sortFields.includes(TableEmployeeEnum.department) ? (
            <TableSortLabel
              active={sortBy === TableEmployeeEnum.department}
              direction={sortBy === TableEmployeeEnum.department ? order : OrderEnum.asc}
              onClick={handlerOnClick(TableEmployeeEnum.department)}
            >
              {columnsSetting[TableEmployeeEnum.department].headerName}
              {TableEmployeeEnum.department === sortBy ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          ) : (
            columnsSetting[TableEmployeeEnum.department].headerName
          )}
        </TableCell>
        <TableCell
          sx={columnsSetting[TableEmployeeEnum.position].sx}
          sortDirection={sortBy === TableEmployeeEnum.position ? order : false}
        >
          {sortFields.includes(TableEmployeeEnum.position) ? (
            <TableSortLabel
              active={sortBy === TableEmployeeEnum.position}
              direction={sortBy === TableEmployeeEnum.position ? order : OrderEnum.asc}
              onClick={handlerOnClick(TableEmployeeEnum.position)}
            >
              {columnsSetting[TableEmployeeEnum.position].headerName}
              {TableEmployeeEnum.position === sortBy ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          ) : (
            columnsSetting[TableEmployeeEnum.position].headerName
          )}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
