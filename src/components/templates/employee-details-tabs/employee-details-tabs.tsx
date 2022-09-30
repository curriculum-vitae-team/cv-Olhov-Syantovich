import { Suspense, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { Tabs, Tab, Divider } from '@mui/material';
import { PathEnum } from '@templates/router/router.types';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from '@atoms/loader';
import { WrapPageInfo } from '@atoms/wrap-page-info';
import { useQuery } from '@apollo/client';
import { ICv } from '@interfaces/ICv';
import { GET_CVS } from '@api/cv/queries';
import { getPathToCvs } from '@utils/getPathToCv';
import { EmployeeDetailsContext } from '@templates/employee-details-tabs/employee-details.context';
import { getNameById } from '@utils/getNameById';

export const EmployeeDetailsTabs = () => {
  const { data, loading } = useQuery<{ cvs: ICv[] }>(GET_CVS);

  const { id, cvId } = useParams();
  const { pathname } = useLocation();
  const [value, setValue] = useState<string>(pathname.includes('cvs') ? 'CV' : 'Info');

  const handleChange = (event: SyntheticEvent, newValue: string) => setValue(newValue);

  const userCvs = useMemo(() => data?.cvs.filter((cv) => cv.user?.id === id) || [], [data, id]);

  const [cvTab, setCvTab] = useState<string | number>(
    cvId ? getNameById(cvId, userCvs) : userCvs.length
  );

  useEffect(() => {
    if (!userCvs.find((cv) => cv.id === cvId)) {
      setCvTab(userCvs.length);
    } else {
      setCvTab(cvId ? getNameById(cvId, userCvs) : 0);
    }
  }, [userCvs, cvId]);

  const context = useMemo(() => ({ userCvs, cvTab, setCvTab }), [cvTab, userCvs]);

  if (loading) {
    return <Loader />;
  }

  return (
    <WrapPageInfo>
      <EmployeeDetailsContext.Provider value={context}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            value="Info"
            label={'Info'}
            component={Link}
            to={PathEnum.employeeInfo.replace(':id', id || '')}
          />
          <Tab value="CV" label={'CV'} component={Link} to={getPathToCvs(userCvs, id as string)} />
        </Tabs>
        <Divider />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </EmployeeDetailsContext.Provider>
    </WrapPageInfo>
  );
};
