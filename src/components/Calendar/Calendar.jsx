import React, { useState } from 'react';
import { StyledCalendar } from './Calendar.styled';
import { format, getDaysInMonth, setMonth } from 'date-fns';

const mockWaterData = {
  '2024-01-22': {
    waterVolumes: [
      {
        _id: '65123451',
        waterAmount: 750,
        date: '2024-01-22T10:10:02.389Z',
        owner: 'wdawd12',
      },
      {
        _id: '65123451',
        waterAmount: 600,
        date: '2024-01-22T10:10:02.389Z',
        owner: 'wdawd12',
      },
    ],
    date: '22, January',
    waterVolumeTimes: 1,
    waterVolumePercentage: 90,
    dailyNorma: 1.5,
  },
  '2024-01-23': {
    waterVolumes: [
      {
        _id: '65123451',
        waterAmount: 750,
        date: '2024-01-23T10:10:02.389Z',
        owner: 'wdawd12',
      },
      {
        _id: '65123451',
        waterAmount: 750,
        date: '2024-01-23T10:10:02.389Z',
        owner: 'wdawd12',
      },
    ],
    date: '23, January',
    waterVolumeTimes: 1,
    waterVolumePercentage: 100,
    dailyNorma: 1.5,
  },
  '2024-01-24': {
    waterVolumes: [
      {
        _id: '65123451',
        waterAmount: 750,
        date: '2024-01-24T10:10:02.389Z',
        owner: 'wdawd12',
      },
      {
        _id: '65123451',
        waterAmount: 750,
        date: '2024-01-24T10:10:02.389Z',
        owner: 'wdawd12',
      },
    ],
    date: '24, January',
    waterVolumeTimes: 1,
    waterVolumePercentage: 100,
    dailyNorma: 1.5,
  },
  '2024-01-25': {
    waterVolumes: [
      {
        _id: '65123451',
        waterAmount: 150,
        date: '2024-01-25T10:10:02.389Z',
        owner: 'wdawd12',
      },
    ],
    date: '25, January',
    waterVolumeTimes: 1,
    waterVolumePercentage: 10,
    dailyNorma: 1.5,
  },
  '2024-01-26': {
    waterVolumes: [
      {
        _id: '65123451',
        waterAmount: 150,
        date: '2024-01-26T10:10:02.342Z',
        owner: 'wdawd12',
      },
      {
        _id: '65123451',
        waterAmount: 150,
        date: '2024-01-26T10:10:02.342Z',
        owner: 'wdawd12',
      },
    ],
    date: '26, January',
    waterVolumeTimes: 1,
    waterVolumePercentage: 20,
    dailyNorma: 1.5,
  },
};

const Calendar = () => {
  const waterData = mockWaterData;
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
            const formattedDayNumber =
              dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;

            const currentDate = `${selectedDate.getFullYear()}-${format(
              selectedDate,
              'LL'
            )}-${formattedDayNumber}`;
            const currentDateData = waterData[currentDate];

            const dayPercentage = currentDateData?.waterVolumePercentage ?? 0;
            const fullNorma = dayPercentage === 100;
            return (
              <div key={dayNumber} className="cell">
                <span className={`dayNumber ${fullNorma ? 'full' : ''}`}>
                  {dayNumber}
                </span>
                <span className="percents">{dayPercentage}&#37;</span>
              </div>
            );
          })}
        </div>
      </StyledCalendar>
    </div>
  );
};

export default Calendar;
