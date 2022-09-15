import React, { Suspense, SyntheticEvent, useState } from 'react';
import { Tabs, Tab, Divider } from '@mui/material';
import { PathEnum } from '@templates/router/router.types';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Loader } from '@atoms/loader/loader';
import { WrapPageInfo } from '@atoms/wrap-page-info';
import { PageWithNavbar } from '@templates/page-with-navbar';

export const EmployeeDetailsTabs = () => {
  const [value, setValue] = useState<string>('Info');

  const { id } = useParams();

  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  return (
    <PageWithNavbar>
      <WrapPageInfo>
        <Tabs value={value} onChange={handleChange}>
          <Tab value="Info" label={'Info'} component={Link} to={PathEnum.employeeInfo.replace(':id', id || '')} />
          <Tab value="CV" label={'CV'} component={Link} to={PathEnum.employeeCv.replace(':id', id || '')} />
        </Tabs>
        <Divider />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapPageInfo>
    </PageWithNavbar>
  );
};
