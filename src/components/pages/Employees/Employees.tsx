import { memo } from 'react';
import { Container } from '@mui/material';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { PageHeader } from '@molecules/page-header';
import { createTable } from '@templates/table';
import { IUser } from '@interfaces/IUser';
import { UsersTableHead } from './components/users-table-head';
import { UsersTableRow } from './components/users-table-row';

const Table = createTable<IUser>();

const Employees = () => {
  const { data, loading } = useGetEmployees();

  return (
    <Container maxWidth="xl">
      <PageHeader header="Employee" description="Employee list" />
      <Table
        items={data.users}
        loading={loading}
        searchKeys={['profile.full_name', 'email', 'department_name', 'position_name']}
        sortByKey="department_name"
        TableHeadComponent={UsersTableHead}
        TableRowComponent={UsersTableRow}
      />
    </Container>
  );
};

export default memo(Employees);
