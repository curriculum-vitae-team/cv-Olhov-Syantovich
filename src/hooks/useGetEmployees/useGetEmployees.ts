import { useQuery } from '@apollo/client';
import { GET_USERS } from '@api/user/queries';
import { IUser } from '@interfaces/IUser';

export const useGetEmployees = () => {
  const { data, loading, error } = useQuery<{ users: IUser[] }>(GET_USERS);

  return { data: data || { users: [] }, loading, error };
};
