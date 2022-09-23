import { memo } from 'react';
import { Avatar, IconButton, TableCell, TableRow } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { TableRowProps } from '@templates/table';
import { IUser } from '@interfaces/IUser';

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  const { profile, email, department_name, position_name } = item;
  const { first_name, last_name, avatar } = profile;

  return (
    <TableRow>
      <TableCell>
        <Avatar src={avatar}>
          {first_name?.[0].toUpperCase()}
          {last_name?.[0].toUpperCase()}
        </Avatar>
      </TableCell>
      <TableCell>{first_name}</TableCell>
      <TableCell>{last_name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{department_name}</TableCell>
      <TableCell>{position_name}</TableCell>
      <TableCell>
        <IconButton>
          <MoreVert />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default memo(UsersTableRow);
