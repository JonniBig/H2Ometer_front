import styled from 'styled-components';

export const StyledTodayDiv = styled.div`
  background-color: var(--secondary-white);
  font-family: Roboto;
  width: 264px;
  height: 258px;
  display: flex;
  flex-direction: column;
  margin: 24px 8px 24px 8px;
  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
    margin: 32px 24px 24px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const StyledTitle = styled.h2`
  color: var(--black);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const StyledAddDiv = styled.div`
  width: 264px;
  height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
    width: 565px;
  }
`;

export const StyledAddBtn = styled.button`
  display: flex;
  gap: 8px;
  padding: 1px;
  color: var(--blue);
  border: none;
  background-color: transparent;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
  & svg {
    width: 16px;
    height: 16px;
    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
    & use {
      fill: var(--blue);
      transition: fill var(--anim);
    }
  }
  &:hover {
    cursor: pointer;
    color: var(--secondary-orange);
    & use {
      fill: var(--secondary-orange);
    }
  }
`;

export const StyledList = styled.ul`
  height: 212px;
  padding-left: 0px;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: var(--secondary-blue);
    border-radius: 50px;
    border: 1px solid var(--secondary-white);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-blue);
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-blue);
  }
`;

export const StyledText = styled.p`
  color: var(--blue);
  font-family: Roboto;
  font-size: 14px;
  text-align: center;

  line-height: 1.25;
`;
