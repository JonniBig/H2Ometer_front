import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { UpdatePasswordForm } from '../../components/UpdatePasswordForm/UpdatePasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './UpdatePasswordPage.styled';
import { useTranslation } from 'react-i18next';

const UpdatePasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { t } = useTranslation();

  return (
    <PageContainer>
      <FormContainer>
        <UpdatePasswordForm token={token} />
        <SignInLink to="/signin">{t('signIn')}</SignInLink>
      </FormContainer>
    </PageContainer>
  );
};

export default UpdatePasswordPage;
