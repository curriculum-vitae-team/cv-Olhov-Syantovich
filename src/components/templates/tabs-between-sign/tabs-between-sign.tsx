import React, { Suspense, useState } from 'react';
import { Tabs, Tab, AppBar } from '@mui/material';
import { PathEnum } from '@templates/router/router.types';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from '@atoms/loader/loader';

export const TabsBetweenSign = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={PathEnum.signIn} component={Link} to={PathEnum.signIn} />
          <Tab label={PathEnum.signUp} component={Link} to={PathEnum.signUp} />
        </Tabs>
      </AppBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
