import { Path, get } from 'react-hook-form';
import { Item } from '@templates/table/table.types';

export const handleSearch =
  <T extends Item>(searchKeys: Path<T>[], value: string) =>
  (item: T) =>
    searchKeys.some((key) => {
      const field = get(item, key);
      if (!field) {
        return false;
      }
      return field.toLowerCase().includes(value.toLowerCase());
    });
