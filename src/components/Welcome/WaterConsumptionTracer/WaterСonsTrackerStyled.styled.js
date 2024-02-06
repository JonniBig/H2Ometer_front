import styled from 'styled-components';

export const WaterConsTrackerStyled = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 439px;
    height: 366px;
    margin-top: 80px;
  }
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  p {
    width: 197px;
    font-size: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      width: 100%;
      font-size: 26px;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    padding-left: 0px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding-left: 0;
    }
    @media screen and (min-width: 1440px) {
      flex-direction: column;
    }
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    @media screen and (min-width: 768px) {
      width: 224px;
      height: 40px;
    }
  }
  img {
    width: 32px;
    height: 32px;
    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
  button {
    width: 100%;
    height: 36px;
    padding: 8px 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    cursor: pointer;
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: none;
    border-radius: 10px;
    &:hover,
    &:focus {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active {
      box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.25);
    }
    @media screen and (min-width: 768px) {
      width: 336px;
      height: 44px;
      font-size: 18px;
      line-height: 1.3;
      padding: 10px 30px;
    }
    @media screen and (min-width: 1440px) {
      width: 384px;
    }
  }
`;
