import React, { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import { navigationMenuList } from '@molecules/navigation-menu/navigation-menu.types';
import { boxSX } from '@molecules/navigation-menu/navigation-menu.styles';

export const NavigationMenu: FC = () => {
  return (
    <Box sx={boxSX} role="presentation">
      <List>
        {navigationMenuList.map(({ IconComponent, name }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IconComponent />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavigationMenu;
