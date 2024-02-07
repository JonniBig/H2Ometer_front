import React, { useState } from 'react';
import { StyledDailyNorma } from './DailyNorma.styled';
import { FormDailyNorma, GeneralModal } from 'components';
import { useSelector } from 'react-redux';
import { selectWaterData } from '../../redux/calendar/calendarSlice.selectors';
import { useTranslation } from 'react-i18next';

const DailyNorma = () => {
  const [showModal, setShowModal] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const waterData = useSelector(selectWaterData);
  const { t } = useTranslation();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <p className="title">{t('dailyNorm.title')}</p>
      <div className="content">
        <p className="volume">
          {waterData?.dailyNorma ?? '2'}
          {t('dailyNorm.l')}
        </p>
        <button className="edit" onClick={toggleModal}>
          <span
            className={`edit-text text ${
              isDarkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            {t('dailyNorm.edit')}
          </span>
        </button>
      </div>

      {showModal && (
        <GeneralModal
          title={t('dailyNorm.title')}
          className="formDailiNorma"
          onClose={toggleModal}
          renderContent={onClose => <FormDailyNorma onClose={onClose} />}
        />
      )}
    </StyledDailyNorma>
  );
};

export default DailyNorma;
