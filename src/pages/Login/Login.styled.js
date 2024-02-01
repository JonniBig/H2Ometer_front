import styled from 'styled-components';
import backgroundMP from '../../assets/images/signin-signup/backgroundMP.png';
import bottleSigninDecktop from '../../assets/images/signin-signup/bottleSigninDecktop.png';
import backgrBottleTab from '../../assets/images/signin-signup/backgrBottleTab.png';
import bottleMob from '../../assets/images/signin-signup/bottleMob.png';

export const StyledLoginPage = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
  }

  background-image: url(${bottleMob});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${backgrBottleTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundMP}), url(${bottleSigninDecktop});
    background-size: contain;
  }

  .login-form-container {
    max-width: 384px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  // .container {
  //   max-width: 400px;
  //   margin: 0 auto;
  //   padding: 20px;
  // }

  h1 {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    text-align: start;
    margin-bottom: 16px;
  }

  form {
    background-color: #fff;
  }

  form label {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  form input {
    width: 100%;
    padding: 12px 10px;
    margin-top: 8px;
    margin-bottom: 16px;
    border: 1px solid var(--secondary-skiblue);
    border-radius: 6px;
    box-sizing: border-box;
  }
  input::placeholder {
    color: var(--secondary-blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  form button {
    width: 100%;
    padding: 10px 30px;
    margin-bottom: 16px;
    border: none;
    border-radius: 10px;
    background: var(--blue);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  form button:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  form button:active {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
  }

  .error-message {
    color: #dc3545;
    font-size: 14px;
    margin-top: 5px;
  }

  a {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--blue);
    text-decoration: none;
  }

  a:hover {
    color: var(--secondary-orange);
  }
`;
