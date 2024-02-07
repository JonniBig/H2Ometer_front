import React from 'react';
import user from '../../../assets/images/icons/user.svg';
import ButtonTransl from '../ButtonTransl';

import { LinkStyled, NavStyled } from './UserAuthStyled.styled';
import { useTranslation } from 'react-i18next';

const UserAuth = () => {
  const { t } = useTranslation();

  return (
    <NavStyled to="/signin">
      <LinkStyled to="/signin">
        <span className="text">{t('signIn')}</span>
        <img className="icon" src={user} alt="Sign in" />
      </LinkStyled>
      <ButtonTransl />
    </NavStyled>
  );
};

export default UserAuth;
