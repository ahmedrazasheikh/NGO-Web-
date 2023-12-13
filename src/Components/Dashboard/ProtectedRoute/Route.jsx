// AuthenticatedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './Components/Dashboard/ProtectedRoute/AuthContext';

const AuthenticatedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Login" replace />
  );
};

export default AuthenticatedRoute;
