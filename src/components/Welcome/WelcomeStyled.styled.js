import styled from 'styled-components';

export const Conteiner = styled.div`
  margin: 0 auto;
  max-width: 280px;
  padding: 0px 20px;
  outline: 2px solid black;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0px 112px;
  }
`;

export const WelcomeStyled = styled.div`
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  outline: 2px solid red;

  @media screen and (min-width: 768px) {
    max-width: 707px;
    align-items: flex-start;
    gap: 60px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1404px;
    max-height: 582px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
  }
`;
