import { FC, MouseEvent } from 'react';
import { Person, Logout } from '@mui/icons-material';

export interface ISettingsMenuProps {
  anchorElSettings: null | HTMLElement;
  toggleAnchorElSettings: (event: MouseEvent<HTMLElement>) => void;
}

interface ISettingsMenuItem {
  IconComponent: FC;
  setting: string;
}

export const settingsMenuList: ISettingsMenuItem[] = [
  { IconComponent: Person, setting: 'Profile' },
  { IconComponent: Logout, setting: 'Logout' }
];
