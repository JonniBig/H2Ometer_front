import React from 'react';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './ForgotPasswordPage.styled';

const ForgotPasswordPage = () => {
  return (
    <PageContainer>
      <FormContainer>
        <ForgotPasswordForm />
        <SignInLink to="/signin">Sign in</SignInLink>
      </FormContainer>
    </PageContainer>
  );
};

export default ForgotPasswordPage;
