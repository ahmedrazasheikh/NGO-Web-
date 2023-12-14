// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = (props) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...props} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
