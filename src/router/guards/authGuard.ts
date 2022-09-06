import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { PathEnum } from '../pathsEnum/pathEnum';

export const authGuard = () => {
  const { token } = useContext(TokenContext);
  if (!token) {
    return PathEnum.signIn;
  }
  return '';
};
