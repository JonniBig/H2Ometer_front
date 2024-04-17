import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import UserLogoModal from '../UserLogoModal/UserLogoModal';
import {
  selectAuthAuthenticated,
  selectUser,
} from '../../../redux/auth/authSelectors';

import userAva from '../../../assets/images/icons/user.svg';
import openIcon from '../../../assets/images/icons/double-up.svg';

import {
  ButtonMenuStyled,
  UserLogoStyled,
  UserLogoWrapper,
} from './UserLogoStyled.styled';

const UserLogo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  const user = useSelector(selectUser);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleToggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <UserLogoWrapper>
      <UserLogoStyled
        className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <>
          <div className="userMenu" onClick={handleToggleModal}>
            <div className="user">
              <span className="name">
                {isAuthenticated
                  ? user.name || user.email?.charAt(0).toUpperCase()
                  : user.email?.charAt(0).toUpperCase()}
              </span>
              <img
                src={isAuthenticated && user.avatar ? user.avatar : userAva}
                className="imgAvatar"
                alt="User avatar"
                width="28px"
                height="28px"
                border-radius="50%"
              />
            </div>
            <ButtonMenuStyled>
              <img src={openIcon} alt="Open menu" />
            </ButtonMenuStyled>
          </div>
        </>

        {isModalOpen && <UserLogoModal onClose={handleCloseModal} />}
      </UserLogoStyled>
    </UserLogoWrapper>
  );
};

export default UserLogo;
