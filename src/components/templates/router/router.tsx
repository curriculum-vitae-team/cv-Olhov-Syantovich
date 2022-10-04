import { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { userStore } from '@store/UserStore';
import { observer } from 'mobx-react-lite';

import { authGuard } from '@templates/router/guards/authGuard';
import { roleGuard } from '@templates/router/guards/roleGuard';
import { RolesEnum } from '@constants/user-roles.enum';
import { PathEnum } from '@templates/router/router.types';
import { ProtectedRoute } from '@templates/router/protected-route';
import { SignInPage } from '@pages/SignIn';
import { SignUpPage } from '@pages/SignUp';
import { Loader } from '@atoms/loader';
import { Employees } from '@pages/Employees';
import { PageWithNavbar } from '@templates/page-with-navbar';
import { TabsBetweenSign } from '@templates/tabs-between-sign/tabs-between-sign';
import { EmployeeDetailsTabs } from '@templates/employee-details-tabs/employee-details-tabs';
import { EmployeeCv } from '@pages/EmployeeCv';
import { EmployeeInfo } from '@pages/EmployeeInfo';
import { CustomizedToast } from '@templates/Toasts/toasts';
import { FullScreenDialog } from '@templates/FullScreenDialog';
import { CvDetails } from '@pages/CvDetails';
import { PageHeader } from '@molecules/page-header';

export const AppRouter = observer(() => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomizedToast />}>
            <Route element={<FullScreenDialog />}>
              <Route element={<PageWithNavbar />}>
                <Route element={<PageHeader />}>
                  <Route
                    path={PathEnum.employees}
                    element={<ProtectedRoute guards={[authGuard]} />}
                  >
                    <Route path="" element={<Employees />} />
                  </Route>
                  <Route
                    path={PathEnum.languages}
                    element={<ProtectedRoute guards={[authGuard, roleGuard(RolesEnum.admin)]} />}
                  >
                    <Route path="*" element={<></>} />
                  </Route>

                  <Route element={<ProtectedRoute guards={[authGuard]} />}>
                    <Route element={<EmployeeDetailsTabs />}>
                      <Route path={PathEnum.employeeInfo} element={<EmployeeInfo />} />
                      <Route path={PathEnum.employeeCv} element={<EmployeeCv />} />
                      <Route element={<EmployeeCv />}>
                        <Route path={PathEnum.cvDetails} element={<CvDetails />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
            {!userStore.user$ && (
              <>
                <Route element={<TabsBetweenSign />}>
                  <Route path={PathEnum.signIn} element={<SignInPage />} />
                  <Route path={PathEnum.signUp} element={<SignUpPage />} />
                </Route>
                <Route path="*" element={<Navigate to={PathEnum.signIn} replace />} />
              </>
            )}
            <Route path={'/404'} element={<></>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
});
