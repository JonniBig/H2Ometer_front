import React, { useState } from 'react';
import { StyledDailyNorma } from './DailyNorma.styled';
import { FormDailyNorma, GeneralModal } from 'components';
import { useSelector } from 'react-redux';
import { selectWaterData } from '../../redux/calendar/calendarSlice.selectors';

const DailyNorma = () => {
  const [showModal, setShowModal] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const waterData = useSelector(selectWaterData);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <p className="title">My daily norma</p>
      <div className="content">
        <p className="volume">{waterData?.dailyNorma ?? '2'} L</p>
        <button className="edit" onClick={toggleModal}>
          Edit
        </button>
      </div>
      {showModal && (
        <GeneralModal
          title="My daily norma"
          className="formDailiNorma"
          onClose={toggleModal}
          renderContent={onClose => <FormDailyNorma onClose={onClose} />}
        />
      )}
    </StyledDailyNorma>
  );
};

export default DailyNorma;
