import styled from 'styled-components';

export const StyledGeneralModal = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    padding: 24px 12px;
    border: 1px solid rgb(136, 136, 136);
    border-radius: 10px;
    width: 100%;
    @media screen and (min-width: 768px) {
      width: 704px;
      top: 40%;
      padding: 32px 24px;
    }
    @media only screen and (min-width: 1440px) {
      max-width: 592px;
      top: 50%;
      left: 50%;
      padding: 32px 24px;
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
    cursor: pointer;
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
    }
  }
`;
