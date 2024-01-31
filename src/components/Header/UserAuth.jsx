import React from 'react';
import { LinkStyled } from './Header.styled';
import user from '../../assets/images/icons/user.svg';

const UserAuth = () => (
  <nav to="/signin">
    <LinkStyled to="/signin">
      <span className="text">Sign in</span>
      <img src={user} alt="Sign in" />
    </LinkStyled>
  </nav>
);

export default UserAuth;
