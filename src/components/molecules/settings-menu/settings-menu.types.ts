import { FC, MouseEvent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export interface ISettingsMenuProps {
  anchorElSettings: null | HTMLElement;
  toggleAnchorElSettings: (event: MouseEvent<HTMLElement>) => void;
}

interface ISettingsMenuItem {
  IconComponent: FC;
  setting: string;
}

export const settingsMenuList: ISettingsMenuItem[] = [
  { IconComponent: PersonIcon, setting: 'Profile' },
  { IconComponent: LogoutIcon, setting: 'Logout' }
];
