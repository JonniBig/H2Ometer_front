import { Route, Routes } from 'react-router-dom';

import { Layout, PrivateRoute, RestrictedRoute } from 'components';
import { Home, Login, Main, Register } from 'pages';

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  WELCOME_ROUTE,
} from 'constants/routes';

const appRoutes = [
  {
    path: WELCOME_ROUTE,
    element: <Main />,
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
  return (
    <Layout>
      <Routes>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Layout>
  );
};
