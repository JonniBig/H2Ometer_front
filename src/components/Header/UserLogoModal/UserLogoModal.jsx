import React, { useState } from 'react';

import Logout from '../../Logout/Logout';
import UserInfoModal from '../../Setting/Setting';

import settingIcon from '../../../assets/images/icons/cog-6-tooth2.svg';
import logoutIcon from '../../../assets/images/icons/outline.svg';

import { Overlay, UserLogoModalStyled } from './UserLogoModalStyled.styled';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ButtonTranslUser from '../ButtonTranslUser';
// import ButtonTransl from '../ButtonTransl';

const UserLogoModal = ({ onClose }) => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

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
          <img
            className="image"
            src={settingIcon}
            alt={t('userInterface.setting.alt')}
          />
          {t('userInterface.setting.text')}
        </button>
        <button className="btn" onClick={handleLogoutClick}>
          <img
            className="image"
            src={logoutIcon}
            alt={t('userInterface.logout.alt')}
          />
          {t('userInterface.logout.text')}
        </button>
        <ButtonTranslUser />

        {isSettingModalOpen && <UserInfoModal onClose={handleCloseModal} />}
        {isLogoutModalOpen && <Logout onClose={handleCloseModal} />}
      </UserLogoModalStyled>
      <Overlay onClick={onClose} />
    </>
  );
};

export default UserLogoModal;
