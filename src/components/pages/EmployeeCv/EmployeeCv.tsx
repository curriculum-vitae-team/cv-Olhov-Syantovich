import { FC } from 'react';
import { Typography } from '@mui/material';
import { PageHeader } from '@molecules/page-header';

const EmployeeCv: FC = () => {
  return (
    <>
      <PageHeader header={'Employee'} description={"Employee's CV"} />
      <Typography variant={'h3'}>Employee CV</Typography>
    </>
  );
};

export default EmployeeCv;
