import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import { Avatar, Drawer, MenuItem, Typography } from '@mui/material';
import { NavigationMenu } from '@molecules/navigation-menu';
import { SettingsMenu } from '@molecules/settings-menu';
import { LanguageMenu } from '@molecules/language-menu';
import { boxToolbarSX, boxWrapSX, getAnchor, menuItemSX, typographySX } from '@organisms/navbar/navbar.styles';
import user from '@store/user';

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorElSettings, setAnchorElSettings] = useState<null | HTMLElement>(null);
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const toggleAnchorElSettings = (event: MouseEvent<HTMLElement>) => {
    setAnchorElSettings((prevState) => (prevState ? null : event.currentTarget));
  };

  const toggleAnchorElLanguage = (event: MouseEvent<HTMLElement>) => {
    setAnchorElLanguage((prevState) => (prevState ? null : event.currentTarget));
  };

  return (
    <Box sx={boxWrapSX} position="sticky">
      <AppBar>
        <Toolbar>
          <Box sx={boxToolbarSX}>
            <IconButton size="large" edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          <MenuItem sx={menuItemSX} onClick={toggleAnchorElSettings}>
            <Avatar src="https://as2.ftcdn.net/v2/jpg/01/42/39/07/1000_F_142390782_d2lz4ZJFf5zlgdzPZyL3AmOY6OoHwlaP.jpg" />
            <Typography sx={typographySX}>
              {user.user?.profile?.full_name ? user.user?.profile?.full_name : user.user?.email}
            </Typography>
          </MenuItem>

          <IconButton size="large" edge="start" color="inherit" onClick={toggleAnchorElLanguage}>
            <TranslateIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SettingsMenu anchorElSettings={anchorElSettings} toggleAnchorElSettings={toggleAnchorElSettings} />
      <LanguageMenu anchorElLanguage={anchorElLanguage} toggleAnchorElLanguage={toggleAnchorElLanguage} />

      <Drawer anchor={getAnchor()} open={drawerOpen} onClick={toggleDrawer}>
        <NavigationMenu />
      </Drawer>
    </Box>
  );
};
