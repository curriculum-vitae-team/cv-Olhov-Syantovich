import React from 'react';
import { TableCell, TableRow } from '@mui/material';

import { columnsSetting } from '../../../../../constants/table-employees.enum';
import { TableRowType } from '@pages/Employees/components/Table/Table.type';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export const EmployeeRowTable = ({ element }: TableRowType) => {
  return (
    <TableRow className={'row'}>
      <TableCell sx={columnsSetting[TableEmployeeEnum.firstName].sx}>{element.profile.first_name}</TableCell>
      <TableCell sx={columnsSetting[TableEmployeeEnum.lastName]}>{element.profile.last_name}</TableCell>
      <TableCell sx={columnsSetting[TableEmployeeEnum.email].sx}>{element.email}</TableCell>
      <TableCell sx={columnsSetting[TableEmployeeEnum.department]}>{element.department_name}</TableCell>
      <TableCell sx={columnsSetting[TableEmployeeEnum.position].sx}>{element.position_name}</TableCell>
    </TableRow>
  );
};
