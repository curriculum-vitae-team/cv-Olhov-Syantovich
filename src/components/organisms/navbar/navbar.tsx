import { useState, MouseEvent } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Drawer,
  MenuItem,
  Typography
} from '@mui/material';
import { Menu, Translate } from '@mui/icons-material';
import { NavigationMenu } from '@molecules/navigation-menu';
import { SettingsMenu } from '@molecules/settings-menu';
import { LanguageMenu } from '@molecules/language-menu';
import {
  boxToolbarSX,
  boxWrapSX,
  getAnchor,
  menuItemSX,
  typographySX
} from '@organisms/navbar/navbar.styles';
import { userStore } from '@store/UserStore';
import { observer } from 'mobx-react-lite';

export const Navbar = observer(() => {
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
              <Menu />
            </IconButton>
          </Box>

          <MenuItem sx={menuItemSX} onClick={toggleAnchorElSettings}>
            <Avatar src={userStore.user$?.profile.avatar} />
            <Typography sx={typographySX}>
              {userStore.user$?.profile?.full_name
                ? userStore.user$?.profile?.full_name
                : userStore.user$?.email}
            </Typography>
          </MenuItem>

          <IconButton size="large" edge="start" color="inherit" onClick={toggleAnchorElLanguage}>
            <Translate />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SettingsMenu
        anchorElSettings={anchorElSettings}
        toggleAnchorElSettings={toggleAnchorElSettings}
      />
      <LanguageMenu
        anchorElLanguage={anchorElLanguage}
        toggleAnchorElLanguage={toggleAnchorElLanguage}
      />

      <Drawer anchor={getAnchor()} open={drawerOpen} onClick={toggleDrawer}>
        <NavigationMenu />
      </Drawer>
    </Box>
  );
});
