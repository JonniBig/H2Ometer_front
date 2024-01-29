import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import UserAuth from './UserAuth';
import UserLogo from './UserLogo';
import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { Conteiner, StyledHeader } from './Header.styled';

const Header = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <Conteiner>
      <StyledHeader>
        <Logo />
        {authenticated ? <UserLogo /> : <UserAuth />}
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </StyledHeader>
    </Conteiner>
  );
};

export default Header;
