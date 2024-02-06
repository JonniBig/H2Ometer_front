import styled from 'styled-components';

export const Conteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
`;
export const SettingStyled = styled.div`
  max-width: 100%;
  padding: 32px 12px;
  z-index: 100;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 32px 24px;
    width: 704px;
    height: 860px;
  }
  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    width: 1008px;
    height: 592px;
  }

  .imageModal {
    width: 80px;
    height: 80px;

    object-position: center;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  .modalSetting {
    color: rgba(47, 47, 47, 1);
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 24px;
    display: block;
  }
  .modalPhotoText {
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
  }
  .modalPhotoList {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .modalListPhoto {
    border: 1px solid black;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-right: 8px;
  }
  .modalFotoInput {
    display: none;
  }
  .modalListUpload {
    cursor: pointer;
  }
  .upload_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .uploadText {
    color: rgba(64, 123, 255, 1);
    cursor: pointer;
    font-size: 14px;

    font-weight: 500;
    line-height: 18px;
    font-size: 14px;
  }
  .uploadIcon {
    cursor: pointer;
    margin-right: 8px;
    width: 16px;
    height: 16px;
    display: block;
  }
  .photo_div {
    border-radius: 80px;
    width: 80px;
    height: 80px;

    margin-right: 8px;
  }
  .modalForm {
    @media screen and (min-width: 1440px) {
      display: flex;
      gap: 0px 24px;
      flex-wrap: wrap;
    }
  }
  .modalGenderText {
    font-size: 18px;

    font-weight: 500;
    line-height: 20px;
    margin-bottom: 12px;
  }
  .genderInput {
    position: relative;
    height: 14px;
    width: 14px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
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
    border: 2px solid dodgerblue;
  }
  .genderInput:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: dodgerblue;
    transform: translate(-53%, -54%);
    visibility: visible;
  }

  .modalGenderBlock {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1280px) {
    .modalGenderBlock {
      margin-bottom: 52px;
    }
  }
  .genderLabel {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 8px;
  }

  .genderLabel:first-of-type {
    margin-right: 24px;
  }
  .modalInput {
    width: 256px;

    padding: 12px 10px;
    display: block;
    border-radius: 6px;
    color: #407bff;
    border: 1px solid #d7e3ff;
    &:focus {
      outline: none;
      border-color: #d7e3ff;
      box-shadow: 0 0 5px #d7e3ff;
    }
  }
  ::placeholder {
    color: #9ebbff;
  }

  .inputError {
    color: #ef5050;
    border-color: #ef5050;
  }
  .error {
    font-size: 14px;
    color: #ef5050;
    padding-bottom: 4px;
  }
  .inputContainer {
    width: 256px;
    position: relative;
  }
  @media screen and (min-width: 768px) {
    .modalInput {
      width: 392px;
    }
    .inputContainer {
      width: 392px;
    }
  }
  .modalInputData {
    margin-bottom: 24px;
  }
  .modalPasswordText {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 12px;
  }
  .modalInput_password {
    margin-bottom: 12px;
  }

  .passwordLabel {
    margin-bottom: 8px;
    display: block;
  }
  .label {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
  .modalSubmit {
    color: white;
    font-weight: 500;
    line-height: 20px;
    font-size: 16px;
    border: none;
    display: block;
    margin: 0 auto;
    width: 256px;
    height: 38px;
    padding: 8px 30px;
    border-radius: 10px;
    background: rgba(64, 123, 255, 1);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: 768px) {
    .modalSubmit {
      width: 160px;
      height: 44px;
      font-size: 18px;

      line-height: 24px;
      padding: 10px 30px;
      margin: 0;
      margin-left: auto;
      text-align: center;
    }
  }

  .togglePasswordIcon {
    position: absolute;
    top: 58%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .passwordInputContainer:last-of-type {
    margin-bottom: 24px;
  }
  .passwordInputContainer {
    position: relative;
  }

  .closeBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    width: 24px;
    height: 24px;
    padding: 0;
    position: absolute;
    top: 38px;
    right: 12px;
    cursor: pointer;
  }

  .closeBtn svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    .closeBtn {
      right: 24px;
    }
  }
`;
