import styled from 'styled-components';

export const StyledCalendar = styled.div`
  color: black;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .title {
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }
  .changeMonth {
    color: var(--blue);
    font-size: 16px;
    line-height: 1.25;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      width: 175px;
    }
  }
  .navBtn {
    background-color: transparent;
    border: none;
    padding: 10px;
  }
  .cellsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 26px;
    min-height: 480px;
    align-content: flex-start;

    @media screen and (min-width: 768px) {
      gap: 20px 34px;
      min-height: 292px;
    }
    @media screen and (min-width: 1440px) {
      gap: 20px 22px;
    }
  }
  .cell {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .dayNumber {
    background-color: var(--white);
    display: flex;
    width: 32px;
    height: 32px;
    border-radius: 17px;
    justify-content: center;
    align-items: center;
    line-height: 1.25;
    border: 1px solid var(--secondary-orange);
    cursor: pointer;
    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
    }
    transition: border var(--anim);
    &.full {
      border: 1px solid var(--secondary-white);
    }
  }
  .percents {
    text-align: center;
    color: var(--secondary-blue);
    font-family: Roboto;
    font-size: 12px;
    line-height: 1.5;
  }
`;
