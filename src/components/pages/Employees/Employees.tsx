import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { BoxOfDescription, BoxOfTable, NameOfTable, TitleOfPageSX } from '@pages/Employees/Employees.style';
import { TableEmployees } from '@pages/Employees/components/Table/Table';
import { TableEmployeeEnum } from '@pages/Employees/Employees.enum';
import { useGetEmployees } from '@hooks/useGetEmployees/useGetEmployees';
import { Loader } from '@atoms/loader/loader';

const Employees = () => {
  const { data, loading } = useGetEmployees();
  console.log(data, loading);
  const columnsSetting = [
    { field: TableEmployeeEnum.firstName, headerName: 'First Name' },
    { field: TableEmployeeEnum.lastName, headerName: 'Last Name' },
    { field: TableEmployeeEnum.email, headerName: 'Email' },
    { field: TableEmployeeEnum.department, headerName: 'Department' },
    { field: TableEmployeeEnum.position, headerName: 'Position' }
  ];
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
          <TableEmployees
            columns={columnsSetting}
            rows={
              data
                ? data?.users.map((e) => ({
                    last_name: e.profile.last_name,
                    first_name: e.profile.first_name,
                    email: e.email,
                    id: e.id,
                    department_name: e.department_name,
                    position_name: e.position_name
                  }))
                : []
            }
          />
        )}
      </Box>
    </>
  );
};

export default Employees;
