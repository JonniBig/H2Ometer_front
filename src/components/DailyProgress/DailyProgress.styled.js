import styled from 'styled-components';

export const StyledDailyProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 23px;
  max-width: 592px;
  margin-bottom: 50px;
  .title {
    font-size: 18px;
    line-height: 1.33;
    margin-bottom: 19px;
  }
  .blockLeft {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 391px;
  }
  .progressContainer {
    position: relative;
    padding: 0 15px;
  }
  .progressBar {
    position: relative;
    width: 100%;
    background-color: var(--secondary-skiblue);
    height: 8px;
    border-radius: 4px;
    margin-bottom: 7px;
    display: flex;
    align-items: center;
    &::before {
    }
  }
  .progressPointer {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--white);
    border: 1px solid var(--blue);
    position: absolute;
    transform: translateX(-50%);
    top: -3px;
    z-index: 2;
    left: ${({ $dailyPercents }) => `${$dailyPercents}%`};
  }
  .progressBarBg {
    z-index: 1;
    position: absolute;
    top: 0;
    width: ${({ $dailyPercents }) => `${$dailyPercents - 5}%`};
    background-color: var(--blue);
    height: 8px;
    border-radius: 4px;
  }
  .progressBreakPoint {
    position: relative;
    color: var(--blue);
    text-align: center;
    font-size: 12px;
    line-height: 1.33;
    padding-top: 16px;
    display: block;
    position: absolute;
    &::before {
      content: '';
      width: 2px;
      height: 8px;
      background-color: var(--secondary-skiblue);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .addWaterBtn {
  }
  .p-0 {
    left: 15px;
    transform: translateX(-30%);
  }
  .p-50 {
    font-weight: 600;
    font-size: 14px;
    transform: translateX(-50%);
    left: ${({ $dailyPercents }) => `${$dailyPercents}%`};
    z-index: 1;
    background-color: var(--white);
    padding: 16px 15px 0 15px;
  }
  .p-100 {
    right: 15px;
    transform: translateX(40%);
  }
`;
