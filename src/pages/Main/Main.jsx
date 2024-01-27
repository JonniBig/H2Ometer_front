import React from 'react';
import { StyledMainPageBackgroun } from './Main.styled';
import { Welcome } from 'components';

const Main = () => {
  return (
    <StyledMainPageBackgroun>
      <Welcome />
    </StyledMainPageBackgroun>
  );
};

export default Main;
