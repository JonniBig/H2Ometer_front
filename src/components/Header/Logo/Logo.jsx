import React from 'react';
import { Link } from 'react-router-dom';

import loginIcon from '../../../assets/images/logo-header.svg';
import { HOME_ROUTE, WELCOME_ROUTE } from '../../../constants/routes';

import { StyledLogo } from '../Header.styled';

const Logo = ({ authenticated }) => {
  const homepageLink = authenticated ? HOME_ROUTE : WELCOME_ROUTE;

  return (
    <StyledLogo>
      <Link to={homepageLink}>
        <img src={loginIcon} alt="Logo" />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
