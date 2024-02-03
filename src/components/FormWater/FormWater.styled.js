import styled from 'styled-components';

export const StyledFormWater = styled.form`
  max-width: 256px;   
  @media screen and (min-width: 768px) {
    max-width: 656px;    
  }
  @media only screen and (min-width: 1440px) {
    max-width: 544px;    
  }

  .edit {
  display: flex;
  flex-direction: column;
  width: 194px;
  height: 112px;
}

.editTitle {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
  color: var(--black);
}

.editText {
  color:var(--black);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
}

.editBtnDiv {
  display: flex;
  align-items: center;
  gap: 7px;
}

.editBtn {
  box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  background-color: transparent;
  border-radius: 50%;
  border: solid 1px var(--secondary-blue);
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
}

.amountDiv {
  background-color: var(--secondary-skiblue);
  width: 92px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  & span {
    color: var(--blue);
    width: 72px;
    height: 24px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
  }
}

.timeDiv {
  display: flex;
  flex-direction: column;
  width: 182px;
  height: 76px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    width: 182px;
  }
  label{
    margin-bottom: 12px;
  color: var(--black);
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  }
}

.recordsField {
  &::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;}

  border: 1px solid var(--secondary-skiblue);
  border-radius: 6px;
  width: 120px;
  height: 44px;
  color: var(--blue);
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  transition: border var(--anim);
  outline: none;
  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
  &:hover,
  &:focus,
  &:active {
    border: 1px solid var(--secondary-orange);
    background-color: var(--secondary-skiblue);
  }
}

.enterDiv {
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    width: 656px;
    height: 80px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
  }
  label {
    margin-bottom: 16px;
    color: var(--black);
    font-family: Roboto;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;}
  }
}

.footerDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
}
.saveDiv {
  display: flex;
  & span {
    color: var(--blue);
    width: 72px;
    height: 24px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 18px;
    line-height: 1.33;
    text-align: center;
  }
}

.saveBtn {
  border: transparent;
  background-color: var(--blue);
  border-radius: 10px;
  color: var(--white);
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  width: 256px;
  height: 36px;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media only screen and (min-width: 1440px) {
    width: 160px;
  }
}
`;
