import React from 'react';
import { useSelector } from 'react-redux';

// import UserLogoModal from '../UserLogoModal/UserLogoModal';
import {
  selectAuthAuthenticated,
  selectUser,
} from '../../../redux/auth/authSelectors';

import userAva from '../../../assets/images/icons/user.svg';
import openIcon from '../../../assets/images/icons/chevron-double-up.svg';

import {
  ButtonMenuStyled,
  UserLogoStyled,
  UserLogoWrapper,
} from './UserLogoStyled.styled';

const UserLogo = () => {
  // const [open, setOpen] = useState(false);
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectUser);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <UserLogoWrapper>
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
        <ButtonMenuStyled>
          <img src={openIcon} alt="Open menu" />
        </ButtonMenuStyled>

        {/* <UserLogoModal open={open} onClose={handleClose} /> */}
      </UserLogoStyled>
    </UserLogoWrapper>
  );
};

export default UserLogo;
