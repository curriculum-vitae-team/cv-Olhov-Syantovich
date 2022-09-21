import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BoxOfDescription, BoxOfTable, NameOfTable, TitleOfPageSX } from '@pages/Employees/Employees.style';
import Table from '@pages/Employees/components/Table/Table';
import { EmployeeHeaderTable } from '@pages/Employees/components/EmployeeHeaderTable/EmployeeHeaderTable';
import { EmployeeRowTable } from '@pages/Employees/components/EmployeeRowTable/EmployeeRowTable';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { searchEmployee } from '@pages/Employees/utils/search-employee';
import { getComparatorEmployee } from '@pages/Employees/utils/comorator-employees';
import { Loader } from '@atoms/loader/loader';

const Employees = () => {
  const { data, loading } = useGetEmployees();
  return (
    <>
      <Grid container sx={BoxOfDescription} flexDirection="column" justifyContent="space-between">
        <Grid item>
          <Typography sx={TitleOfPageSX}>Employee</Typography>
        </Grid>
        <Grid item>
          <Typography sx={NameOfTable}>Employee list</Typography>
        </Grid>
      </Grid>
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
