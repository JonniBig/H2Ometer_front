import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignInLink = styled(Link)`
  color: blue;
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    color: darkblue;
    font-weight: 600;
    text-decoration: none;
  }
`;
