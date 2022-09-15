import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

export type SortByType = {
  by: TableEmployeeEnum;
  ascending: boolean;
};
