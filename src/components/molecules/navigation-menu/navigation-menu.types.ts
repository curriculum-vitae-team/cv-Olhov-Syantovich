import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { FC } from 'react';

interface INavigationMenuItem {
  IconComponent: FC;
  name: string;
}

export const navigationMenuList: INavigationMenuItem[] = [
  { IconComponent: DashboardIcon, name: 'Dashboard' },
  { IconComponent: GroupsIcon, name: 'Employees' },
  { IconComponent: ListAltIcon, name: 'Projects' }
];
