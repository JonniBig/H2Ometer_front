import React from 'react';
import { StyledHomePage } from './Home.styled';
import { Calendar, TodayList, DailyNorma } from 'components';


const Home = () => {
  return (
    <StyledHomePage>
      <div>home</div>
      <DailyNorma/>
      <TodayList />

      <Calendar />
    </StyledHomePage>
  );
};

export default Home;
