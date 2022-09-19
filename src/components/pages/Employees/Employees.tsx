import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { BoxOfDescription, BoxOfTable, NameOfTable, TitleOfPageSX } from '@pages/Employees/Employees.style';
import Table from '@pages/Employees/components/Table/Table';
import { EmployeeHeaderTable } from '@pages/Employees/components/EmployeeHeaderTable/EmployeeHeaderTable';
import { EmployeeRowTable } from '@pages/Employees/components/EmployeeRowTable/EmployeeRowTable';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';

const Employees = () => {
  const { data } = useGetEmployees();
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
        <Table
          TableRow={EmployeeRowTable}
          TableHeader={EmployeeHeaderTable}
          data={data.users}
          searchFields={[TableEmployeeEnum.firstName, TableEmployeeEnum.lastName]}
          sortFields={[TableEmployeeEnum.email, TableEmployeeEnum.firstName, TableEmployeeEnum.lastName]}
        />
      </Box>
    </>
  );
};

export default Employees;
