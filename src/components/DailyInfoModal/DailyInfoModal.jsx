import React from 'react';
import { StyledDailyInfoModal } from './DailyInfoModal.styled';

const DailyInfoModal = ({ date, dailyNorma, dayPercentage, portionsCount }) => {
  return (
    <StyledDailyInfoModal>
      <p className="date">{date}</p>
      <p>
        Daily norma:&nbsp;<span className="value">{dailyNorma} L</span>
      </p>
      <p>
        Fulfillment of the daily norm:&nbsp;
        <span className="value">
          {Number.isNaN(dayPercentage) ? 0 : dayPercentage}%
        </span>
      </p>
      <p>
        How many servings of water:&nbsp;
        <span className="value">{portionsCount}</span>
      </p>
    </StyledDailyInfoModal>
  );
};

export default DailyInfoModal;
