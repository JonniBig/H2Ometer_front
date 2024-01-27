import React from 'react';
import { StyledHomePage } from './Home.styled';
import { Calendar } from 'components';

const Home = () => {
  return (
    <StyledHomePage>
      <div>home</div>
      <Calendar />
    </StyledHomePage>
  );
};

export default Home;
