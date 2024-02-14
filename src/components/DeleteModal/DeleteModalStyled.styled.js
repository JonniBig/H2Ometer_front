import styled from 'styled-components';

export const DeleteStyled = styled.div`
  .deleteQuest {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 24px;
    width: 200px;
    @media only screen and (min-width: 768px) {
      width: 100%;
    }
  }
  .deleteBtns {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
  .btnCan {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  .btnDelete {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
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
