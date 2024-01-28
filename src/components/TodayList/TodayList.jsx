import React from 'react';
import {
  StyledAddBtn,
  StyledAddDiv,
  StyledList,
  StyledText,
  StyledTitle,
  StyledTodayDiv,
} from './TodayList.styled';
import sprite from '../../assets/images/icons/sprite.svg';

const TodayList = () => {
  return (
    <StyledTodayDiv>
      <StyledTitle>Today</StyledTitle>
      <StyledAddDiv>
        <StyledList>
          <li>
            <StyledText>You haven't drank any water today</StyledText>
            <li>
              <StyledAddBtn>
                <svg>
                  <use href={sprite + '#plus'}></use>
                </svg>
                Add water
              </StyledAddBtn>
            </li>
          </li>
        </StyledList>
      </StyledAddDiv>
    </StyledTodayDiv>
  );
};

export default TodayList;
