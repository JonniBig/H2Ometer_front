import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Logo from './Logo/Logo';
import UserLogo from './UserLogo/UserLogo';

import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { setDarkMode, setLightMode } from '../../redux/actions/themeActions';

import { Conteiner, StyledHeader } from './Header.styled';
import MaterialUISwitch from './ButtonToggle';
import UserAuth from './UserAuth/UserAuth';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleThemeChange = () => {
    if (isDarkMode) {
      dispatch(setLightMode());
    } else {
      dispatch(setDarkMode());
    }
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Conteiner>
        <StyledHeader>
          <Logo authenticated={authenticated} />
          <MaterialUISwitch onClick={handleThemeChange} />

          {authenticated ? <UserLogo /> : <UserAuth />}
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </StyledHeader>
      </Conteiner>
    </div>
  );
};

export default Header;
