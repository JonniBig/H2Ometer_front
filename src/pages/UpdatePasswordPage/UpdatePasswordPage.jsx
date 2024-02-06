import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { UpdatePasswordForm } from '../../components/UpdatePasswordForm/UpdatePasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './UpdatePasswordPage.styled';

const UpdatePasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <PageContainer>
      <FormContainer>
        <UpdatePasswordForm token={token} />
        <SignInLink to="/signin">Sign in</SignInLink>
      </FormContainer>
    </PageContainer>
  );
};

export default UpdatePasswordPage;
