import styled from 'styled-components';
export const StyledFormDailyNorma = styled.form`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 8px;

  .formulas-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .formulas-string {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  .formula-box {
    display: flex;
    align-items: center;
    gap: 4px;
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
  .req-amount-container {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 24px;
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
    -webkit-appearance: none;
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
  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }

  //Inactive
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

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid var(--blue);
    background-color: var(--white);
    margin-right: 8px;
  }

  input[type='radio']:checked {
    background-color: var(--white);
  }

  input[type='radio']::before {
    content: '';
    display: block;
    width: 7px;
    height: 7px;
    margin: 3px;
    border-radius: 50%;
    background-color: var(--blue);
  }

  input[type='radio']:checked::before {
    background-color: var(--white);
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
