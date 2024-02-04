import { LOGIN_ROUTE } from 'constants/routes';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom/dist';
import { verifyEmailThunk } from '../../redux/auth/authSlice';
import { MessageWrapper } from './VerifyEmail.styled';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('useEffect запускається');
    dispatch(verifyEmailThunk(token)).then(action => {
      if (verifyEmailThunk.fulfilled.match(action)) {
        setMessage(action.payload.message);
        setTimeout(() => navigate(LOGIN_ROUTE), 3000);
      } else {
        setMessage(action.payload || 'Failed to verify email.');
      }
    });
  }, [dispatch, token, navigate]);

  return <MessageWrapper>{message}</MessageWrapper>;
};
export default VerifyEmail;
