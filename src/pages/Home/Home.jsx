import React from 'react';
import { StyledHomePage } from './Home.styled';
import { Calendar, DailyProgress, TodayList } from 'components';

const Home = () => {
  return (
    <StyledHomePage>
      <div>home</div>
      <TodayList />
      <DailyProgress />
      <Calendar />
    </StyledHomePage>
  );
};

export default Home;
