import React, { FC } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import { menuSX, origin } from '@molecules/settings-menu/settings-menu.styles';
import { ISettingsMenuProps, settingsMenuList } from '@molecules/settings-menu/settings-menu.types';

export const SettingsMenu: FC<ISettingsMenuProps> = ({ anchorElSettings, toggleAnchorElSettings }) => {
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
      {settingsMenuList.map(({ IconComponent, setting }) => (
        <ListItem key={setting} disablePadding>
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
