import React from 'react';
import { useParams } from 'react-router-dom';
import { UpdatePasswordForm } from '../../components/UpdatePasswordForm/UpdatePasswordForm';
import {
  PageContainer,
  FormContainer,
  SignInLink,
} from './UpdatePasswordPage.styled';

const UpdatePasswordPage = () => {
  const { token } = useParams();

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
