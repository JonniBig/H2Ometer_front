import styled from 'styled-components';

export const StyledCalendar = styled.div`
  // background-color: var(--secondary-white);
  // max-width: 544px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    // display: grid;
    // grid-template-columns: repeat(10, 34px);
    // gap: 22px;
    min-height: 290px;
    align-content: flex-start;

    @media screen and (min-width: 768px) {
      gap: 20px 34px;
    }

    @media screen and (min-width: 1440px) {
      gap: 20px 22px;
    }
  }

  .cell {
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

    @media screen and (min-width: 768px) {
      width: 34px;
      height: 34px;
    }
    /* border: 1px solid var(--secondary-white); */
    transition: border var(--anim);
    /* &:hover,
    &:focus {
      border: 1px solid var(--secondary-orange); */
    /* } */
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
