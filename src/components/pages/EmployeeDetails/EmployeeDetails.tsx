import React, { FC, useState } from 'react';
import { PageWithNavbar } from '@templates/page-with-navbar';
import { PageHeader } from '@molecules/page-header';
import { WrapPageInfo } from '@atoms/wrap-page-info';
import { EmployeeTabs } from '@molecules/employee-tabs';
import { Divider } from '@mui/material';
import { PublicInfoView } from '@pages/EmployeeDetails/components/PublicInfoView';

export const EmployeeDetails: FC = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const togglePublic = () => setIsPublic(!isPublic);

  return (
    <PageWithNavbar>
      <PageHeader header={'Employees'} description={`Employee's details`} />

      <WrapPageInfo>
        <EmployeeTabs />
        <Divider />
        <PublicInfoView togglePublic={togglePublic} />
      </WrapPageInfo>
    </PageWithNavbar>
  );
};
