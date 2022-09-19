import { PathEnum } from '@templates/router/router.types';
import user from '@store/user';

export const authGuard = () => {
  if (!user.token) {
    return PathEnum.signIn;
  }
  return '';
};
