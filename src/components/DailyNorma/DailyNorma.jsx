import React, { useState } from 'react';
import { StyledDailyNorma } from './DailyNorma.styled';
import { FormDailyNorma, GeneralModal } from 'components';

const DailyNorma = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledDailyNorma>
      <p className="title">My daily norma</p>
      <div className="content">
        <p className="volume">2.0 L</p>
        <button className="edit" onClick={toggleModal}>
          Edit
        </button>
      </div>
      {showModal && (
        <GeneralModal
          title="My daily norma"
          onClose={toggleModal}
          renderContent={onClose => <FormDailyNorma onSave={onClose} />}
        />
      )}
    </StyledDailyNorma>
  );
};

export default DailyNorma;
