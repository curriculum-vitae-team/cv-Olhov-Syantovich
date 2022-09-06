import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { PathEnum } from '../pathsEnum/pathEnum';

const authGuard = () => {
  const { token } = useContext(TokenContext);
  if (!token) {
    return PathEnum.signIn;
  }
  return '';
};

export default authGuard;
