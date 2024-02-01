import React from 'react';
import { StyledHomePage } from './Home.styled';

import { Calendar, TodayList, DailyNorma, DailyProgress } from 'components';

const Home = () => {
  return (
    <StyledHomePage>
      <div className="conteiner">
        <div className="div1">
          <DailyNorma />
          <DailyProgress />
        </div>
        <div className="div2">
          <TodayList />
          <Calendar />
        </div>
      </div>
    </StyledHomePage>
  );
};

export default Home;
