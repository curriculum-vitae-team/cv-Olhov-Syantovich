import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { TableEmployeesTypeColumns } from '@pages/Employees/components/Table/Table.type';

export const columnsSetting: TableEmployeesTypeColumns[] = [
  { field: TableEmployeeEnum.firstName, headerName: 'First Name', sx: { width: 50 } },
  { field: TableEmployeeEnum.lastName, headerName: 'Last Name', sx: { width: 100 } },
  { field: TableEmployeeEnum.email, headerName: 'Email', sx: { width: 100 } },
  { field: TableEmployeeEnum.department, headerName: 'Department', sx: { width: 100 } },
  { field: TableEmployeeEnum.position, headerName: 'Position', sx: { width: 100 } }
];
