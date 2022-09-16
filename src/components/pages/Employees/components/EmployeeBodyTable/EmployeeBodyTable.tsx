import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import { TableRowsSX } from '@pages/Employees/components/Table/Table.style';
import { columnsSetting } from '../../../../../constants/table-employees.enum';
import { TableRowType } from '@pages/Employees/components/Table/Table.type';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export const EmployeeRowTable = ({ email, department_name, position_name, lastName, firstName }: TableRowType) => {
  return (
    <TableRow>
      <TableCell sx={{ ...columnsSetting[TableEmployeeEnum.firstName].sx, ...TableRowsSX }}>{firstName}</TableCell>
      <TableCell sx={{ ...columnsSetting[TableEmployeeEnum.lastName].sx, ...TableRowsSX }}>{lastName}</TableCell>
      <TableCell sx={{ ...columnsSetting[TableEmployeeEnum.email].sx, ...TableRowsSX }}>{email}</TableCell>
      <TableCell sx={{ ...columnsSetting[TableEmployeeEnum.department].sx, ...TableRowsSX }}>
        {department_name}
      </TableCell>
      <TableCell sx={{ ...columnsSetting[TableEmployeeEnum.position].sx, ...TableRowsSX }}>{position_name}</TableCell>
    </TableRow>
  );
};
