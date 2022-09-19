import { findNestedObj } from '@utils/deepSearch';

export function getComparator<T extends object>(order: string, orderBy: string): (a: T, b: T) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(findNestedObj(a, orderBy), findNestedObj(b, orderBy), orderBy)
    : (a, b) => -descendingComparator(findNestedObj(a, orderBy), findNestedObj(b, orderBy), orderBy);
}
export function descendingComparator<T extends object>(a: T, b: T, orderBy: string) {
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
