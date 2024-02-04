// SettingModalStyles.js
import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2F2F2F;
  background-color: white;
  width: 1008px;
  height: auto;
  max-height: 80vh;
  padding: 32px;
  border-radius: 10px;
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100vh;
    max-height: none;
    padding: 16px;
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
  flex-wrap: wrap;
  gap: 16px;

  input {
    margin-bottom: 8px;
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

export const ExitButton = styled.button`
  background-color: transparent;
  color: #dc3545;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.3s ease;

  position: fixed;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExitIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const FormGroupWrapper = styled.div`
  
`;


export const FormGroupPassword = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto; // Переміщення групи вправо
  width: 50%; // Ширина групи
`;

export const FormGroupPasswordWrapper = styled.div`
  // Стилі для wrapper за потреби
`;

export const ulinput = styled.div`  ;`
