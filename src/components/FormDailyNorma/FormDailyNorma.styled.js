import styled from 'styled-components';

export const StyledFormDailyNorma = styled.form`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 8px;

  .formulas-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) {
    .formulas-container {
      gap: 12px;
    }
  }
  .formulas-string {
    display: block;
    gap: 24px;
  }
  @media screen and (min-width: 768px) {
    .formulas-string {
      display: flex;
      align-items: flex-start;
      gap: 24px;
    }
  }
  .formula-box {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 768px) {
    .formula-box {
      margin-bottom: 0px;
    }
  }
  .formula {
    color: var(--blue);
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  .coment-container {
    display: flex;
    padding: 10px;
    margin-bottom: 24px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #d7e3ff;
  }
  .coment {
    color: var(--blue);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  .values-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .to-calc {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .gender-container {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .genderBtn {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  .genderLabel {
    color: #2f2f2f;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
  }
  .genderInput {
    position: relative;
    height: 14px;
    width: 14px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    margin-right: 6px;
    cursor: pointer;
  }
  .genderInput::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid dodgerblue;
  }
  .genderInput:checked::after {
    content: '';
    position: absolute;
    top: 55%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: dodgerblue;
    transform: translate(-53%, -54%);
    visibility: visible;
  }
  .req-amount-container {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
  }
  .req-amount-text {
    width: 200px;
    @media only screen and (min-width: 768px) {
      width: 100%;
    }
  }
  .volume {
    color: var(--blue);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .personal-amount-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
  }
  label {
    display: block;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 8px;
  }

  input[type='number'] {
    margin: 0;
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 1px solid var(--secondary-skiblue);
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-clear-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number']::placeholder {
    color: var(--secondary-blue);
  }

  //focused
  input[type='number']:focus::placeholder {
    color: var(--blue);
  }

  //Placeholder error
  .input-error input[type='number']::placeholder {
    color: var(--secondary-red);
  }

  //Input focused
  input[type='number']:focus {
    border: 1px solid var(--secondary-skiblue);
  }

  //Input  error
  .input-error input[type='number'] {
    border-color: (--secondary-red);
  }

  //Error message
  .error-message {
    color: (--secondary-red);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  .save-btn-container {
    display: flex;
    justify-content: flex-end;
  }
  .save-btn {
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: var(--blue);
    color: var(--white);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
  }
  .Toastify__toast-container {
    width: 30%;
    padding: 20px;
    box-sizing: border-box;
    position: fixed;
    bottom: 20px;
    left: 0;
    z-index: 9999;
  }
  .Toastify__toast--success {
    background-color: #28a745;
  }
  .Toastify__toast--error {
    background-color: #dc3545;
  }
`;
