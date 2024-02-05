import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute, RestrictedRoute, VerifyEmail } from 'components';
import { Home, Login, Main, Register } from 'pages';

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  WELCOME_ROUTE,
  VERIFY_EMAIL_ROUTE,
  FORGOT_PASSWORD_ROUTE,
} from 'constants/routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/authSlice';
import ForgotPasswordPage from 'pages/ForgotPasswordPage/ForgotPasswordPage';

const appRoutes = [
  {
    path: WELCOME_ROUTE,
    element: (
      <RestrictedRoute>
        <Main />
      </RestrictedRoute>
    ),
  },
  {
    path: HOME_ROUTE,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={WELCOME_ROUTE} />} />
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path={VERIFY_EMAIL_ROUTE} element={<VerifyEmail />} />
        <Route path={FORGOT_PASSWORD_ROUTE} element={<ForgotPasswordPage />} />
      </Routes>
    </Layout>
  );
};
