import { FC, useEffect } from 'react';
import { Typography } from '@mui/material';
import { PageHeaderStore } from '@store/PageHeaderStore/PageHeaderStore';

const EmployeeCv: FC = () => {
  useEffect(() => {
    PageHeaderStore.setPageInfo({ header: 'Employee', description: "Employee's CV" });
  }, []);

  return (
    <>
      <Typography variant={'h3'}>Employee CV</Typography>
    </>
  );
};

export default EmployeeCv;
