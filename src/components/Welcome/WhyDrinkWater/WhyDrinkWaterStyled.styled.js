import styled from 'styled-components';

export const WhyDrinkWaterStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  padding: 24px 16px;
  width: 100%;
  background-color: var(--secondary-white);
  color: var(--black);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 494px;
    height: 332px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 494px;
    height: 332px;
    /* height: 332px; */
    padding: 32px 24px;
  }

  h2 {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.11;
    margin: 0 0 12px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-left: 0px;
  }
  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    position: relative;
    padding-left: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 8px;
      height: 8px;

      background-color: var(--blue);
      border-radius: 50%;
      border: 1px solid white;
    }
  }
`;
