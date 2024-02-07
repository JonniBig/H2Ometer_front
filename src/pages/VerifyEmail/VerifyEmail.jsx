import { LOGIN_ROUTE } from 'constants/routes';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom/dist';
import { verifyEmailThunk } from '../../redux/auth/authSlice';
import { MessageWrapper } from './VerifyEmail.styled';
import Loader from '../../components/Loader/Loader';
import { PageContainer } from 'pages/ForgotPasswordPage/ForgotPasswordPage.styled';

const VerifyEmail = () => {
  const dispatch = useDispatch();
  // const { token } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

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
    <PageContainer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <MessageWrapper>{isLoading ? <Loader /> : message}</MessageWrapper>
    </PageContainer>
  );
};
export default VerifyEmail;
