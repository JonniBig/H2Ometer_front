import React from 'react';
import { StyledDailyInfoModal } from './DailyInfoModal.styled';
import { useTranslation } from 'react-i18next';

const DailyInfoModal = ({ date, dailyNorma, dayPercentage, portionsCount }) => {
  const { t } = useTranslation();
  return (
    <StyledDailyInfoModal>
      <p className="date">{date}</p>
      <p>
        {t('dailyInfo.dailyNorm')}&nbsp;
        <span className="value">
          {dailyNorma} {t('l')}
        </span>
      </p>
      <p>
        {t('dailyInfo.fulfillment')}:&nbsp;
        <span className="value">
          {Number.isNaN(dayPercentage) ? 0 : dayPercentage}%
        </span>
      </p>
      <p>
        {t('dailyInfo.waterServings')}&nbsp;
        <span className="value">{portionsCount}</span>
      </p>
    </StyledDailyInfoModal>
  );
};

export default DailyInfoModal;
