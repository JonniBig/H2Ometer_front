import React from 'react';
import { StyledCalendar } from './Calendar.styled';
import { getDaysInMonth } from 'date-fns';

const Calendar = () => {
  const daysInMonth = getDaysInMonth(new Date());
  const calendarDays = Array.from({ length: daysInMonth });

  return (
    <div>
      <StyledCalendar>
        <div className="header">
          <h3 className="title">Month</h3>
          <div className="changeMonth">
            <button className="navBtn" type="button">
              {'<'}
            </button>
            <span>April, 2023</span>
            <button className="navBtn" type="button">
              {'>'}
            </button>
          </div>
        </div>

        <div className="cellsContainer">
          {calendarDays.map((_, index) => {
            const dayNumber = index + 1;
            return (
              <div className="cell">
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
