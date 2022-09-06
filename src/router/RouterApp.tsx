import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import ProtectedRoute from './ProtectedRoute';
import { PathEnum } from './pathsEnum/pathEnum';
import authGuard from './guards/authGuard';
import roleGuard from './guards/roleGuard';
import { RolesEnum } from '../constants';

const RouterApp = () => {
  const { user } = useContext(TokenContext);
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
export default RouterApp;
