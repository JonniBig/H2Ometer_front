import React, { useState } from 'react';

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

  const handleOverlayClick = () => {
    setIsSettingModalOpen(false);
    setIsLogoutModalOpen(false);
  };

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

        {isSettingModalOpen && (
          <UserInfoModal onClose={() => setIsSettingModalOpen(false)} />
        )}

        {isLogoutModalOpen && (
          <Logout onClose={() => setIsLogoutModalOpen(false)} />
        )}
      </UserLogoModalStyled>
      <Overlay onClick={handleOverlayClick} />
    </>
  );
};

export default UserLogoModal;
