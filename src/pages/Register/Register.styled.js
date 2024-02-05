import styled from 'styled-components';
import backgroundMP from '../../assets/images/signin-signup/backgroundMP.png';
import bottleSigninDecktop from '../../assets/images/signin-signup/bottleSigninDecktop.png';
import backgrBottleTab from '../../assets/images/signin-signup/backgrBottleTab.png';
import bottleMob from '../../assets/images/signin-signup/bottleMob.png';
import backgrSigninMob from '../../assets/images/signin-signup/backgrSigninMob.png';

export const StyledRegisterPage = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(${backgrSigninMob}), url(${bottleMob});
  background-position: bottom, center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-position: top;
    background-image: url(${backgrBottleTab});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundMP});
    background-size: contain;
  }

  .container {
    margin: 0 auto;
    max-width: 320px;
    padding: 0px 20px;
    display: flex;

    @media screen and (min-width: 768px) {
      max-width: 768px;
      padding: 0px 32px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 1440px;
      padding: 0px 0px 0px 0px;
      display: flex;
    }
  }

  .backgr-elem-decktop {
    display: none;
    @media screen and (min-width: 1440px) {
      display: block;
      margin-top: 60px;
      background-image: url(${bottleSigninDecktop});
      background-position: bottom;
      background-repeat: no-repeat;
      width: 916px;
      height: 680px;
    }
  }

  .content {
    @media screen and (min-width: 1440px) {
      width: 384px;
      display: flex;
      align-items: center;
    }
  }

  .register-form-container {
    border-radius: 10px;
    background: white;
    color: black;
    max-width: 280px;
    margin: 68px auto;
    // background-color: transparent;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 768px) {
      margin-top: 88px;
      margin-left: 0;
      max-width: 336px;
      height: 312px;
    }

    @media screen and (min-width: 1440px) {
      max-width: 384px;
      height: 312px;
    }
  }

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
    color: var(--black);
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
    margin-bottom: 6px;
    border: 1px solid var(--secondary-skiblue);
    border-radius: 6px;
    box-sizing: border-box;
  }

  .errorInput{
    border: 1px solid var(--secondary-red);
    color: var(--secondary-red)
  }

  .password-container{
    position: relative;
   }
    .show-psw-btn{
      
      position: absolute;
      border: none;
      top: calc(13% + 34px);
      right: 4%;
      cursor: pointer;
    }

  input::placeholder {
    color: var(--secondary-blue);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }


  .errorMsg{    
    font-size: 12px;  
    color: var(--secondary-red);
  }

  form button {
    width: 100%;
    padding: 10px 30px;
    margin: 16px 0;
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
