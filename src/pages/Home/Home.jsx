import React from 'react';
import { StyledHomePage } from './Home.styled';
import { Calendar, TodayList } from 'components';

const Home = () => {
  return (
    <StyledHomePage>
      <div>home</div>
      <TodayList />

      <Calendar />
    </StyledHomePage>
  );
};

export default Home;
