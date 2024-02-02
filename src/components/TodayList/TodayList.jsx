import React, { useState } from 'react';
import { StyledTodayDiv } from './TodayList.styled';
import FormWater from '../FormWater/FormWater';
import { GeneralModal } from 'components';

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

        {showModal && (
          <GeneralModal
            title="Add water"
            onClose={toggleModal}
            renderContent={onClose => <FormWater onSave={onClose} />}
          />
        )}
      </div>
    </StyledTodayDiv>
  );
};

export default TodayList;
