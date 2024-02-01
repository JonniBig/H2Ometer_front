import React, { useState } from 'react';
import { StyledTodayDiv } from './TodayList.styled';
import FormWater from '../FormWater/FormWater';
import { createPortal } from 'react-dom';

const TodayList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledTodayDiv>
      <h2 className="title">Today</h2>
      <div className="addWater">
        <ul className="waterList">
          <p className="emptyText">You haven't drank any water today</p>
          <button className="addBtn" type="button" onClick={toggleModal}>
            + Add water
          </button>
        </ul>

        {showModal &&
          createPortal(
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Add water</h2>
                  <span className="close" onClick={toggleModal}>
                    &times;
                  </span>
                </div>
                <FormWater onSave={toggleModal} />
              </div>
            </div>,
            document.querySelector('#portal')
          )}
      </div>
    </StyledTodayDiv>
  );
};

export default TodayList;
