import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: 320px;
  height: 145px;
  padding: 20px;
  box-shadow: 0px 6px 10px 0px rgba(64, 123, 255, 0.44);
  border: 2px solid white;
  display: flex;
  border-radius: 8px;
  background-color: var(--secondary-blue);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-color: ${({ $error }) => ($error ? 'red' : '#ccc')};
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3266d9;
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
