import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserLogoModal from '../UserLogoModal/UserLogoModal';
import {
  selectAuthAuthenticated,
  selectUser,
} from '../../../redux/auth/authSelectors';

import userAva from '../../../assets/images/icons/user.svg';
import openIcon from '../../../assets/images/icons/chevron-double-up.svg';

import { ImgIconStyled, UserLogoStyled } from './UserLogoStyled.styled';

const UserLogo = () => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectUser);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <UserLogoStyled>
        <div className="user">
          <span className="name">
            {isAuthenticated
              ? user.name || user.email?.charAt(0).toUpperCase()
              : user.email?.charAt(0).toUpperCase()}
          </span>
          <img
            className="avatar"
            src={isAuthenticated && user.avatar ? user.avatar : userAva}
            alt="User avatar"
          />
        </div>

        <ImgIconStyled src={openIcon} onClick={handleClick} alt="Open menu" />

        <UserLogoModal open={open} onClose={handleClose} />
      </UserLogoStyled>
    </>
  );
};

export default UserLogo;
