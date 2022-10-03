import React, { Dispatch, FC, SetStateAction } from 'react';
import { Path } from 'react-hook-form';
import { SortOrder } from '@constants/sort-order.constant';
import { TableHead } from '@mui/material';
import { strict } from 'assert';
import { stringify } from 'querystring';

export type Item = {
  id: string;
};

export type TableRowProps<T> = {
  item: T;
};
export type TableHeadProps<T> = {
  search: string;
  sortBy: Path<T>;
  order: SortOrder;
  handleSort: (sortKey: Path<T>) => () => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TableProps<T> = {
  items: T[];
  loading: boolean;
  searchKeys: Path<T>[];
  sortByKey: Path<T>;
  TableHeadComponent: FC<TableHeadProps<T>>;
  TableRowComponent: FC<TableRowProps<T>>;
};

export type TableContextValues<T> = {
  search: string;
  sortBy: Path<T>;
  order: SortOrder;
  setSearch?: Dispatch<SetStateAction<string>>;
  setSortBy?: Dispatch<SetStateAction<Path<T>>>;
  toggleOrder?: () => void;
};
