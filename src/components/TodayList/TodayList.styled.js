import styled from 'styled-components';
import {
  FormLabel,
  Input,
  ModalCloseButton,
  ModalContent,
} from '@chakra-ui/react';

export const StyledTodayDiv = styled.div`
  background-color: var(--secondary-white);
  font-family: Roboto;
  width: 264px;
  height: 258px;
  display: flex;
  flex-direction: column;
  margin: 24px 8px 24px 8px;

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 276px;
    margin: 32px 24px 24px 24px;
  }
  @media only screen and (min-width: 1440px) {
    width: 544px;
    height: 260px;
  }
`;

export const StyledTitle = styled.h2`
  color: var(--black);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
  }
`;

export const StyledAddDiv = styled.div`
  width: 264px;
  height: 212px;
  @media screen and (min-width: 768px) {
    height: 260px;
    width: 565px;
  }
`;

export const StyledAddBtn = styled.button`
  display: flex;
  gap: 8px;
  padding: 1px;
  color: var(--blue);
  border: none;
  background-color: transparent;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  transition: border var(--anim);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--secondary-orange);
  }
`;

export const StyledList = styled.ul`
  height: 212px;
  padding-left: 0px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    margin-block: 5px;
    background: var(--secondary-blue);
    border-radius: 50px;
    border: 1px solid var(--secondary-white);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--secondary-blue);
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-blue);
  }
`;

export const StyledText = styled.p`
  color: var(--blue);
  font-family: Roboto;
  font-size: 14px;
  text-align: center;
  line-height: 1.25;
`;

export const StyledCloseBtn = styled(ModalCloseButton)`
  display: flex;
  color: var(--blue);
  border: none;
  background-color: transparent;
  transition: border var(--anim);
  & svg {
    width: 24px;
    height: 24px;
    & use {
      fill: var(--blue);
      transition: fill var(--anim);
    }
  }
  &:hover,
  &:focus {
    cursor: pointer;
    color: var(--secondary-orange);
    & use {
      fill: var(--secondary-orange);
    }
  }
`;

export const StyledModalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledModalHeader = styled.h2`
  color: var(--black);
  font-family: Roboto;
  font-size: 26px;
  line-height: 1.23;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

export const StyledEditlDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 194px;
  height: 112px;
`;

export const StyledBtnlDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StyledEditBtn = styled.button`
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
`;

export const StyledAmountDiv = styled.div`
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
`;

export const StyledEditTitle = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const StyledEditText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
`;

export const StyledTimelDiv = styled.div`
  display: flex;
  width: 182px;
  height: 76px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  @media only screen and (min-width: 1440px) {
    width: 182px;
  }
`;

export const StyledEnterlDiv = styled.div`
  display: flex;
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
`;

export const StyledFooterlDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledSaveDiv = styled.div`
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
`;

export const StyledSaveBtn = styled.button`
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
`;

export const StyledModalContent = styled(ModalContent)`
  background-color: var(--white);
  position: absolut;
  border-radius: 10px;
  max-width: 280px;
  margin-right: auto;
  top: 40px;
  left: 6%;
  padding: 24px 12px 24px 12px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    left: 4%;
    padding: 32px 24px 32px 24px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 592px;
    left: 30%;
  }
`;

export const StyledRecordsLabel = styled(FormLabel)`
  margin-bottom: 12px;
  color: var(--black);
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
`;

export const StyledEnterLabel = styled(FormLabel)`
  margin-bottom: 16px;
  color: var(--black);
  font-family: Roboto;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
`;

export const StyledRecordsInput = styled(Input)`
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
`;
