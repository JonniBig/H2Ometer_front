import React, { useEffect, useState } from 'react';
import { StyledDailyProgress } from './DailyProgress.styled';
import { ReactComponent as IconPlus } from 'assets/images/icons/plus-circle.svg';
import { createPortal } from 'react-dom';
import FormWater from 'components/FormWater/FormWater';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterProgressData } from '../../redux/calendar/calendarSlice.selectors';
import { format } from 'date-fns';
import { getWaterProgressThunk } from '../../redux/calendar/calendarSlice';
const DailyProgress = () => {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterProgressData);
  const dailyNorma = waterData?.dailyNorma * 1000;
  // const dailyPercents = 33; // 0-100
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getWaterProgressThunk());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const currentDate = `${format(new Date(), 'd')}/${format(
    new Date(),
    'L'
  )}/${new Date().getFullYear()}`;
  const currentDateData = waterData?.drunkedWater?.find(
    date => date.day === currentDate
  )?.waterIntake;
  const drunkedWaterAmount = currentDateData?.reduce(
    (acc, curr) => curr.amount + acc,
    0
  );

  const dailyPercents = Math.round((drunkedWaterAmount / dailyNorma) * 100);
  return (
    <StyledDailyProgress $dailyPercents={dailyPercents}>
      <h3 className="title">Today</h3>
      <div className="bottomContainer">
        <div className="blockLeft">
          <div className="progressContainer">
            <div className="progressBar"></div>
            <div className="progressBarBg"></div>
            <div className="progressPointer" />
            {dailyPercents < 15 ? null : (
              <span className="progressBreakPoint p-0">0&#37;</span>
            )}
            <span className="progressBreakPoint p-50">
              {dailyPercents || 0}&#37;
            </span>
            {dailyPercents > 85 ? null : (
              <span className="progressBreakPoint p-100">100&#37;</span>
            )}
          </div>
        </div>
        <button className="addWaterBtn" type="button" onClick={toggleModal}>
          <IconPlus className="plus" />
          <span className="textBtn">Add water</span>
        </button>
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
    </StyledDailyProgress>
  );
};

export default DailyProgress;
