import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/authSlice';

import closeModal from '../../assets/images/icons/close-x.svg';
import { Conteiner, StyledLogout } from './Logout.styled';
import { useTranslation } from 'react-i18next';

const Logout = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logoutThunk());
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Conteiner>
          <StyledLogout
            className={`secondary-blue ${
              isDarkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            <div className="logoutTitleDiv">
              <h4 className="logoutTitle">{t('logoutModal.title')}</h4>
              <button
                type="button"
                className="closeModal"
                onClick={handleCloseModal}
              >
                <img src={closeModal} alt={t('logoutModal.closeButtonAlt')} />
              </button>
              <p className="logoutQuest">{t('logoutModal.question')}</p>
            </div>
            <div className="logoutBtns">
              <button
                type="button"
                className="btnCan"
                onClick={handleCloseModal}
              >
                {t('logoutModal.cancelButton')}
              </button>
              <button type="button" className="btnLog" onClick={handleLogout}>
                {t('logoutModal.logoutButton')}
              </button>
            </div>
          </StyledLogout>
        </Conteiner>
      )}
    </>
  );
};

export default Logout;
