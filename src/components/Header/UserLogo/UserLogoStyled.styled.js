import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  position: relative;
`;
export const UserLogoStyled = styled.div`
 
  display: flex;
  align-items: center;
  gap: 4px;

  .user {
    display:flex;
   align-items: center;
   gap: 8px;

  }
  .name {
    font-size: 16px;
    line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 18px;

  }
  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }

`;

export const ButtonMenuStyled = styled.button`

  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    
    border-radius: 50%;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

    
  `;
