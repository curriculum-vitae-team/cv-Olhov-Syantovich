import React, { FC } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { ILanguageMenuProps, languages } from '@molecules/language-menu/language-menu.types';
import { menuSX, origin } from '@molecules/language-menu/language-menu.styles';

export const LanguageMenu: FC<ILanguageMenuProps> = ({ anchorElLanguage, toggleAnchorElLanguage }) => {
  return (
    <Menu
      sx={menuSX}
      anchorEl={anchorElLanguage}
      anchorOrigin={origin}
      keepMounted
      transformOrigin={origin}
      open={!!anchorElLanguage}
      onClose={toggleAnchorElLanguage}
    >
      {languages.map((lang) => (
        <MenuItem key={lang} onClick={toggleAnchorElLanguage}>
          <Typography textAlign="center">{lang}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
