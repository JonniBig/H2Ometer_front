import React, { useState } from 'react';
import { StyledCalendar } from './Calendar.styled';
import { format, getDaysInMonth, setMonth } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = getDaysInMonth(selectedDate);
  const calendarDays = Array.from({ length: daysInMonth });

  const onPrevMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() - 1));
  };
  const onNextMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() + 1));
  };

  return (
    <div>
      <StyledCalendar>
        <div className="header">
          <h3 className="title">Month</h3>
          <div className="changeMonth">
            <button onClick={onPrevMonth} className="navBtn" type="button">
              {'<'}
            </button>
            <span>{format(selectedDate, 'MMMM, y')}</span>
            <button onClick={onNextMonth} className="navBtn" type="button">
              {'>'}
            </button>
          </div>
        </div>

        <div className="cellsContainer">
          {calendarDays.map((_, index) => {
            const dayNumber = index + 1;
            return (
              <div key={dayNumber} className="cell">
                <span className="dayNumber">{dayNumber}</span>
                <span className="percents">100&#37;</span>
              </div>
            );
          })}
        </div>
      </StyledCalendar>
    </div>
  );
};

export default Calendar;
