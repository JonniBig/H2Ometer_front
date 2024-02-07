import React from 'react';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './ForgotPasswordPage.styled';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

  return (
    <PageContainer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <FormContainer>
        <ForgotPasswordForm />
        <SignInLink to="/signin">{t('signIn')}</SignInLink>
      </FormContainer>
    </PageContainer>
  );
};

export default ForgotPasswordPage;
