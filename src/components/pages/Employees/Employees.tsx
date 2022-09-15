import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { BoxOfDescription, BoxOfTable, NameOfTable, TitleOfPageSX } from '@pages/Employees/Employees.style';
import TableEmployees from '@pages/Employees/components/Table/Table';
import { EmployeeHeaderTable } from '@pages/Employees/components/EmployeeHeaderTable/EmployeeHeaderTable';
import { EmployeeBodyTable } from '@pages/Employees/components/EmployeeBodyTable/EmployeeBodyTable';

const Employees = () => {
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
        <TableEmployees TableBody={EmployeeBodyTable} TableHeader={EmployeeHeaderTable} />
      </Box>
    </>
  );
};

export default Employees;
