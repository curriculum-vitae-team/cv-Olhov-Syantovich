import { useQuery } from '@apollo/client';
import { GET_USERS } from '@api/users/queries';
import { IUser } from '@interfaces/IUser';
import { ProcessedUsersType } from '@hooks/useGetEmployees/useGetEmployees.type';

export const useGetEmployees = () => {
  const { data, loading, error } = useQuery<{ users: IUser[] }>(GET_USERS);
  if (data) {
    const newData: ProcessedUsersType[] = data?.users.map((e) => ({
      last_name: e.profile.last_name || '',
      first_name: e.profile.first_name || '',
      email: e.email,
      id: e.id,
      department_name: e.department_name || '',
      position_name: e.position_name || ''
    }));
    return { data: newData, loading, error };
  }

  return { data: [], loading, error };
};
