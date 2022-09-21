import React from 'react';
import { Box } from '@mui/material';
import { BoxOfTable } from '@pages/Employees/Employees.style';
import Table from '@pages/Employees/components/Table/Table';
import { EmployeeHeaderTable } from '@pages/Employees/components/EmployeeHeaderTable/EmployeeHeaderTable';
import { EmployeeRowTable } from '@pages/Employees/components/EmployeeRowTable/EmployeeRowTable';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { searchEmployee } from '@pages/Employees/utils/search-employee';
import { getComparatorEmployee } from '@pages/Employees/utils/comorator-employees';
import { Loader } from '@atoms/loader/loader';
import { PageHeader } from '@molecules/page-header';

const Employees = () => {
  const { data, loading } = useGetEmployees();
  return (
    <>
      <PageHeader header={'Employee'} description={'Employee list'} />
      <Box sx={BoxOfTable}>
        {loading ? (
          <Loader />
        ) : (
          <Table
            TableRow={EmployeeRowTable}
            TableHeader={EmployeeHeaderTable}
            data={data.users.map((user) => ({ ...user }))}
            searchFields={[TableEmployeeEnum.firstName, TableEmployeeEnum.lastName]}
            sortFields={[TableEmployeeEnum.email, TableEmployeeEnum.firstName, TableEmployeeEnum.lastName]}
            searchFunction={searchEmployee}
            compareFunction={getComparatorEmployee}
          />
        )}
      </Box>
    </>
  );
};

export default Employees;
