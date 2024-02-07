import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordThunk } from '../../redux/auth/authSlice';
import {
  FormWrapper,
  Form,
  Input,
  Button,
  Message,
} from './ForgotPasswordForm.styled';
import Loader from '../Loader/Loader';
import { useTranslation } from 'react-i18next';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { forgotPasswordStatus, forgotPasswordError } = useSelector(
    state => state.auth
  );

  const validateEmail = email => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    setEmailError(!isValidEmail);

    if (!isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }

    dispatch(forgotPasswordThunk(email));
  };

  return (
    <FormWrapper>
      {forgotPasswordStatus === 'loading' ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit}>
          <div className="forgot-form container">
            <Input
              type="email"
              placeholder={t('resetPassword.enterEmail')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              $error={emailError || forgotPasswordStatus === 'failed'}
            />
            <Button type="submit" disabled={forgotPasswordStatus === 'loading'}>
              {t('resetPassword.sendButton')}
            </Button>
          </div>
          {forgotPasswordStatus === 'failed' && (
            <Message type="error">
              {forgotPasswordError || t('resetPassword.errorOccurred')}
            </Message>
          )}
          {forgotPasswordStatus === 'succeeded' && (
            <Message>{t('resetPassword.emailSent')}</Message>
          )}
          {emailError && (
            <Message type="error">{t('resetPassword.invalidEmail')}</Message>
          )}
        </Form>
      )}
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
