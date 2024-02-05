import React, { useEffect, useState } from 'react';
import { StyledCalendar } from './Calendar.styled';
import { format, getDaysInMonth, setMonth } from 'date-fns';
import { ReactComponent as IconLeft } from 'assets/images/icons/arrow-left.svg';
import { ReactComponent as IconRight } from 'assets/images/icons/arrow-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterData } from '../../redux/calendar/calendarSlice.selectors';
import { getWaterDataThunk } from '../../redux/calendar/calendarSlice';
import { DailyInfoModal } from 'components';
const Calendar = () => {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterData);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);
  const [selectedDayData, setSelectedDayData] = useState(null);

  const dailyNorma = waterData?.dailyNorma * 1000;

  const onPrevMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() - 1));
  };

  const onNextMonth = () => {
    setSelectedDate(prevDate => setMonth(prevDate, prevDate.getMonth() + 1));
  };

  useEffect(() => {
    dispatch(getWaterDataThunk({ day: 10, month: format(selectedDate, 'LL') }));
  }, [dispatch, selectedDate]);

  const openDailyInfoModal = (
    dayNumber,
    date,
    dayPercentage,
    portionsCount
  ) => {
    // setShowDailyInfoModal(true);
    setSelectedDayData({ dayNumber, date, dayPercentage, portionsCount });
  };

  const closeDailyInfoModal = () => {
    // setShowDailyInfoModal(false);
    setSelectedDayData(null);
  };

  const daysInMonth = getDaysInMonth(selectedDate);
  const calendarDays = Array.from({ length: daysInMonth });

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
            console.log('currentDate: ', currentDate);

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
              <div
                key={dayNumber}
                className="cell"
                onMouseOver={() => {
                  setIsHovering(true);
                  openDailyInfoModal(
                    dayNumber,
                    currentDate,
                    limitedDailyPercents,
                    currentDateData?.length || 0
                  );
                }}
                onMouseOut={() => {
                  setIsHovering(false);
                  closeDailyInfoModal();
                }}
              >
                <span className={`dayNumber ${fullNorma ? 'full' : ''}`}>
                  {dayNumber}
                </span>
                <span className="percents">
                  {limitedDailyPercents || 0}&#37;
                </span>
                {isHovering && selectedDayData.dayNumber === dayNumber && (
                  <DailyInfoModal
                    onClose={closeDailyInfoModal}
                    date={`${format(
                      new Date(
                        selectedDayData.date.split('/')[2],
                        selectedDayData.date.split('/')[1] - 1,
                        selectedDayData.date.split('/')[0]
                      ),
                      'd, MMMM'
                    )}`}
                    dailyNorma={dailyNorma / 1000}
                    dayPercentage={selectedDayData.dayPercentage}
                    portionsCount={selectedDayData.portionsCount}
                  />
                )}
              </div>
            );
          })}
        </div>
      </StyledCalendar>
    </div>
  );
};

export default Calendar;
