import React from 'react';
import { StyledMainPageBackgroun } from './Main.styled';
import { Loader, Welcome } from 'components';

const Main = () => {
  return (
    <StyledMainPageBackgroun>
      <Loader />
      <Welcome />
    </StyledMainPageBackgroun>
  );
};

export default Main;
