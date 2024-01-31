import React, { useState } from 'react';
import { StyledDailyNorma } from './DailyNorma.styled';
import {FormDailyNorma} from 'components';

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
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>My daily norma</h2>
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
            </div>

            <FormDailyNorma onSave={toggleModal} />
          </div>
        </div>
      )}
    </StyledDailyNorma>
  );
};

export default DailyNorma;
