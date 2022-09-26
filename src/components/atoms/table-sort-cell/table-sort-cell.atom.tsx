import { FC, memo } from 'react';
import { TableCell, TableSortLabel } from '@mui/material';
import { TableSortCellProps } from './table-sort-cell.types';

const TableSortCell: FC<TableSortCellProps> = ({ active, direction, children, onClick }) => {
  return (
    <TableCell sortDirection={direction}>
      <TableSortLabel active={active} direction={direction} onClick={onClick}>
        {children}
      </TableSortLabel>
    </TableCell>
  );
};

export default memo(TableSortCell);
