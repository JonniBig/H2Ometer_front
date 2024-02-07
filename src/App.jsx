import { Navigate, Route, Routes } from 'react-router-dom';
import GoogleCallbackPage from './components/GoogleCallbackPage'
import { Layout, PrivateRoute, RestrictedRoute } from 'components';
import {
  Home,
  Login,
  Main,
  Register,
  UpdatePasswordPage,
  ForgotPasswordPage,
  VerifyEmail,
} from 'pages';

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  WELCOME_ROUTE,
  VERIFY_EMAIL_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  UPDATE_PASSWORD_ROUTE,
} from 'constants/routes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from './redux/auth/authSlice';

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
  {
    path: VERIFY_EMAIL_ROUTE,
    element: <VerifyEmail />,
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    element: <ForgotPasswordPage />,
  },
  {
    path: UPDATE_PASSWORD_ROUTE,
    element: <UpdatePasswordPage />,
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
        <Route path="*" element={<Navigate to={WELCOME_ROUTE} />} />
        <Route path="/google-callback" component={GoogleCallbackPage} />
      </Routes>
    </Layout>
  );
};
