import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { TableHeaderSX } from '@pages/Employees/components/Table/Table.style';
import { visuallyHidden } from '@mui/utils';
import React, { FC, useContext } from 'react';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { OrderEnum } from '@pages/Employees/components/Table/Table.type';
import { columnsSetting } from '../../../../../constants/table-employees.enum';

export const EmployeeHeaderTable: FC<JSX.Element> = () => {
  const { sortBy, setSortBy, order, setOrder } = useContext(TableContext);

  return (
    <TableHead>
      <TableRow>
        {columnsSetting.map((element) => (
          <TableCell key={element.field} sx={TableHeaderSX} sortDirection={sortBy === element.field ? order : false}>
            <TableSortLabel
              active={sortBy === element.field}
              direction={sortBy === element.field ? order : OrderEnum.asc}
              onClick={() => {
                const isAsc = sortBy === element.field && order === OrderEnum.asc;
                setOrder && setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc);
                setSortBy && setSortBy(element.field);
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
  );
};
