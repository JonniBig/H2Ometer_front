import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordThunk } from '../../redux/auth/authSlice';
import {
  FormWrapper,
  Input,
  Button,
  Message,
} from './ForgotPasswordForm.styled';
import Loader from '../Loader/Loader';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();
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
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            $error={emailError || forgotPasswordStatus === 'failed'}
          />
          <Button type="submit" disabled={forgotPasswordStatus === 'loading'}>
            Send
          </Button>
          {forgotPasswordStatus === 'failed' && (
            <Message type="error">
              {forgotPasswordError || 'Error occurred'}
            </Message>
          )}
          {forgotPasswordStatus === 'succeeded' && (
            <Message>Email sent successfully!</Message>
          )}
          {emailError && <Message type="error">Invalid email format.</Message>}
        </form>
      )}
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
