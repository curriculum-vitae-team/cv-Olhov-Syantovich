import { FC } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import { menuSX, origin } from '@molecules/settings-menu/settings-menu.styles';
import { ISettingsMenuProps, settingsMenuList } from '@molecules/settings-menu/settings-menu.types';
import { useNavigate } from 'react-router-dom';

export const SettingsMenu: FC<ISettingsMenuProps> = ({
  anchorElSettings,
  toggleAnchorElSettings
}) => {
  const navigate = useNavigate();
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
      {settingsMenuList.map(({ IconComponent, setting, handlerOnClick }) => (
        <ListItem key={setting} disablePadding onClick={handlerOnClick(navigate)}>
          <ListItemButton>
            <ListItemIcon>
              <IconComponent />
            </ListItemIcon>
            <ListItemText primary={setting} />
          </ListItemButton>
        </ListItem>
      ))}
    </Menu>
  );
};
