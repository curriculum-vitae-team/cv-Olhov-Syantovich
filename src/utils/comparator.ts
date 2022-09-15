import { OrderEnum, TableRowType } from '@pages/Employees/components/Table/Table.type';

export function getComparator(
  order: OrderEnum,
  orderBy: keyof TableRowType
): (a: TableRowType, b: TableRowType) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
export function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] === null) {
    return 1;
  }
  if (a[orderBy] === null) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
