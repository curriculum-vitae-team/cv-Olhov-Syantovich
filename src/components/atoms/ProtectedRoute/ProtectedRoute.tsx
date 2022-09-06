import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { RouteProtectedProps } from './types/ProtectedRoute.type';

export const ProtectedRoute = ({ guards }: RouteProtectedProps) => {
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
