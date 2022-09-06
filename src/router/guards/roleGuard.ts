import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { PathEnum } from '../pathsEnum/pathEnum';

const RoleGuard = (role: string) => {
  const { user } = useContext(TokenContext);
  return function () {
    if (user?.role !== role) {
      return PathEnum.notFound;
    }
    return '';
  };
};
export default RoleGuard;
