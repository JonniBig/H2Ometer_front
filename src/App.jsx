import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components';
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
    element: <Home />,
  },
  {
    path: REGISTER_ROUTE,
    element: <Register />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Login />,
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
