import React from 'react';
import { StyledDailyProgress } from './DailyProgress.styled';
import { ReactComponent as IconPlus } from 'assets/images/icons/plus-circle.svg';
const DailyProgress = () => {
  const dailyPercents = 33; // 0-100

  return (
    <StyledDailyProgress $dailyPercents={dailyPercents}>
      <div className="blockLeft">
        <h3 className="title">Today</h3>
        <div className="progressContainer">
          <div className="progressBar"></div>
          <div className="progressBarBg"></div>
          <div className="progressPointer" />
          {dailyPercents < 15 ? null : (
            <span className="progressBreakPoint p-0">0&#37;</span>
          )}
          <span className="progressBreakPoint p-50">{dailyPercents}&#37;</span>
          {dailyPercents > 85 ? null : (
            <span className="progressBreakPoint p-100">100&#37;</span>
          )}
        </div>
      </div>
      <button className="addWaterBtn" type="button">
        <IconPlus /> Add water
      </button>
    </StyledDailyProgress>
  );
};

export default DailyProgress;
