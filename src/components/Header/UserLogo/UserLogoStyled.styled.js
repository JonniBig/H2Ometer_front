import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  position: relative;
`;

export const UserLogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: white;
  border-radius: 10px;
  padding: 4px 10px;
  color: black;
  .user {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .userMenu {
    display: flex;
    gap: 4px;
  }
  .imgAvatar {
    border-radius: 50%;
    border: 1px solid var(--blue);
  }
  .name {
    font-size: 16px;
    line-height: 1.33;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const ButtonMenuStyled = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  padding: 0;
`;
