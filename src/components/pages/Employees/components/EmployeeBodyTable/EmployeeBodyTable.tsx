import React, { FC, useContext } from 'react';
import { getComparator } from '@utils/comparator';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { TableRowsSX } from '@pages/Employees/components/Table/Table.style';
import { Loader } from '@atoms/loader/loader';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { TableContext } from '@pages/Employees/components/Table/Table.context';
import { columnsSetting } from '../../../../../constants/table-employees.enum';

export const EmployeeBodyTable: FC<JSX.Element> = () => {
  const { data } = useGetEmployees();
  const { sortBy, order } = useContext(TableContext);
  return !data.length ? (
    <Loader />
  ) : (
    <TableBody>
      {data.sort(getComparator(order, sortBy)).map((row) => (
        <TableRow key={row.id}>
          {columnsSetting.map(({ field, sx }, index) => (
            <TableCell key={index} sx={{ ...sx, ...TableRowsSX }}>
              {field in row ? row[field] : false}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
