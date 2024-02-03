import React, { useEffect, useState } from 'react';
import { LoaderStyledHome, StyledHomePage } from './Home.styled';

import {
  Calendar,
  TodayList,
  DailyNorma,
  DailyProgress,
  Loader,
} from 'components';
import { useSelector } from 'react-redux';

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const loadData = async () => {
      setShowLoader(false);
    };
    loadData();
  }, []);
  return (
    <StyledHomePage className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      {showLoader ? (
        <LoaderStyledHome>
          <Loader />
        </LoaderStyledHome>
      ) : (
        <div className="conteiner">
          <div className="div1">
            <DailyNorma />
            <div className="bottle-image"></div>
            <DailyProgress />
          </div>
          <div className="div2">
            <TodayList />
            <Calendar />
          </div>
        </div>
      )}
    </StyledHomePage>
  );
};

export default Home;
