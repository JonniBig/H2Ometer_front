import React from 'react';
import { StyledHomePage } from './Home.styled';

import { Calendar, TodayList, DailyNorma, DailyProgress } from 'components';





const Home = () => {
  return (
    <StyledHomePage>
      <div>home</div>
      <DailyNorma/>
      <TodayList />
      <DailyProgress />
      <Calendar />
    </StyledHomePage>
  );
};

export default Home;
