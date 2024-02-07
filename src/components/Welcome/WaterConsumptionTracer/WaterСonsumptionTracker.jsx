import { Link } from 'react-router-dom';

import calendarDays from '../../../assets/images/icons/calendar-days.svg';
import presentationCharBar from '../../../assets/images/icons/presentation-chart-bar.svg';
import wrenchScrewdriver from '../../../assets/images/icons/wrench-screwdriver.svg';

import { WaterConsTrackerStyled } from './WaterСonsTrackerStyled.styled';
import { useTranslation } from 'react-i18next';

export const WaterConsumptionTracker = () => {
  const { t } = useTranslation();
  return (
    <WaterConsTrackerStyled>
      <h1>{t('description.part1')}</h1>

      <p>{t('description.part2')}</p>
      <h2>{t('trackerBenefits.title')}</h2>
      <ul>
        <li>
          <img src={calendarDays} width={40} height={40} alt="Habit drive" />
          {t('trackerBenefits.habitDrive')}
        </li>
        <li>
          <img
            src={presentationCharBar}
            width={40}
            height={40}
            alt="View statistics"
          />
          {t('trackerBenefits.viewStatistics')}
        </li>
        <li>
          <img
            src={wrenchScrewdriver}
            width={40}
            height={40}
            alt="Personal rate setting"
          />
          {t('trackerBenefits.personalRateSetting')}
        </li>
      </ul>
      <Link to="/signup">
        <button>{t('tryTrackerButton')}</button>
      </Link>
    </WaterConsTrackerStyled>
  );
};
