import styled from 'styled-components';

export const Conteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;  
}
`;

export const StyledLogout = styled.div`
  width: 280px;
  height: 260px;
  border-radius: 10px;
  background: var(--white);
  padding: 32px 24px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
    top: 20%;
  }
  @media only screen and (min-width: 1440px) {
    top: 30%;
  }

  .logoutQuest {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 24px;
  }

  .closeModal {
    position: absolute;
    right: 24px;
    top: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 0;
  }

  .logoutBtns {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }

    @media only screen and (min-width: 1440px) {
      justify-content: flex-start;
    }
  }

  .logoutTitle {
    margin-bottom: 24px;
    font-size: 26px;
    font-weight: 500;
    line-height: 1.11;
  }

  .btnCan {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 232px;
    height: 36px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    color: var(--blue);
    background-color: var(--secondary-skiblue);

    &:hover,
    &:focus {
      box-shadow: 0px 6px 10px 0px rgba(64, 123, 255, 0.44);
    }

    &:active {
      cursor: inherit;
    }

    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
    }
  }

  .btnLog {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    width: 232px;
    height: 36px;
    border-radius: 10px;
    border: none;
    color: var(--white);
    background-color: var(--secondary-red);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

    &:hover,
    &:focus {
      box-shadow: 0px 8px 10px 0px rgba(64, 123, 255, 0.44);
    }
    &:active {
      cursor: inherit;
    }

    @media screen and (min-width: 768px) {
      width: 160px;
      height: 44px;
    }
  }
`;
