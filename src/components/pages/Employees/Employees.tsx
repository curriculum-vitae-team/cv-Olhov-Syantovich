import { memo, useEffect } from 'react';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { createTable } from '@templates/table';
import { IUser } from '@interfaces/IUser';
import { UsersTableHead } from './components/users-table-head';
import { UsersTableRow } from './components/users-table-row';
import { PageHeaderStore } from '@store/PageHeaderStore/PageHeaderStore';

const Table = createTable<IUser>();

const Employees = () => {
  const { data, loading } = useGetEmployees();
  useEffect(() => {
    PageHeaderStore.setPageInfo({ header: 'Employee', description: 'Employee list' });
  }, []);

  return (
    <Table
      items={data.users}
      loading={loading}
      searchKeys={['profile.full_name', 'email', 'department_name', 'position_name']}
      sortByKey="department_name"
      TableHeadComponent={UsersTableHead}
      TableRowComponent={UsersTableRow}
    />
  );
};

export default memo(Employees);
