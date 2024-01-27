import { WaterConsTrackerStyled } from './WaterСonsTrackerStyled.styled';
import calendarDays from '../../../assets/images/icons/calendar-days.svg';
import presentationCharBar from '../../../assets/images/icons/presentation-chart-bar.svg';
import wrenchScrewdriver from '../../../assets/images/icons/wrench-screwdriver.svg';

import { Link } from 'react-router-dom';

export const WaterConsumptionTracker = () => {
  return (
    <WaterConsTrackerStyled>
      <h1>Water consumption tracker</h1>
      <h2>Record daily water intake and track</h2>
      <h3>Tracker Benefits</h3>
      <ul>
        <li>
          <img src={calendarDays} width={40} height={40} alt="Habit drive" />
          Habit drive
        </li>
        <li>
          <img
            src={presentationCharBar}
            width={40}
            height={40}
            alt="Habit drive"
          />
          View statistics
        </li>
        <li>
          <img
            src={wrenchScrewdriver}
            width={40}
            height={40}
            alt="Habit drive"
          />
          Personal rate setting
        </li>
      </ul>
      <Link to="/signup">
        <button>Try tracker</button>
      </Link>
    </WaterConsTrackerStyled>
  );
};
