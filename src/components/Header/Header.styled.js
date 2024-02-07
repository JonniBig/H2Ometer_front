import styled from 'styled-components';

export const Conteiner = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 8px 20px 0px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 16px 32px 0px 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 12px 112px 0px 112px;
  }
`;

export const StyledHeader = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  z-index: 10;
  position: relative;
  .btnTema {
    border: var(--blue);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    background-color: var(--secondary-skiblue);
    padding: 0;
    position: relative;
    width: 58px;
    height: 24px;
    border-radius: 25px;
    transition: background-color 0.25s ease-in-out;
    display: flex;
    justify-content: center;
  }
`;

export const StyledLogo = styled.div`
  font-weight: 700;
  margin: 0;
`;
