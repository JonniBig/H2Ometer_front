import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import * as routes from 'constants/routes';
import { selectIsSignedIn } from '../../redux/user/userSlice.selectors';

const RestrictedRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return isSignedIn ? <Navigate replace to={routes.HOME_ROUTE} /> : children;
};

export default RestrictedRoute;
