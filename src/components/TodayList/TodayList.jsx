import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { GeneralModal, FormWater, EditFormWater } from 'components';

import { ReactComponent as IconCup } from 'assets/images/icons/cup.svg';
import { ReactComponent as IconEdit } from 'assets/images/icons/edit.svg';
import { ReactComponent as IconTrash } from 'assets/images/icons/trash.svg';

import { selectWaterProgressData } from '../../redux/calendar/calendarSlice.selectors';
import { StyledTodayDiv } from './TodayList.styled';
import {
  deleteWaterIntakeThunk,
  setEditingPortionId,
} from '../../redux/calendar/calendarSlice';

const TodayList = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const waterData = useSelector(selectWaterProgressData);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };

  const currentDate = `${format(new Date(), 'd')}/${format(
    new Date(),
    'L'
  )}/${new Date().getFullYear()}`;
  const currentDateData = waterData?.drunkedWater?.find(
    date => date.day === currentDate
  )?.waterIntake;
  return (
    <StyledTodayDiv>
      <h2 className="title">Today</h2>
      <div className="addWater">
        <ul className="waterList">
          <p className="emptyText">You haven't drank any water today</p>
          <ul>
            {currentDateData?.map(({ _id, time, amount }) => {
              const amPm =
                Number.parseInt(time.split(':')[0], 10) > 12 ? 'AM' : 'PM';
              return (
                <li key={_id} className="string">
                  <div>
                    <IconCup />
                    <span className="amount">{amount}ml</span>
                    <span className="time">
                      {time} {amPm}
                    </span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="editBtn"
                      onClick={() => {
                        dispatch(setEditingPortionId(_id));
                        setShowEditModal(true);
                      }}
                    >
                      <IconEdit />
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteWaterIntakeThunk(_id));
                      }}
                      className="deleteBtn"
                    >
                      <IconTrash />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
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
        {showEditModal && (
          <GeneralModal
            title="Edit Portion of water"
            onClose={toggleEditModal}
            renderContent={onClose => <EditFormWater onSave={onClose} />}
          />
        )}
      </div>
    </StyledTodayDiv>
  );
};

export default TodayList;
