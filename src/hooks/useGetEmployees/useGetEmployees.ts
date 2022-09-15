import { useQuery } from '@apollo/client';
import { GET_USERS } from '@api/users/queries';
import { IUser } from '@interfaces/IUser';
import { useEffect, useState } from 'react';
import { TableRowType } from '@pages/Employees/components/Table/Table.type';

export const useGetEmployees = () => {
  const { data, loading, error } = useQuery<{ users: IUser[] }>(GET_USERS);
  const [processedData, setProcessedData] = useState<TableRowType[]>([]);
  useEffect(() => {
    if (data) {
      const newData = data?.users.map((e) => ({
        last_name: e.profile.last_name,
        first_name: e.profile.first_name,
        email: e.email,
        id: e.id,
        department_name: e.department_name,
        position_name: e.position_name
      }));
      setProcessedData(newData);
    }
  }, [data]);

  return { data: processedData, loading, error };
};
