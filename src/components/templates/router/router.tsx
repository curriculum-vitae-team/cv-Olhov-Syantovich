import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { AppContext } from '../app/app.context';

import { authGuard } from '@templates/router/guards/authGuard';
import { roleGuard } from '@templates/router/guards/roleGuard';
import { RolesEnum } from '../../../constants';
import { PathEnum } from '@templates/router/router.types';
import { ProtectedRoute } from '@templates/router/protected-route';

export const AppRouter = () => {
  const { user } = useContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathEnum.employee} element={<ProtectedRoute guards={[authGuard]} />}>
          <Route path="*" element={<></>} />
        </Route>
        <Route path={PathEnum.languages} element={<ProtectedRoute guards={[authGuard, roleGuard(RolesEnum.admin)]} />}>
          <Route path="*" element={<></>} />
        </Route>
        {!user && (
          <>
            <Route path="signin" element={<>1</>} />
            {/*SignIn*/}
            <Route path="signup" element={<>2</>} /> {/*SignUp*/}
          </>
        )}
        <Route path={'/404'} element={<></>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
