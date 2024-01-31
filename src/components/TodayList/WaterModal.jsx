import {
  Modal,
  ModalOverlay,
  ModalBody,
  useDisclosure,
  FormControl,
} from '@chakra-ui/react';
import React from 'react';
import {
  StyledAddBtn,
  StyledAmountDiv,
  StyledBtnlDiv,
  StyledCloseBtn,
  StyledEditBtn,
  StyledEditText,
  StyledEditTitle,
  StyledEditlDiv,
  StyledEnterLabel,
  StyledEnterlDiv,
  StyledFooterlDiv,
  StyledModalContent,
  StyledModalDiv,
  StyledModalHeader,
  StyledRecordsInput,
  StyledRecordsLabel,
  StyledSaveBtn,
  StyledSaveDiv,
  StyledTimelDiv,
} from './TodayList.styled';
import { ReactComponent as IconPlus } from 'assets/images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from 'assets/images/icons/minus-small.svg';

export const WaterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <StyledAddBtn onClick={onOpen}>+ Add water</StyledAddBtn>

      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="#000000cc" />
        <StyledModalContent>
          <StyledModalDiv>
            <StyledModalHeader>Add water</StyledModalHeader>

            <StyledCloseBtn onClick={onClose} />
          </StyledModalDiv>

          <StyledEditlDiv>
            <StyledEditTitle>Choose a value</StyledEditTitle>
            <StyledEditText>Amount of water</StyledEditText>
            <StyledBtnlDiv>
              <StyledEditBtn>
                <IconMinus stroke={'var(--blue)'} />
              </StyledEditBtn>
              <StyledAmountDiv>
                <span>ml</span>
              </StyledAmountDiv>
              <StyledEditBtn>
                <IconPlus stroke={'var(--blue)'} />
              </StyledEditBtn>
            </StyledBtnlDiv>
          </StyledEditlDiv>

          <ModalBody>
            <StyledTimelDiv>
              <FormControl>
                <StyledRecordsLabel>Recording time:</StyledRecordsLabel>
                <StyledRecordsInput placeholder="07:00" />
              </FormControl>
            </StyledTimelDiv>

            <StyledEnterlDiv>
              <FormControl>
                <StyledEnterLabel>
                  Enter the value of the water used:
                </StyledEnterLabel>
                <StyledRecordsInput placeholder="50" />
              </FormControl>
            </StyledEnterlDiv>
          </ModalBody>

          <StyledFooterlDiv>
            <StyledSaveDiv>
              <span>ml</span>
            </StyledSaveDiv>
            <StyledSaveBtn>Save</StyledSaveBtn>
          </StyledFooterlDiv>
        </StyledModalContent>
      </Modal>
    </>
  );
};
