import { PathEnum } from '@templates/router/router.types';
import user from '@store/user';

export const roleGuard = (role: string) => {
  return function () {
    if (user.user?.role !== role) {
      return PathEnum.notFound;
    }
    return '';
  };
};
