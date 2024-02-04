import React from 'react';

import user from '../../../assets/images/icons/user.svg';

import { LinkStyled } from '../Header.styled';

const UserAuth = () => (
  <nav to="/signin">
    <LinkStyled to="/signin">
      <span className="text">Sign in</span>
      <img className="icon" src={user} alt="Sign in" />
    </LinkStyled>
  </nav>
);

export default UserAuth;
