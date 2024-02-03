import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Logo from './Logo/Logo';
import UserLogo from './UserLogo/UserLogo';
import UserAuth from './UserAuth/UserAuth';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { setDarkMode, setLightMode } from '../../redux/actions/themeActions';

import sunIcon from '../../assets/images/tema/sun.svg';
import moonIcon from '../../assets/images/tema/moon.svg';
import { Conteiner, StyledHeader } from './Header.styled';

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
          <button className="btnTema" onClick={handleThemeChange}>
            <img src={moonIcon} alt="Moon Icon" />
            <img src={sunIcon} alt="Sun Icon" />
          </button>
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
