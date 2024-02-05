import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: ${({ $error }) => ($error ? 'red' : '#ccc')};
`;

export const Button = styled.button`
  padding: 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const Message = styled.div`
  color: ${props => (props.type === 'error' ? 'red' : 'green')};
  margin-top: 10px;
`;

export const LinkStyled = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 40px;
  color: blue;
  text-decoration: none;

  &:hover {
    font-weight: bold;
    color: darkblue;
  }
`;
