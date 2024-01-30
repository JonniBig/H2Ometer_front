import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import * as routes from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectAuthAuthenticated);
  return isSignedIn ? children : <Navigate to={routes.LOGIN_ROUTE} />;
};

export default PrivateRoute;
