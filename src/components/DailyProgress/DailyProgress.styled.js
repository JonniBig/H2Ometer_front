import styled from 'styled-components';

export const StyledDailyProgress = styled.div`
  display: flex;
  flex-direction: column;
  // margin-bottom: 50px;

  .bottomContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 23px;
    max-width: 592px;

    @media screen and (min-width: 768px) {
      max-width: 100%;
      flex-direction: row;
      align-items: baseline;
    }
  }
  .title {
    font-size: 18px;
    line-height: 1.33;
    font-weight: 400;
    margin-bottom: 19px;
    color: var(--blue);

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
  }
  .blockLeft {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 356px;
    }
    @media screen and (min-width: 1440px) {
      width: 391px;
    }
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
    background-color: var(--blue);
    width: 100%;
    height: 36px;
    margin-top: 16px;
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    gap: 10px;
    border-radius: 10px;
    border: none;
    transform: box-shadow var(--anim-slow);

    &:hover,
    &:focus {
      box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    }

    @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
      margin-top: 0;
    }

    @media screen and (min-width: 1440px) {
      width: 178px;
    }
  }
  .textBtn {
    width: 94px;
  }
  .plus {
    width: 18px;
    height: 18px;
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
