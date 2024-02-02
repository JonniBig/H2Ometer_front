import React, { useEffect, useState } from 'react';
import { StyledCalendar } from './Calendar.styled';
import { format, getDaysInMonth, setMonth } from 'date-fns';
import { ReactComponent as IconLeft } from 'assets/images/icons/arrow-left.svg';
import { ReactComponent as IconRight } from 'assets/images/icons/arrow-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectWaterData,
  // selectWaterDataError,
  // selectWaterDataIsLoading,
} from '../../redux/calendar/calendarSlice.selectors';
import { getWaterDataThunk } from '../../redux/calendar/calendarSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterData);
  // const isLoading = useSelector(selectWaterDataIsLoading);
  // const error = useSelector(selectWaterDataError);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = getDaysInMonth(selectedDate);
  const calendarDays = Array.from({ length: daysInMonth });

  const onPrevMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() - 1));
  };
  const onNextMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() + 1));
  };
  useEffect(() => {
    dispatch(getWaterDataThunk({ day: 10, month: format(selectedDate, 'LL') }));
  }, [dispatch, selectedDate]);

  const dailyNorma = waterData?.dailyNorma * 1000;
  return (
    <div>
      <StyledCalendar>
        <div className="header">
          <h3 className="title">Month</h3>
          <div className="changeMonth">
            <button onClick={onPrevMonth} className="navBtn" type="button">
              <IconLeft />
            </button>
            <span>{format(selectedDate, 'MMMM, y')}</span>
            <button onClick={onNextMonth} className="navBtn" type="button">
              <IconRight />
            </button>
          </div>
        </div>

        <div className="cellsContainer">
          {calendarDays.map((_, index) => {
            const dayNumber = index + 1;

            const currentDate = `${dayNumber}/${format(
              selectedDate,
              'L'
            )}/${selectedDate.getFullYear()}`;

            const currentDateData = waterData?.drunkedWater?.find(
              date => date.day === currentDate
            )?.waterIntake;

            const drunkedWaterAmount = currentDateData?.reduce(
              (acc, curr) => curr.amount + acc,
              0
            );

            const dayPercentage = Math.round(
              (drunkedWaterAmount / dailyNorma) * 100
            );
            const limitedDailyPercents =
              dayPercentage >= 100 ? 100 : dayPercentage;

            const fullNorma = limitedDailyPercents === 100;
            return (
              <div key={dayNumber} className="cell">
                <span className={`dayNumber ${fullNorma ? 'full' : ''}`}>
                  {dayNumber}
                </span>
                <span className="percents">
                  {limitedDailyPercents || 0}&#37;
                </span>
              </div>
            );
          })}
        </div>
      </StyledCalendar>
    </div>
  );
};

export default Calendar;
