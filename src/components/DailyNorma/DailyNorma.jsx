import React, { useState } from 'react';
import { StyledDailyNorma } from './DailyNorma.styled';
import { FormDailyNorma, GeneralModal } from 'components';
import { useSelector } from 'react-redux';

const DailyNorma = () => {
  const [showModal, setShowModal] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <p className="title">My daily norma</p>
      <div className="content">
        <p className="volume">2.0 L</p>
        <button className="edit" onClick={toggleModal}>
          <span
            className={`edit-text text ${
              isDarkMode ? 'dark-mode' : 'light-mode'
            }`}
          >
            Edit
          </span>
        </button>
      </div>
      {showModal && (
        <GeneralModal
          title="My daily norma"
          className="formDailiNorma"
          onClose={toggleModal}
          renderContent={onClose => <FormDailyNorma onSave={onClose} />}
        />
      )}
    </StyledDailyNorma>
  );
};

export default DailyNorma;
