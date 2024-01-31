import React from 'react';
import {
  StyledAddDiv,
  StyledList,
  StyledText,
  StyledTitle,
  StyledTodayDiv,
} from './TodayList.styled';

import { WaterModal } from './WaterModal';

const TodayList = () => {
  return (
    <StyledTodayDiv>
      <StyledTitle>Today</StyledTitle>
      <StyledAddDiv>
        <StyledList>
          <li>
            <StyledText>You haven't drank any water today</StyledText>
            <li>
              <WaterModal />
            </li>
          </li>
        </StyledList>
      </StyledAddDiv>
    </StyledTodayDiv>
  );
};

export default TodayList;
