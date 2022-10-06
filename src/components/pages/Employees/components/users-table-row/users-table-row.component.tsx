import { memo, MouseEvent, useState } from 'react';
import { Avatar, IconButton, TableCell, TableRow } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { TableRowProps } from '@templates/table';
import { IUser } from '@interfaces/IUser';
import { SettingsUser } from '@molecules/settings-user/settings-user';

const UsersTableRow = ({ item }: TableRowProps<IUser>) => {
  const { profile, email, department_name, position_name, id } = item;
  const { first_name, last_name, avatar } = profile;
  const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(null);
  const toggleAnchorElSettings = (event: MouseEvent<HTMLElement>) => {
    setAnchorElSettings((prevState) => (prevState ? null : event.currentTarget));
  };
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
        <IconButton onClick={toggleAnchorElSettings}>
          <MoreVert />
        </IconButton>
      </TableCell>
      <SettingsUser
        anchorElSettings={anchorElSettings}
        toggleAnchorElSettings={toggleAnchorElSettings}
        id={id}
      />
    </TableRow>
  );
};

export default memo(UsersTableRow);
