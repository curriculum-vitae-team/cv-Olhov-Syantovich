import { PathEnum } from '@templates/router/router.types';
import { userStore } from '@store/UserStore';

export const roleGuard = (role: string) => {
  return function () {
    // if (userStore.user$?.role !== role) {
    //   return PathEnum.notFound;
    // }
    return '';
  };
};
