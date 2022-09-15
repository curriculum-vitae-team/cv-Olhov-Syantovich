import { useQuery } from '@apollo/client';
import { GET_USERS } from '@api/users/queries';
import { IUser } from '@interfaces/IUser';

export const useGetEmployees = () => {
  const { data, loading } = useQuery<{ users: IUser[] }>(GET_USERS);
  return { data, loading };
};
