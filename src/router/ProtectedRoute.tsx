import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { IRoute } from '../interfaces/router/IRoute';

const ProtectedRoute = ({ guards }: IRoute) => {
  let navigate = '';
  for (let i = 0; i < guards.length; i++) {
    const guardResult = guards[i]();
    if (guardResult) {
      navigate = guardResult;
      break;
    }
  }
  return navigate ? <Navigate to={`../${navigate}`} /> : <Outlet />;
};
export default ProtectedRoute;
