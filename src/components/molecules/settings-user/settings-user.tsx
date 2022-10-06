import { FC, useCallback } from 'react';
import { Menu } from '@mui/material';
import { menuSX, origin } from '@molecules/settings-menu/settings-menu.styles';
import { useNavigate } from 'react-router-dom';
import { Delete, Person } from '@mui/icons-material';
import { settingsUserType } from '@molecules/settings-user/settings-user.type';
import { PathEnum } from '@templates/router/router.types';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '@api/user/mutations';
import { deleteUserCacheUpdate } from '@api/user/cache';
import { IDeleteResult } from '@interfaces/results/IDeleteResult';
import { IDeleteInput } from '@interfaces/inputs/IDeleteInput';
import { ItemMenu } from '@atoms/Item-menu/item-menu';

export const SettingsUser: FC<settingsUserType> = ({
  anchorElSettings,
  toggleAnchorElSettings,
  id
}) => {
  const [deleteUser] = useMutation<IDeleteResult, IDeleteInput>(DELETE_USER);
  const handleItemDelete = useCallback(() => {
    deleteUser({
      variables: { id },
      update: deleteUserCacheUpdate(id)
    });
  }, [deleteUser, id]);
  const navigate = useNavigate();
  const handleOnClickProfile = useCallback(() => {
    navigate(`/${PathEnum.employeeInfo.replace(':id', id)}`);
  }, [id, navigate]);
  return (
    <Menu
      sx={menuSX}
      anchorEl={anchorElSettings}
      anchorOrigin={origin}
      keepMounted
      transformOrigin={origin}
      open={!!anchorElSettings}
      onClose={toggleAnchorElSettings}
    >
      <ItemMenu Icon={Person} text={'Profile'} handlerOnClick={handleOnClickProfile} />
      <ItemMenu Icon={Delete} text={'Delete'} handlerOnClick={handleItemDelete} />
    </Menu>
  );
};
