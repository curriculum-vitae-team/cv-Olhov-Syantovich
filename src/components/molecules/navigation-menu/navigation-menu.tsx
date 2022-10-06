import { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { navigationMenuList } from '@molecules/navigation-menu/navigation-menu.types';
import { boxSX } from '@molecules/navigation-menu/navigation-menu.styles';
import { useNavigate } from 'react-router-dom';

export const NavigationMenu: FC = () => {
  const navigate = useNavigate();
  const handleClick = (to: string) => () => {
    navigate(to);
  };
  return (
    <Box sx={boxSX} role="presentation">
      <List>
        {navigationMenuList.map(({ IconComponent, name, navigateTo }) => (
          <ListItem key={name} disablePadding onClick={handleClick(navigateTo)}>
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
