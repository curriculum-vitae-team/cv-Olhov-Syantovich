import { FC, MouseEvent } from 'react';
import { Person, Logout } from '@mui/icons-material';
import { NavigateFunction } from 'react-router-dom';
import { PathEnum } from '@templates/router/router.types';
import { userStore } from '@store/UserStore';

export interface ISettingsMenuProps {
  anchorElSettings: null | HTMLElement;
  toggleAnchorElSettings: (event: MouseEvent<HTMLElement>) => void;
}

interface ISettingsMenuItem {
  IconComponent: FC;
  setting: string;
  handlerOnClick: (navigate: NavigateFunction) => () => void;
}

export const settingsMenuList: ISettingsMenuItem[] = [
  {
    IconComponent: Person,
    setting: 'Profile',
    handlerOnClick: (navigate: NavigateFunction) => () => {
      navigate(
        `/${PathEnum.employeeInfo.replace(':id', userStore.user$ ? userStore.user$.id : '')}`
      );
    }
  },
  {
    IconComponent: Logout,
    setting: 'Logout',
    handlerOnClick: () => () => {
      userStore.setToken(undefined);
      userStore.setUser(undefined);
    }
  }
];
