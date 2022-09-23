import { useContext } from 'react';
import { PathEnum } from '@templates/router/router.types';
import { AppContext } from '@templates/app/app.context';

export const roleGuard = (role: string) => {
  // const { user } = useContext(AppContext);
  return function () {
    // if (user?.role !== role) {
    //   return PathEnum.notFound;
    // }
    return '';
  };
};
