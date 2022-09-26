import { PathEnum } from '@templates/router/router.types';
import { userStore } from '@store/UserStore';

export const authGuard = () => {
  if (!userStore.token$) {
    return PathEnum.signIn;
  }
  return '';
};
