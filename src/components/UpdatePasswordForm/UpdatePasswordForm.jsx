import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetPasswordThunk } from '../../redux/auth/authSlice';
import { Form, Input, Button, Message } from './UpdatePasswordForm.styled';
import Loader from '../Loader/Loader';
import { LOGIN_ROUTE } from 'constants/routes';
import { useTranslation } from 'react-i18next';

export const UpdatePasswordForm = ({ token }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { t } = useTranslation();
  const {
    resetPasswordSuccess,
    resetPasswordSuccessMessage,
    resetPasswordError,
  } = useSelector(state => state.auth);

  useEffect(() => {
    if (resetPasswordSuccess) {
      setTimeout(() => {
        navigate(LOGIN_ROUTE);
      }, 3000);
    }
  }, [resetPasswordSuccess, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    dispatch(resetPasswordThunk({ newPassword, token }))
      .then(({ payload }) => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      <Input
        type="password"
        placeholder={t('form.placeholders.newPassword')}
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder={t('form.placeholders.confirmPassword')}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
      />
      <Button type="submit" disabled={isLoading}>
        {t('form.buttons.submit')}
      </Button>
      <Message
        className={
          resetPasswordSuccess ? 'success' : resetPasswordError ? 'error' : ''
        }
      >
        {resetPasswordSuccess
          ? resetPasswordSuccessMessage
          : resetPasswordError}
      </Message>
    </Form>
  );
};

export default UpdatePasswordForm;
