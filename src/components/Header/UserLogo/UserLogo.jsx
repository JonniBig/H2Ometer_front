import React, { useState } from 'react';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import user from '../../../assets/images/icons/user.svg';
import { UserLogoStyled } from './UserLogoStyled.styled';
import openIcon from '../../../assets/images/icons/chevron-double-up.svg';
import Button from '@material-ui/core/Button';

const UserLogo = () => {
  const [open, setOpen] = useState(false);

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
          <span className="name">NAME</span>
          <img className="avatar" src={user} alt="Sign in" />
        </div>
        <Button onClick={handleClick}>
          <img className="icon" src={openIcon} alt="Open menu" />
        </Button>
        <UserLogoModal open={open} onClose={handleClose} />
      </UserLogoStyled>
    </>
  );
};

export default UserLogo;
