import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { authGuard } from '@templates/router/guards/authGuard';
import { roleGuard } from '@templates/router/guards/roleGuard';
import { RolesEnum } from '../../../constants/user-roles.enum';
import { PathEnum } from '@templates/router/router.types';
import { ProtectedRoute } from '@templates/router/protected-route';
import { SignInPage } from '@pages/SignIn';
import { SignUpPage } from '@pages/SignUp';
import { Loader } from '@atoms/loader/loader';
import { TabsBetweenSign } from '@templates/tabs-between-sign/tabs-between-sign';
import { EmployeeDetailsTabs } from '@templates/employee-details-tabs/employee-details-tabs';
import { EmployeeCv } from '@pages/EmployeeCv';
import { EmployeeInfo } from '@pages/EmployeeInfo';
import user from '@store/user';

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path={PathEnum.employees} element={<ProtectedRoute guards={[authGuard]} />}>
            <Route path="*" element={<></>} />
          </Route>
          <Route
            path={PathEnum.languages}
            element={<ProtectedRoute guards={[authGuard, roleGuard(RolesEnum.admin)]} />}
          >
            <Route path="*" element={<></>} />
          </Route>

          <Route element={<EmployeeDetailsTabs />}>
            <Route path={PathEnum.employeeInfo} element={<EmployeeInfo />} />
            <Route path={PathEnum.employeeCv} element={<EmployeeCv />} />
          </Route>

          {!user.user && (
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
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
