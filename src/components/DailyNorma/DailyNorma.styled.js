import styled from 'styled-components';
export const StyledDailyNorma = styled.div`
  background-color: var(--white);
  border: 1px solid var(--secondary-white);
  width: 166px;
  height: 74px;
  padding: 8px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;


  @media screen and (min-width: 768px) {
    height: 76px;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }

  .content {
    display: flex;
    align-items: center;

    margin: 0px;
    gap: 12px;
  }

  .edit {
    background: none;
    border: none;
    color: var(--secondary-blue);
    cursor: pointer;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    &:hover {
      color: var(--secondary-orange);
    }
  }

  .volume {
    margin: 0;
    color: var(--blue);
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
  }
  .overlay {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }

  .modal {
    background-color: var(--white);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // translate: -297px -375px;
    padding: 32px 24px;
    border: 1px solid #888;
    border-radius: 8px;
    // max-width: 592px;
    width: calc(100% - 30px);
    height: 100hw;
  }

  @media screen and (min-width: 768px) {
    .modal{
      max-width: 704px;
    }
  }
  @media screen and (min-width: 1440px) {
    .modal{
      height: auto;
    }
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .close {
    color: var(--blue);
    float: right;
    font-size: 26px;
    font-weight: thin;
    cursor: pointer;

    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
    }
  }
`;
