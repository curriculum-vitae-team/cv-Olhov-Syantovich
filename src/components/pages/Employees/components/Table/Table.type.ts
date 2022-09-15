export type TableEmployeesTypeColumns = { field: string; headerName: string; width?: number };
export type TableRowType = {
  [key: string]: undefined | string;
  id?: string;
  email?: string;
  department_name?: string;
  position_name?: string;
};
export type TableEmployeeTypeProps = {
  columns: TableEmployeesTypeColumns[];
  rows: TableRowType[];
  textAlign?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};
export enum OrderEnum {
  asc = 'asc',
  desc = 'desc'
}
