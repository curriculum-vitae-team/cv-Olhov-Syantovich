import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { TableEmployeesTypeColumns } from '@pages/Employees/components/Table/Table.type';

export const columnsSetting: { [key: string]: TableEmployeesTypeColumns } = {};
columnsSetting[TableEmployeeEnum.firstName] = { headerName: 'First Name', sx: { width: 50 } };
columnsSetting[TableEmployeeEnum.lastName] = { headerName: 'Last Name', sx: { width: 50 } };
columnsSetting[TableEmployeeEnum.email] = { headerName: 'Email', sx: { width: 100 } };
columnsSetting[TableEmployeeEnum.department] = { headerName: 'Department', sx: { width: 100 } };
columnsSetting[TableEmployeeEnum.position] = { headerName: 'Position', sx: { width: 100 } };
