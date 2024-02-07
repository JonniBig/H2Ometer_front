import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import {
  GeneralModal,
  FormWater,
  EditFormWater,
  DeleteModal,
} from 'components';

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
  const [showDeleteModal, setShowDeleteModal] = useState({
    portionId: null,
    isOpen: false,
  });
  const waterData = useSelector(selectWaterProgressData);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleEditModal = () => {
    setShowEditModal(!showEditModal);
  };
  const toggleDeleteModal = () => {
    setShowDeleteModal({
      portionId: null,
      isOpen: false,
    });
  };
  const onDelete = () => {
    dispatch(deleteWaterIntakeThunk(showDeleteModal.portionId));
  };
  const currentDate = `${format(new Date(), 'd')}/${format(
    new Date(),
    'L'
  )}/${new Date().getFullYear()}`;
  const currentDateData =
    waterData?.drunkedWater?.find(date => date.day === currentDate)
      ?.waterIntake ?? [];
  return (
    <StyledTodayDiv>
      <h3 className="title">Today</h3>
      <div className="addWater">
        <p className="emptyText">
          {currentDateData?.length === 0
            ? "You haven't drank any water today"
            : ''}
        </p>

        <ul className="list">
          {currentDateData?.map(({ _id, time, amount }) => {
            const amPm =
              Number.parseInt(time.split(':')[0], 10) > 12 ? 'PM' : 'AM';
            return (
              <li key={_id} className="string">
                <div className="left">
                  <IconCup />
                  <span className="amount">{amount} ml</span>
                  <span className="time">
                    {time}&nbsp; {amPm}
                  </span>
                </div>
                <div className="rightBtn">
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
                    type="button"
                    className="deleteBtn"
                    onClick={() => {
                      setShowDeleteModal({ portionId: _id, isOpen: true });
                    }}
                  >
                    <IconTrash />
                  </button>
                </div>
              </li>
            );
          })}
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
            title="Edit the entered amount of water"
            onClose={toggleEditModal}
            renderContent={onClose => <EditFormWater onSave={onClose} />}
          />
        )}
        {showDeleteModal.isOpen && (
          <GeneralModal
            title="Delete entry"
            onClose={toggleDeleteModal}
            renderContent={onClose => (
              <DeleteModal onDelete={onDelete} onClose={onClose} />
            )}
          />
        )}
      </div>
    </StyledTodayDiv>
  );
};

export default TodayList;
