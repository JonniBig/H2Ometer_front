import React, { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Logo from './Logo/Logo';
// import UserAuth from './UserAuth';

// import { selectAuthAuthenticated } from '../../redux/auth/authSelectors';
import { Conteiner, StyledHeader } from './Header.styled';
import UserLogo from './UserLogo/UserLogo';

const Header = () => {
  // const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <Conteiner>
      <StyledHeader>
        <Logo />
        <UserLogo />
        {/* {authenticated ? <UserLogo /> : <UserAuth />} */}
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </StyledHeader>
    </Conteiner>
  );
};

export default Header;
