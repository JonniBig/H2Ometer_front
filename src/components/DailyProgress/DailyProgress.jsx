import React, { useEffect, useState } from 'react';
import { StyledDailyProgress } from './DailyProgress.styled';
import { ReactComponent as IconPlus } from 'assets/images/icons/plus-circle.svg';
import FormWater from 'components/FormWater/FormWater';
import { useDispatch, useSelector } from 'react-redux';
import { selectWaterProgressData } from '../../redux/calendar/calendarSlice.selectors';
import { format } from 'date-fns';
import { getWaterProgressThunk } from '../../redux/calendar/calendarSlice';
import { GeneralModal } from 'components';
import { selectUser } from '../../redux/auth/authSelectors';
import { useTranslation } from 'react-i18next';
const DailyProgress = () => {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterProgressData);
  const user = useSelector(selectUser);
  const dailyNorma = waterData?.dailyNorma * 1000;
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getWaterProgressThunk());
  }, [dispatch, user]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const currentDate = `${format(new Date(), 'd')}/${format(
    new Date(),
    'L'
  )}/${new Date().getFullYear()}`;
  const currentDateData =
    waterData?.drunkedWater?.find(date => date.day === currentDate)
      ?.waterIntake ?? [];
  const drunkedWaterAmount = currentDateData?.reduce(
    (acc, curr) => (curr?.amount ?? 0) + acc,
    0
  );

  const dailyPercents = Math.round((drunkedWaterAmount / dailyNorma) * 100);
  const limitedDailyPercents = dailyPercents >= 100 ? 100 : dailyPercents;
  return (
    <StyledDailyProgress $dailyPercents={limitedDailyPercents}>
      <h3 className="title">{t('dailyProgress.today')}</h3>
      <div className="bottomContainer">
        <div className="blockLeft">
          <div className="progressContainer">
            <div className="progressBar"></div>
            <div className="progressBarBg"></div>
            <div className="progressPointer" />
            {limitedDailyPercents < 15 ? null : (
              <span className="progressBreakPoint p-0">0%</span>
            )}
            <span className="progressBreakPoint p-50">
              {limitedDailyPercents || 0}%
            </span>
            {limitedDailyPercents > 85 ? null : (
              <span className="progressBreakPoint p-100">100%</span>
            )}
          </div>
        </div>
        <button className="addWaterBtn" type="button" onClick={toggleModal}>
          <IconPlus className="plus" />
          <span className="textBtn">{t('dailyProgress.addWater')}</span>
        </button>
        {showModal && (
          <GeneralModal
            title={t('dailyProgress.addWater')}
            onClose={toggleModal}
            renderContent={onClose => <FormWater onSave={onClose} />}
          />
        )}
      </div>
    </StyledDailyProgress>
  );
};

export default DailyProgress;
