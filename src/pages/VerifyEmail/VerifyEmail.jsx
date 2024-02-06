import { LOGIN_ROUTE } from 'constants/routes';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom/dist';
import { verifyEmailThunk } from '../../redux/auth/authSlice';
import { MessageWrapper } from './VerifyEmail.styled';
import Loader from '../../components/Loader/Loader';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  // const { token } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(verifyEmailThunk(token)).then(action => {
      setIsLoading(false);
      if (verifyEmailThunk.fulfilled.match(action)) {
        setMessage(action.payload.message);
        setTimeout(() => navigate(LOGIN_ROUTE), 3000);
      } else {
        setMessage(action.payload || 'Failed to verify email.');
      }
    });
  }, [dispatch, token, navigate]);

  return (
    <MessageWrapper>
      <h2>hi</h2>
      {isLoading ? <Loader /> : message}
    </MessageWrapper>
  );
};
export default VerifyEmail;
