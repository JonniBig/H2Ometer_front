import React from 'react';
import { Link } from 'react-router-dom';
import loginIcon from '../../../assets/images/logo-header.svg';
import { StyledLogo } from '../Header.styled';

const Logo = () => (
  <StyledLogo>
    <Link to="/">
      <img src={loginIcon} alt="Logo" />
    </Link>
  </StyledLogo>
);

export default Logo;
