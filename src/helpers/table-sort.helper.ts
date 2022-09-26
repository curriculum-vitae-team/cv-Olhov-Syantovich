import { get, Path } from 'react-hook-form';
import { SortOrder } from '@constants/sort-order.constant';
import { Item } from '@templates/table/table.types';

export const handleSort =
  <T extends Item>(sortKey: Path<T>, order: SortOrder) =>
  (a: T, b: T) => {
    const fieldA = get(a, sortKey);
    const fieldB = get(b, sortKey);
    if (!fieldA) {
      return 1;
    }
    if (!fieldB) {
      return -1;
    }
    if (order === SortOrder.Desc) {
      return fieldA < fieldB ? 1 : -1;
    }
    return fieldA > fieldB ? 1 : -1;
  };

export const handleOrder = (prevState: SortOrder) =>
  prevState === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc;
