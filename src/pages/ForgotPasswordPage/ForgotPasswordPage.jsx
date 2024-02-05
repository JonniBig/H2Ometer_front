import React from 'react';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './ForgotPasswordPage.styled';
import { useSelector } from 'react-redux';

const ForgotPasswordPage = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <PageContainer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <FormContainer>
        <ForgotPasswordForm />
        <SignInLink to="/signin">Sign in</SignInLink>
      </FormContainer>
    </PageContainer>
  );
};

export default ForgotPasswordPage;
