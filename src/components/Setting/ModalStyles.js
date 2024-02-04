// ModalStyles.js

import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2F2F2F;
  background-color: white;
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 1008px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;

  label {
    font-size: 18px;
    line-height: calc(24 / 18);
    color: #2F2F2F;
    display: block;
    margin-bottom: 8px;
  }

  input {
    font-family: inherit;
    font-size: 16px;
    line-height: calc(20 / 16);
    padding: 11px 10px;
    color: #407BFF;
    border: 1px solid #D7E3FF;
    border-radius: 6px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #9EBBFF;
    }

    &:not(:placeholder-shown):invalid {
      color: #EF5050;
      border-color: #EF5050;
      &::placeholder {
        color: #EF5050;
      }
    }
  }
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  gap: 16px;

  input {
    margin-right: 8px;
  }
`;

export const Button = styled.button`
  background-color: #407BFF;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #305dad;
  }
`;

export const Notification = styled.div`
  color: red;
  margin-top: 12px;
`;
