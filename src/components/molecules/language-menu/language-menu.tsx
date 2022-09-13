import React, { FC } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { ILanguageMenuProps } from '@molecules/language-menu/language-menu.types';
import { languages } from '@molecules/language-menu/language-menu.mock';
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
      {languages.map(({ name }) => (
        <MenuItem key={name} onClick={toggleAnchorElLanguage}>
          <Typography textAlign="center">{name}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
