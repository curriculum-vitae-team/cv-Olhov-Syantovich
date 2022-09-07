import { useContext } from 'react';
import { PathEnum } from '@templates/router/router.types';
import { AppContext } from '@templates/app/app.context';

export const authGuard = () => {
  const { token } = useContext(AppContext);
  if (!token) {
    return PathEnum.signIn;
  }
  return '';
};
