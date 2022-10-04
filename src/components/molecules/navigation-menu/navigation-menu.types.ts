import { Dashboard, Groups, ListAlt } from '@mui/icons-material';
import { FC } from 'react';

interface INavigationMenuItem {
  IconComponent: FC;
  name: string;
}

export const navigationMenuList: INavigationMenuItem[] = [
  { IconComponent: Dashboard, name: 'Dashboard' },
  { IconComponent: Groups, name: 'Employees' },
  { IconComponent: ListAlt, name: 'Projects' }
];
