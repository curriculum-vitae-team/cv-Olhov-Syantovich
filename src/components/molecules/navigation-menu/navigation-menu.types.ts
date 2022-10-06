import { Dashboard, Groups, ListAlt } from '@mui/icons-material';
import { FC } from 'react';
import { PathEnum } from '@templates/router/router.types';

interface INavigationMenuItem {
  IconComponent: FC;
  name: string;
  navigateTo: string;
}

export const navigationMenuList: INavigationMenuItem[] = [
  { IconComponent: Dashboard, name: 'Dashboard', navigateTo: `/` },
  { IconComponent: Groups, name: 'Employees', navigateTo: `/${PathEnum.employees}` },
  { IconComponent: ListAlt, name: 'Projects', navigateTo: `/${PathEnum.projects}` }
];
