import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsSignedIn } from '../../redux/user/userSlice.selectors';
import * as routes from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return isSignedIn ? children : <Navigate to={routes.LOGIN_ROUTE} />;
};

export default PrivateRoute;
