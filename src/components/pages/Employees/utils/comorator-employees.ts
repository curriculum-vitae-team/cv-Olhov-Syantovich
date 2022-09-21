import { IUser } from '@interfaces/IUser';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { IProfile } from '@interfaces/IProfile';

export function getComparatorEmployee(order: string, orderBy: string): (a: IUser, b: IUser) => number {
  return order === 'desc'
    ? (a, b) => {
        if (orderBy === TableEmployeeEnum.firstName || orderBy === TableEmployeeEnum.lastName) {
          return descendingComparator(a.profile, b.profile, orderBy);
        } else {
          return descendingComparator(a, b, orderBy);
        }
      }
    : (a, b) => {
        if (orderBy === TableEmployeeEnum.firstName || orderBy === TableEmployeeEnum.lastName) {
          return -descendingComparator(a.profile, b.profile, orderBy);
        } else {
          return -descendingComparator(a, b, orderBy);
        }
      };
}
export function descendingComparator(a: IUser | IProfile, b: IUser | IProfile, orderBy: string) {
  if (orderBy === undefined) {
    return 1;
  }
  if (!b[orderBy as keyof typeof b]) {
    return 1;
  }
  if (!a[orderBy as keyof typeof a]) {
    return -1;
  }
  if (b[orderBy as keyof typeof b] < a[orderBy as keyof typeof a]) {
    return -1;
  }
  if (b[orderBy as keyof typeof b] > a[orderBy as keyof typeof a]) {
    return 1;
  }
  return 0;
}
