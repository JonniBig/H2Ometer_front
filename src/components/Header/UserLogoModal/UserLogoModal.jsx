import React, { useState, useEffect } from 'react';

import Logout from '../../Logout/Logout';
import UserInfoModal from '../../Setting/Setting';

import settingIcon from '../../../assets/images/icons/cog-6-tooth2.svg';
import logoutIcon from '../../../assets/images/icons/outline.svg';

import { Overlay, UserLogoModalStyled } from './UserLogoModalStyled.styled';

const UserLogoModal = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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

  const handleOverlayClick = () => {
    handleCloseModal();
  };

  useEffect(() => {
    const handleClickOutsideModal = event => {
      if (isSettingModalOpen || isLogoutModalOpen) {
        const modal = document.querySelector('.user-logo-modal');
        if (modal && !modal.contains(event.target)) {
          handleCloseModal();
        }
      }
    };

    window.addEventListener('click', handleClickOutsideModal);
    return () => {
      window.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isSettingModalOpen, isLogoutModalOpen]);

  return (
    <>
      <UserLogoModalStyled>
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
      <Overlay onClick={handleOverlayClick} />
    </>
  );
};

export default UserLogoModal;
