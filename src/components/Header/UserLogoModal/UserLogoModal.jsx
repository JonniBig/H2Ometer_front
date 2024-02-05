import React, { useState } from 'react';

import Logout from '../../Logout/Logout';
import UserInfoModal from '../../Setting/Setting';

import settingIcon from '../../../assets/images/icons/cog-6-tooth2.svg';
import logoutIcon from '../../../assets/images/icons/outline.svg';

import { Overlay, UserLogoModalStyled } from './UserLogoModalStyled.styled';
import { useSelector } from 'react-redux';

const UserLogoModal = ({ onClose }) => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const handleSettingClick = () => {
    setIsSettingModalOpen(true);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSettingModalOpen(false);
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <UserLogoModalStyled
        className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      >
        <button className="btn" onClick={handleSettingClick}>
          <img className="image" src={settingIcon} alt="Setting" />
          Setting
        </button>
        <button className="btn" onClick={handleLogoutClick}>
          <img className="image" src={logoutIcon} alt="Log out" />
          Log out
        </button>

        {isSettingModalOpen && <UserInfoModal onClose={handleCloseModal} />}
        {isLogoutModalOpen && <Logout onClose={handleCloseModal} />}
      </UserLogoModalStyled>
      <Overlay onClick={onClose} />
    </>
  );
};

export default UserLogoModal;
