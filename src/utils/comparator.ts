import { OrderEnum } from '@pages/Employees/components/Table/Table.type';
import { ProcessedUsersType } from '@hooks/useGetEmployees/useGetEmployees.type';

export function getComparator(
  order: OrderEnum,
  orderBy: keyof ProcessedUsersType
): (a: ProcessedUsersType, b: ProcessedUsersType) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
export function descendingComparator(a: ProcessedUsersType, b: ProcessedUsersType, orderBy: keyof ProcessedUsersType) {
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
