import { memo } from 'react';
import { TableCell, TableRow, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { TableSortCell } from '@atoms/table-sort-cell';
import { IUser } from '@interfaces/IUser';
import { useTableContext } from '@hooks/use-table-context.hook';

const UsersTableHead = () => {
  const { search, sortBy, order, handleSearch, handleSort } = useTableContext<IUser>();

  return (
    <>
      <TableRow sx={{ top: 205 }}>
        <TableCell
          colSpan={7}
          padding="checkbox"
          sx={{ background: '#212121', borderColor: '#212121' }}
        >
          <TextField
            size="small"
            label="Search Employees"
            InputProps={{ startAdornment: <Search /> }}
            value={search}
            onChange={handleSearch}
          />
        </TableCell>
      </TableRow>
      <TableRow sx={{ top: 266 }}>
        <TableCell />
        <TableSortCell
          active={sortBy === 'profile.first_name'}
          direction={order}
          onClick={handleSort('profile.first_name')}
        >
          First Name
        </TableSortCell>
        <TableSortCell
          active={sortBy === 'profile.last_name'}
          direction={order}
          onClick={handleSort('profile.last_name')}
        >
          Last Name
        </TableSortCell>
        <TableSortCell active={sortBy === 'email'} direction={order} onClick={handleSort('email')}>
          Email
        </TableSortCell>
        <TableSortCell
          active={sortBy === 'department_name'}
          direction={order}
          onClick={handleSort('department_name')}
        >
          Department
        </TableSortCell>
        <TableSortCell
          active={sortBy === 'position_name'}
          direction={order}
          onClick={handleSort('position_name')}
        >
          Position
        </TableSortCell>
        <TableCell />
      </TableRow>
    </>
  );
};

export default memo(UsersTableHead);
