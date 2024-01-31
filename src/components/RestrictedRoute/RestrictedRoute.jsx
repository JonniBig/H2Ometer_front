import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import * as routes from 'constants/routes';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectAuthAuthenticated);
  return isSignedIn ? <Navigate replace to={routes.HOME_ROUTE} /> : children;
};

export default RestrictedRoute;
